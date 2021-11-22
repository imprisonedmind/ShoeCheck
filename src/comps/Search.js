

function Search({ handleSearch, searchTerm }) {
    return (
        <input
            onChange={handleSearch}
            value={searchTerm}
            placeholder="Search"
            type="search"
            name="Search"
            className=" h-10 w-full pl-5 rounded-full text-white bg-gray-700"
        ></input>
    )
}

export default Search