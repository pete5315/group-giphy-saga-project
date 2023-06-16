import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "@mui/material";

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
                <Input onChange={(e)=>setSearchQuery(e.target.value)}/>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SearchBar;