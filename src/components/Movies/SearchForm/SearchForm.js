import "./SearchForm.css";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm () {
  const [isValid, setIsValid] = React.useState(false);

  return (
    <section aria-label="поиск" className="search">
      <form className="search__form">
        <div className="search__container">
          <input type="text" name="film-name" placeholder="Фильм" className="search__input" />
          <button type="submit" className="search__button">Найти</button>
        </div>
        <FilterCheckbox isChecked={true} />
      </form>
    </section>
  );
}

export default SearchForm;
