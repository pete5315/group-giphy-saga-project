import { useState } from "react";
import { useDispatch } from "react-redux"

function SearchListItem({gif}) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    
    const postGif = () =>{
        dispatch({type: 'POST_GIF', payload: {
            name: gif.title,
            fav_type: 'cohort',
            url: gif.images.original.url,
            rating:Number(category),
            category_id: 3
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