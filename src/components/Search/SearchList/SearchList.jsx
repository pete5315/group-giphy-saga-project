import SearchListItem from "../SearchListItem/SearchListItem";
import { useSelector} from 'react-redux';
import {useEffect} from 'react';

function SearchList(){

    const gifList = useSelector(store=>store.gifList);
    console.log('OUR GIF LIST =>>>>>',gifList);
if(gifList.length >0)
    return(
        <div>
            SearchList
            {gifList.data ? (gifList.data.map((gif)=>(
                <SearchListItem gif={gif}/>
            ))):(
                <p>no Gifs to show</p>
            )}
            
        </div>
    )
}

export default SearchList;