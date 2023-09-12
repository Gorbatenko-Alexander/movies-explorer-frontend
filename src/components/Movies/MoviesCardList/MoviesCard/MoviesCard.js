import "./MoviesCard.css";

function MoviesCard (props) {
  return (
    <li className="movies-card">
      <img src={props.card.img} alt="скриншот" className="movies-card__picture" />
      <p className="movies-card__title">{props.card.title}</p>
      {props.card.saved
        ? (<button className={`movies-card__like movies-card__like_saved`}></button>)
        : (<button className={`movies-card__like ${props.card.liked && "movies-card__like_active"}`}></button>)
      }
      <p className="movies-card__duration">{props.card.duration}</p>
    </li>
  );
}

export default MoviesCard;
