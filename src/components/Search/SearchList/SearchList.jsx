import SearchListItem from "../SearchListItem/SearchListItem";
import { useSelector } from 'react-redux';

function SearchList(){

    const gifList = useSelector(store=>store.gifList);

    return(
        <div>
            SearchList
            {gifList.map(gif=>(
                <SearchListItem gif={gif}/>
            ))}
            
        </div>
    )
}

export default SearchList;