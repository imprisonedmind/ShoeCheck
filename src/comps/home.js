import { useState, useEffect, Suspense, lazy } from "react";
import SideBar from "./SideBar";
// import ShoeData from "../shoedata/data.json";
// import db
import { getdb, db } from '../fire'

// Lazy load
const LazyShoeCard = lazy(() => import("./ShoeCard.js"));


function Home() {
  // USESTATE
  // Use right hand side const to delcare the left hand side, Use left hand side as final.
  // set dataArray & Search Results both equal to the original JSON data of ShoeData.
  // Set searchTerm equal to the contents of the search field.
  const [dataArray, setDataArray] = useState([]);
  const [searchResults, setSearchResults] = useState(db);
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
    let random = searchResults.sort((a, b) => 0.5 - Math.random());
    setDataArray(random)
    console.log('randomise')
  }
  // Filter through the array data and set the new array equal to the data that includes the name and brand.
  // Set the both [] = to the result of the filter
  function setResults() {
    setSearchResults(db)
    const results = db.filter((data) =>
      data.ShoeName.toString().toLowerCase().includes(searchTerm) || data.ShoeBrand.toString().toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
    setDataArray(results);
    console.log(searchTerm)

  }

  const SortByHighest = () => {
    let highest = searchResults.sort(compHighToLow("ShoePrice", stringToNum));
    setDataArray([...highest]);
    console.log('Sorted by highest')
  }

  const SortByLowest = () => {
    let lowest = dataArray.sort(compLowtoHigh("ShoePrice", stringToNum));
    setDataArray([...lowest]);
    console.log('Sorted by Lowest')
  }

  const SortByMale = () => {
    const male = dataArray.filter((data) =>
      data.ShoeSex.toString().includes('Male')
    );
    setDataArray([...male])
    console.log('sorted by male', male)
  }

  // Await for firebase to retunr db before setting the dataarray
  const setdb = async () => {
    const db = await getdb();
    setDataArray(db);
    setSearchResults(db);
    console.log('intial set of database')
  }

  useEffect(() => {
    setdb();
  }, [])

  useEffect(() => {
    setResults();
  }, [searchTerm])


  return (
    <div className="bg-black h-screen w-full flex flex-nowrap">
      <SideBar
        SortByHighest={() => SortByHighest()}
        SortByLowest={() => SortByLowest()}
        SortByMale={() => SortByMale()}
        rando={() => rando()}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      ></SideBar>

      <div className="w-3/4 h-full flex-grow overflow-y-scroll">
        <Suspense fallback={
          <div className="flex justify-center items-center h-full w-full">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          </div>
        }>
          <LazyShoeCard dataArray={dataArray}></LazyShoeCard>
        </Suspense>
      </div>

    </div >
  );
}

export default Home;
