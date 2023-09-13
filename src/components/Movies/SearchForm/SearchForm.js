import "./SearchForm.css";
import React from "react";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm (props) {
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    setIsValid(evt.target.validity.valid);
  }

  return (
    <section aria-label="поиск" className="search">
      <form className="search__form" onSubmit={props.handleSubmit} onInvalid={(evt) => {evt.preventDefault()}}>
        <div className="search__container">
          <input type="text" name="film-name" placeholder="Фильм" className="search__input" required={true}
                 onChange={handleChange}
          />
          <button type="submit" className={`search__button ${!isValid && "search__button_disabled"}`}>Найти</button>
        </div>
        <FilterCheckbox isChecked={false} />
      </form>
    </section>
  );
}

export default SearchForm;
