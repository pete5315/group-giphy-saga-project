import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from'redux-logger';
















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
    applyMiddleware(sagaMiddleware, logger)
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
