

function Search({ handleSearch, searchTerm }) {
    return (
        <input
            onChange={handleSearch}
            value={searchTerm}
            placeholder="Search"
            type="search"
            name="Search"
            className="bg-gray-700 w-full h-10 rounded-full pl-5  text-white"
        ></input>
    )
}

export default Search