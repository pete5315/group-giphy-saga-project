import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBar(){
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const submitSearch = (value)=>{
        dispatch({type: 'GET_GIFS', payload: value})
    }
    return(
        <div>
            <form onSubmit={()=>submitSearch(searchQuery)}>
                <input onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;