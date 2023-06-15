import { useState } from "react";
import { useDispatch } from "react-redux"

function SearchListItem({gif}) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const postGif = () =>{
        dispatch({type: 'POST_GIF', payload: {
            name: gif.name,
            fav_type: gif.fav,
            url: gif.url,
            category
        }})
    }


    return (
        <div key={gif.id}>
            <img src={gif.url}/>
            <button onClick={postGif}>Favorite</button>
            <input onChange={(event)=> setCategory(event.target.value)}/>
        </div>

    )
}

export default SearchListItem;