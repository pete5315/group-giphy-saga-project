import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeLatest, put} from 'redux-saga/effects'


function* rootSaga() {
    yield takeLatest('GET_GIFS', fetchGifs)
}

function* fetchGifs(action) {
    try {
        console.log('first saga recieved action');
        const gifResponse = yield axios.get('/api/search', action.payload);
        yield put({
            type: 'ADD_GIF',
            payload: gifResponse.data
        })
    } catch (error) {
        console.log('error GETting gifs', error );
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
    combineReducers({gifList}),
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
