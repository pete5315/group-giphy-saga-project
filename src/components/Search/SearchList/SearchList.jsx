import SearchListItem from "../SearchListItem/SearchListItem";
import { useSelector} from 'react-redux';

function SearchList(){

    const gifList = useSelector(store=>store.gifList);
    console.log('OUR GIF LIST =>>>>>',gifList);
    

    return(
        <div>
            SearchList
            {gifList.data ? (gifList.data.map((gif, i)=>(
                <SearchListItem key={i} gif={gif}/>
            ))):(
                <p>no Gifs to show</p>
            )}
            
        </div>
    )
}

export default SearchList;