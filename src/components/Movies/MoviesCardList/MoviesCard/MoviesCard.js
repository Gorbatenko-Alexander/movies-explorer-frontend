import "./MoviesCard.css";

function MoviesCard (props) {
  return (
    <li className="movies-card">
      <img src={props.movie.image} alt={props.movie.nameRU} className="movies-card__picture"
           onClick={() => {window.open(props.movie.trailerLink, '_blank');}} />
      <p className="movies-card__title">{props.movie.nameRU}</p>
      <button
        className=
          {`movies-card__like
          ${!props.isSaved && props.isLiked && "movies-card__like_active"}
          ${props.isSaved && "movies-card__like_saved"}`}
        onClick={() => {
          if (!props.isLiked && !props.isSaved) props.handleLike(props.movie)
          else props.handleUnlike(props.movie.movieId)
        }}
      />
      <p className="movies-card__duration">{`${props.movie.duration / 60 | 0}ч ${props.movie.duration % 60}м`}</p>
    </li>
  );
}

export default MoviesCard;
