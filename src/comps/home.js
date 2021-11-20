import { useState, useEffect, Suspense, lazy } from "react";
import SideBar from "./SideBar";
import ShoeData from "../shoedata/data.json";
// import { db } from '../fire'

const LazyShoeCard = lazy(() => import("./ShoeCard.js"));

function Home() {
  // USESTATE
  // Use right hand side const to delcare the left hand side, Use left hand side as final.
  // set dataArray & Search Results both equal to the original JSON data of ShoeData.
  // Set searchTerm equal to the contents of the search field.
  const [randoData, setRandoData] = useState([]);
  const [dataArray, setDataArray] = useState(ShoeData);
  const [isHighest, setisHighet] = useState();
  const [isLowest, setisLowest] = useState();
  const [searchResults, setSearchResults] = useState(ShoeData);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // Handle price sorting methods
  const stringToNum = (s) => s * 1;
  const identity = (x) => x;
  const compHighToLow = (key, f = identity) => (m, n) => {
    if (f(n[key]) > f(m[key])) return 1;
    if (f(n[key]) < f(m[key])) return -1;
    return 0;
  };
  const compLowtoHigh = (key, f = identity) => (m, n) => {
    if (f(m[key]) > f(n[key])) return 1;
    if (f(m[key]) < f(n[key])) return -1;
    return 0;
  };
  //Randomize array
  function rando() {
    setRandoData(ShoeData.sort((a, b) => 0.5 - Math.random()));
  }
  // Filter through the array data and set the new array equal to the data that includes the name and brand.
  // Set the both [] = to the result of the filter
  function setResults() {
    const results = ShoeData.filter(
      (data) =>
        data.ShoeName.toString().toLowerCase().includes(searchTerm) ||
        data.ShoeBrand.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setDataArray(results);
  }
  // Sort by Highest Priced Item
  // When this methods runs set search reults equal to lost stored search results
  // then sort this array by highest to lowest const
  // set Main array data to the sorted data.
  function SortByHighest() {
    setisHighet(!isHighest)
    const SortByHighest = searchResults.sort(compHighToLow("ShoePrice", stringToNum));
    setDataArray(SortByHighest);
    console.log("Sorted by Highest", SortByHighest);
  }
  // Sort by lowest price Item
  // refference code comment above, this works the same.
  function SortByLowest() {
    setisLowest(!isLowest)
    const SortByLowest = searchResults.sort(compLowtoHigh("ShoePrice", stringToNum));
    setDataArray(SortByLowest);
    console.log("Sorted By Lowest", isLowest);
  }
  // Use effect allows for code to run on component mount
  // The [] sets the dependencies for changes to look for and to rerun on change.
  // i.e. on searchTerm change useEffect will run.
  // On first load we randomise the array

  // useEffect(() => {
  //   rando();
  //   setResults();
  //   if (searchTerm === ('')) {
  //     setDataArray(ShoeData)
  //   }
  //   else if (isHighest === true) {
  //     SortByHighest();
  //   }
  // }, [searchTerm]);
  // // Listen for isHighest or isLowest change.
  // // OnChange if the these are true then run the method.
  // useEffect(() => {

  //   if (isHighest === true) {
  //     SortByHighest();
  //   } else if (isLowest === true) {
  //     SortByLowest();
  //   }
  // }, [isHighest, isLowest])

  useEffect(() => {
    // setDataArray(db);
    setResults();
  }, [searchTerm])


  return (
    <div className="bg-black h-screen w-full flex flex-nowrap">
      <SideBar
        SortByHighest={SortByHighest}
        SortByLowest={SortByLowest}
        handleSearch={handleSearch}
      ></SideBar>
      <div className="w-3/4 h-full flex-grow overflow-y-scroll">
        <Suspense fallback={
          <div className="flex justify-center items-center h-full w-full">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        }
        >
          <LazyShoeCard dataArray={dataArray}></LazyShoeCard>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
