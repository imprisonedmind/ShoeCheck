import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import ShoeCard from "./ShoeCard";
import ShoeData from "../shoedata/data.json";

function Home() {
  //Randomize array
  function rando() {
    setRandoData(ShoeData.sort((a, b) => 0.5 - Math.random()));
  }
  // Handle Search
  // USESTATE
  // Use right hand side const to delcare the left hand side, Use left hand side as final. 
  // set dataArray & Search Results both equal to the original JSON data of ShoeData.
  // Set searchTerm equal to the contents of the search field. 
  const [randoData, setRandoData] = useState([]);
  const [dataArray, setDataArray] = useState(ShoeData);
  const [searchResults, setSearchResults] = useState(ShoeData);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // Filter through the array data and set the new array equal to the data that includes the name and brand.
  function setResults() {
    const results = randoData.filter(
      (data) =>
        data.ShoeName.toString().toLowerCase().includes(searchTerm) ||
        data.ShoeBrand.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setDataArray(results);
  }
  // Handle Price sorting
  const stringToNum = (s) => s * 1;
  const identity = (x) => x;
  const compHighToLow =
    (key, f = identity) =>
    (m, n) => {
      if (f(n[key]) > f(m[key])) return 1;
      if (f(n[key]) < f(m[key])) return -1;
      return 0;
    };
  const compLowtoHigh =
    (key, f = identity) =>
    (m, n) => {
      if (f(m[key]) > f(n[key])) return 1;
      if (f(m[key]) < f(n[key])) return -1;
      return 0;
    };
  // Sort by Highest Priced Item
  // When this methods runs set search reults equal to lost stored search results
  // then sort this array by highest to lowest const
  // set Main array data to the sorted data.
  function SortByHighest() {
    setSearchResults(setSearchResults);
    const SortByHighest = searchResults.sort(
      compHighToLow("ShoePrice", stringToNum)
    );
    setDataArray(SortByHighest);
    console.log("button pressed", SortByHighest);
  }
  // Sort by lowest price Item
  // refference code comment above, this works the same.
  function SortByLowest() {
    setSearchResults(setSearchResults);
    const SortByLowest = searchResults.sort(
      compLowtoHigh("ShoePrice", stringToNum)
    );
    setDataArray(SortByLowest);
    console.log("button pressed", SortByHighest);
  }
  // Use effect allows for code to run on component mount
  // The [] sets the dependencies for changes to look for and to rerun on change.
  // i.e. on searchTerm change useEffect will run.
  // On first load we randomise the array
  // Then if the searchTerm field is blank set the current arrays to the original JSON array
  // else if the searchTerm field is populated load the setResults method function.
  useEffect(() => {
    rando();
    if (searchTerm === "") {
      setSearchResults(ShoeData);
      setDataArray(ShoeData);
      console.log("EMPTY");
    } else {
      setResults();
      console.log("Filtered");
    }
  }, [searchTerm]);

  return (
    <div className="bg-black h-screen flex flex-nowrap">
      <SideBar
        SortByHighest={SortByHighest}
        SortByLowest={SortByLowest}
        handleSearch={handleSearch}
      ></SideBar>
      <div className="w-3/4 h-full overflow-y-scroll">
        <ShoeCard dataArray={dataArray}></ShoeCard>
      </div>
    </div>
  );
}

export default Home;
