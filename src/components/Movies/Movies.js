import "./Movies.css";
import React from "react";

import Page from "../Page/Page";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies (props) {
  return (
    <Page>
      <Header isLoggedIn={true} isLight={true} />
      <main className="movies">
        <SearchForm handleSearch={props.handleSearch} isSaved={props.isSaved} savedMovies={props.savedMovies} />
        {props.status === 'loading' && (<Preloader />)}
        {props.status === 'nothing_found' && (<p className="movies__message">Ничего не найдено</p>)}
        {props.status === 'error' && (<p className="movies__message">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>)}
        {props.status === 'films_shown' && (
          <MoviesCardList movies={props.moviesList} isSaved={props.isSaved} isMore={props.isMore} handleLike={props.handleLike}
                          handleUnlike={props.handleUnlike} handleMore={props.handleMore} savedMovies={props.savedMovies}/>
        )}
      </main>
      <Footer />
    </Page>
  );
}

export default Movies;
