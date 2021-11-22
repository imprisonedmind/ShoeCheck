import { useEffect, useState } from 'react';
import Search from './Search.js';
import Highest from './Buttons/Highest';
import Lowest from './Buttons/Lowest'
import Bottom from './SideBar/Bottom';
import IsMale from './Buttons/IsMale'

function SideBar({ handleSearch, searchTerm, SortByLowest, SortByHighest, SortByMale, rando }) {
  const [isHighest, setIsHighest] = useState(false)
  const [isLowest, setIsLowest] = useState(false)
  const [isMale, setIsMale] = useState(false)

  useEffect(() => {
    if (isHighest && !isLowest) {
      SortByHighest();
      console.log(isHighest)
    } else if (isLowest && !isHighest) {
      SortByLowest();
      console.log(isLowest)
    }
  }, [isHighest, isLowest])

  useEffect(() => {
    if (isMale) {
      SortByMale();
    }
  }, [isMale])


  return (
    // Side Bar Components
    <div className="grid grid-cols-1 grid-rows-6 gap-7 bg-gray-900 h-full max-w-xs min-w-200 p-5 ">
      {/* Top Box */}
      <div className="row-span-1 w-full h-max my-auto text-center rounded-2xl px-5 py-10 bg-gray-800">
        <Search handleSearch={handleSearch} searchTerm={searchTerm}></Search>
      </div>
      {/* middle box */}
      <div className="row-span-2 w-full rounded-2xl p-7 text-gray-200 bg-gray-800 ">
        <div className="grid grid-col-1 grid-row-2 gap-7 h-auto w-full ">
          <Highest setIsHighest={setIsHighest} isHighest={isHighest} isLowest={isLowest} isMale={isMale} ></Highest>
          <Lowest setIsLowest={setIsLowest} isLowest={isLowest} isHighest={isHighest} isMale={isMale} ></Lowest>
          <IsMale setIsMale={setIsMale} isMale={isMale} isLowest={isLowest} isHighest={isHighest}></IsMale>
        </div>
      </div>
      {/* bottom box */}
      <Bottom></Bottom>
    </div>
  );
}

export default SideBar;
