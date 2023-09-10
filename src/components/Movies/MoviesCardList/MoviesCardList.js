import "./MoviesCardList.css";

import MoviesCard from "./MoviesCard/MoviesCard"

function SearchForm (props) {
  return (
    <section aria-label="фильмы" className="movies-list">
      <ul className="movies-list__container">
        {props.cards.map((card, i) => (
          <MoviesCard card={card} key={i} />
        ))}
      </ul>
      <button className={`movies-list__more ${props.cards.length > 5 && "movies-list__more_active"}`}>Ещё</button>
    </section>
  );
}

export default SearchForm;
