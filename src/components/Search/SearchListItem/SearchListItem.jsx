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
            <img src={gif.images.original.url}/>
            <button onClick={postGif}>Favorite</button>
            <input 
            min={0}
            max={10}
            type="number"
            onChange={(event)=> setCategory(event.target.value)}
            />
        </div>

    )
}

export default SearchListItem;