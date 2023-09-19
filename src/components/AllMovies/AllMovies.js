import React from "react";

import Movies from "../Movies/Movies";
import {moviesApi} from "../../utils/MoviesApi";

function AllMovies (props) {
  const [allMovies, setAllMovies] = React.useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [moviesFiltered, setMoviesFiltered] = React.useState(JSON.parse(localStorage.getItem('moviesFiltered')) || []);
  const [moviesShown, setMoviesShown] = React.useState([]);
  const [status, setStatus] = React.useState('films_shown');

  const handleSearch = (value, isShort) => {
    if (!localStorage.getItem('allMovies')) {
      setStatus('loading');
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setAllMovies(res);
          const moviesFiltered = res.filter((movie) => {
            return (movie.nameRU.toLowerCase().includes(value.toLowerCase())
              || movie.nameEN.toLowerCase().includes(value.toLowerCase())) && (!isShort || movie.duration < 40)
          });
          setMoviesFiltered(moviesFiltered);
          if (moviesFiltered.length > 0) setStatus('films_shown');
          else setStatus('nothing_found');
        })
        .catch(() => {setStatus('error')});
    } else {
      const moviesFiltered = allMovies.filter((movie) => {
        return (movie.nameRU.toLowerCase().includes(value.toLowerCase())
          || movie.nameEN.toLowerCase().includes(value.toLowerCase())) && (!isShort || movie.duration < 40)
      });
      setMoviesFiltered(moviesFiltered);
      if (moviesFiltered.length > 0) setStatus('films_shown');
      else setStatus('nothing_found');
    }
  }

  const handleMore = () => {      // Если после увеличения разрешения строка не заполнена - она сперва заполняется, а затем добавляется новая
    const rows = handleResize();
    const currentRows = moviesShown.length / rows.moviesPerRow | 0;
    setMoviesShown(moviesFiltered.slice(0, rows.moviesPerRow * (currentRows + rows.rowsPerClick)));
  }

  const handleResize = () => {
    const width = document.documentElement.clientWidth;
    if (width > 1100) return ({startNumber: 4, moviesPerRow: 4, rowsPerClick: 1});
    if ((width <= 1100) && (width > 740)) return ({startNumber: 4, moviesPerRow: 2, rowsPerClick: 1});
    if (width <= 740) return ({startNumber: 5, moviesPerRow: 1, rowsPerClick: 2});
  }

  React.useEffect(() => {
    const rows = handleResize();
    setMoviesShown(moviesFiltered.slice(0, rows.startNumber * rows.moviesPerRow));
    localStorage.setItem('moviesFiltered', JSON.stringify(moviesFiltered));
  }, [moviesFiltered]);

  return (
    <Movies moviesList={moviesShown} handleSearch={handleSearch} isSaved={false} status={status}
            isMore={moviesShown.length < moviesFiltered.length} handleLike={props.handleLike}
            handleUnlike={props.handleUnlike} handleMore={handleMore} savedMovies={props.savedMovies}/>
  );
}

export default AllMovies;
