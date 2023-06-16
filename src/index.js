
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
    yield takeLatest('GET_GIFS', fetchGifs)
    yield takeLatest('GET_FAV', fetchFav)
    yield takeLatest('POST_GIF', postFavs)
}

function* fetchGifs(action) {
    try {
        console.log('first saga recieved action', action.payload);
        const gifResponse = yield axios.get(`/api/search/${action.payload}`);
        yield put({
            type: 'ADD_GIF',
            payload: gifResponse.data
        })
    } catch (error) {
        console.log('error GETting gifs', error );
    }
}

function* fetchFav() {

    try {
        const favResponse = yield axios.get('/api/favorite')
        yield put ({
            type: 'ADD_FAV',
            payload: favResponse.data
        })
    } catch(err) {
        console.log('Error with favsGET', err)
    }
}



const favsList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return action.payload;
        default:
            return state;
    }
    }
    
    function* postFavs(action) {
        try {
            yield axios.post('/api/favorite', action.payload)
            
        } catch (error) {
            console.log('error POSTing', error);
        }
    }









const gifList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GIF':
            return action.payload;
        default:
            return state;    
    }
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({gifList, favsList}),
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);