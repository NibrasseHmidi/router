
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

import { movie } from './Components/Data';
import { Switch, Route, Link } from 'react-router-dom'
import Add from './Components/Add';
import Details from './Components/Details';
function App() {
  const [search, setSearch] = useState('');
  const [rate, setrateSearch] = useState('');
  const [movies, setMovies] = useState(movie);
  /*recherche avec title */
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  /*recherche avec stars */
  const handleSearchrate = (rate) => {
    setrateSearch(rate)
  }
  /*ajouter un film */
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (


    <>

      <Navigation handleSearch={handleSearch} handleSearchrate={handleSearchrate} handleAddMovie={handleAddMovie} />

      <Switch >
        <Route exact path="/" render={() => (<MovieList movies={movies.filter((el) => (el.title.match(search.trim())) && (el.rate >= rate))} />)} />
        <Route exact path="/add" render={(props)=><Add {...props} handleAddMovie={handleAddMovie}/> }  />
        <Route exact path="/details/:id" render={(props) => <Details {...props} movies={movies} />} />
      </Switch>




      <Footer />
    </>
  );
}

export default App;
