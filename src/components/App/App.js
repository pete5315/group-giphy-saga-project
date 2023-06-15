import React from 'react';
import FavoritesView from '../Favorites/FavoritesView/FavoritesView';
import Header from '../Header/Header';
import SearchView from '../Search/SearchView/SearchView';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Header/>
      <SearchView/>
      <FavoritesView/>
    </div>
  );
}

export default App;
