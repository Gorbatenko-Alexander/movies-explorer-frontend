import "./MoviesCardList.css";
import React from "react";

import MoviesCard from "./MoviesCard/MoviesCard";

function MoviesCardList (props) {
  return (
    <section aria-label="фильмы" className="movies-list">
      <ul className="movies-list__container">
        {props.movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.movieId} isSaved={props.isSaved}
                      handleLike={props.handleLike} handleUnlike={props.handleUnlike}
                      isLiked={!!props.savedMovies && !!props.savedMovies.find((m) => m.movieId === movie.movieId)}/>
        ))}
      </ul>
      <button className={`movies-list__more ${props.isMore && "movies-list__more_active"}`}
              onClick={props.handleMore}
      >Ещё</button>
    </section>
  );
}

export default MoviesCardList;
