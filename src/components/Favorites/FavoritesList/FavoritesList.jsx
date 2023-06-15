import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";
import {useSelector, useDispatch} from 'react-redux'

function FavoritesList(){

    const favReducer = useSelector(store => store.favsList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'GET_FAV'
        })
    }, [])

    return(
        <div>
            <h2> Gifstagram Favorites List</h2>
            <div>
                {favReducer.map((favItem) => (
                     <FavoritesListItem key = {favItem.id} favItem = {favItem}/>
                ))}
           
            </div>
        </div>
    )
}

export default FavoritesList;