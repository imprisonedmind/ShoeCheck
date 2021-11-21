import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Search from './Search.js';



function SideBar({ handleSearch, searchTerm, SortByLowest, SortByHighest, }) {
  const [clickedStyle, setClickedStyle] = useState('border-4 border-red-500')
  const [isClicked, setIsClicked] = useState(false)


  const clicked = () => {
    setIsClicked(!isClicked)
    if (isClicked === true) {
      setClickedStyle('border-4 border-blue-500');
      SortByHighest();
    } else if (isClicked === false) {
      setClickedStyle('border-4 border-red-500');
    }
  }



  return (
    // Side Bar Components
    <div className="bg-gray-900 flex flex-wrap justify-evenly h-full max-w-xs min-w-200 p-5 ">
      {/* Top Box */}
      <div className="bg-gray-800 flex flex-wrap justify-between h-20 w-full rounded-2xl p-5">
        {/* Handle Search */}
        <Search handleSearch={handleSearch} searchTerm={searchTerm}></Search>
        {/* Filter Search Buttons */}

      </div>
      {/* middle box */}
      <div className="bg-gray-800 h-3/4 w-full rounded-2xl p-7 text-gray-200">
        <div className="flex flex-wrap justify-evenly h-3/5 w-full ">

          <div onClick={() => clicked()} className={`${clickedStyle} flex bg-gray-700 h-14 w-full my-auto rounded-2xl cursor-pointer`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
              <Icon icon="ic:baseline-filter-9" className="h-full w-full" />
            </div>

            <p className="h-max w-max my-auto">Highest Price</p>
          </div>

          <div className={`${clickedStyle} flex bg-gray-700 h-14 w-full my-auto rounded-2xl cursor-pointer`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
              <Icon icon="ic:baseline-filter-1" className="h-full w-full" />
            </div>

            <p className="h-max w-max my-auto">Lowest Price</p>
          </div>

          <div className={`${clickedStyle} flex bg-gray-700 h-14 w-full my-auto rounded-2xl cursor-pointer`}>
            <div className="h-full w-1/4 p-4 text-blue-500 hover:text-red-500">
              <Icon icon="ic:baseline-filter-1" className="h-full w-full" />
            </div>

            <p className="h-max w-max my-auto">Random</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SideBar;
