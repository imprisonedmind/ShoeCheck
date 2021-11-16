import { Icon } from '@iconify/react';

function SideBar({ handleSearch, searchTerm, SortByHighest }) {
  return (
    // Side Bar Components
    <div className="bg-gray-900 flex flex-wrap justify-evenly h-full w-1/4 min-w-xs p-5 ">
      {/* Top Box */}
      <div className="bg-gray-800 flex flex-wrap justify-between h-1/5 w-full rounded-2xl p-5">
        {/* Handle Search */}
        <input
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Search"
          type="search"
          name="Search"
          className="bg-gray-700 w-full h-10 rounded-full pl-5  text-white"
        ></input>
        {/* Filter Search Buttons */}
        <div className="flex justify-evenly h-3/5 w-full ">
          <div 
            onClick={SortByHighest}
            className="bg-gray-700 h-14 w-14 my-auto rounded-2xl cursor-pointer">
            <Icon icon="ic:baseline-filter-1" className="h-full w-full p-3 text-blue-500 hover:text-red-500" />
          </div>
          <div
            onClick={SortByHighest}
            className="bg-gray-700 h-14 w-14 my-auto rounded-2xl cursor-pointer"
          >
                      <Icon icon="ic:baseline-filter-9" className="h-full w-full p-3 text-blue-500" />
          </div>

          <div
            onClick={SortByHighest}
            className="bg-gray-700 h-14 w-14 my-auto rounded-2xl cursor-pointer"
          ></div>
        </div>
      </div>
      {/* middle box */}
      <div className="bg-gray-800 h-3/4 w-full rounded-2xl"></div>
    </div>
  );
}

export default SideBar;
