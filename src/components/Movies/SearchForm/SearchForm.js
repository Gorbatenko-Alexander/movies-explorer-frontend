import "./SearchForm.css";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm (props) {
  return (
    <section aria-label="поиск" className="search">
      <form className="search__form">
        <div className="search__container">
          <input type="text" placeholder="Фильм" className="search__input" />
          <button type="submit" className="search__button">Найти</button>
        </div>
        <FilterCheckbox isChecked={true} />
      </form>
    </section>
  );
}

export default SearchForm;
