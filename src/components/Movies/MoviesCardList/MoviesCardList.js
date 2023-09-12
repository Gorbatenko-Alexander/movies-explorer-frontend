import "./MoviesCardList.css";

import MoviesCard from "./MoviesCard/MoviesCard"

function SearchForm (props) {
  return (
    <section aria-label="фильмы" className="movies-list">
      <ul className="movies-list__container">
        {(props.size > 1100)
          && props.cards.map((card, i) => (<MoviesCard card={card} key={i} />))}
        {(props.size <= 1100) && (props.size > 740)
          && props.cards.slice(0, 8).map((card, i) => (<MoviesCard card={card} key={i} />))}
        {(props.size <= 740) && (props.cards.length > 5)
          && props.cards.slice(0, 5).map((card, i) => (<MoviesCard card={card} key={i} />))}
        {(props.size <= 740) && (props.cards.length <= 5)
          && props.cards.slice(0, 2).map((card, i) => (<MoviesCard card={card} key={i} />))}
      </ul>
      <button className={`movies-list__more ${props.cards.length > 5 && "movies-list__more_active"}`}>Ещё</button>
    </section>
  );
}

export default SearchForm;
