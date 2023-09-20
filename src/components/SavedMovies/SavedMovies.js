import React from "react";

import Movies from "../Movies/Movies";

function SavedMovies (props) {
  const [status, setStatus] = React.useState('films_shown');
  const [moviesShown, setMoviesShown] = React.useState([]);

  const handleSearch = (value, isShort) => {
    const moviesFiltered = props.savedMovies.filter((movie) => {
      return (movie.nameRU.toLowerCase().includes(value.toLowerCase())
        || movie.nameEN.toLowerCase().includes(value.toLowerCase())) && (!isShort || movie.duration < 40)
    });
    setMoviesShown(moviesFiltered);
    if (moviesFiltered.length > 0) setStatus('films_shown')
    else setStatus('nothing_found');
  }

  return (
    <Movies savedMovies={props.savedMovies}
            moviesList={moviesShown}
            isMore={false}
            handleSearch={handleSearch}
            isSaved={true}
            handleUnlike={props.handleUnlike}
            status={status}
    />
  );
}

export default SavedMovies;
