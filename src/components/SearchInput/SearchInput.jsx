

function SearchInput({setSearchTerm}) {
    return (
        <input type="text" name="search" placeholder='Search Product...' onChange={evt => setSearchTerm(evt.target.value)}/>
    )
}

export default SearchInput;