import "./Movies.css";

import Page from "../Page/Page";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import React from "react";
import {moviesApi} from "../../utils/MoviesApi";

function Movies (props) {
  const [moviesList, setMoviesList] = React.useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    moviesApi.getMovies()
      .then((res) => {setMoviesList(res)})
  }

  return (
    <Page>
      <Header isLoggedIn={true} isLight={true} />
      <main className="movies">
        <SearchForm handleSubmit={handleSubmit} />
        <MoviesCardList cards={moviesList} size={props.size} />
      </main>
      <Footer />
    </Page>
  );
}

export default Movies;
