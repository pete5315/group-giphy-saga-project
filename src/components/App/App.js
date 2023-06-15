import React from 'react';
import FavoritesView from '../Favorites/FavoritesView/FavoritesView';
import Header from '../Header/Header';
import SearchView from '../Search/SearchView/SearchView';
import { HashRouter as Router, Route } from "react-router-dom";


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Header/>
      <Router>
      <Route exact path="/">
      <SearchView/>
      </Route>
      <Route exact path="/favorites">
      <FavoritesView/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
