import React, {useState}  from "react"
import SetupStyles from '../scss/setup.module.scss'
import Left from '../scss/left.module.scss'

function SearchBar({changeSearchString}) {

    const [searchString, setSearchString] = useState('')
    
    const handleSetSearch = (event) => {
        changeSearchString(event.target.value)
    }

    return(
        <div className={Left.Search}>
        <input className={SetupStyles.SearchField} type="text" placeholder="Search" onChange={handleSetSearch}></input>
        </div>
    )

}

export default SearchBar