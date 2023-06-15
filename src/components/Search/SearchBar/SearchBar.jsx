import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBar(){
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const submitSearch = ()=>{
        dispatch({type: 'GET_GIFS', payload: searchQuery})
    }
    
    return(
        <div>
            <h1>searchbar</h1>
            <form onSubmit={submitSearch}>
                <input onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;