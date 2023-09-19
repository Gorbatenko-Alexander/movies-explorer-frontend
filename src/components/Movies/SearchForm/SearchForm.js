import "./SearchForm.css";
import React from "react";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm (props) {
  const [value, setValue] = React.useState(
    !props.isSaved ? (localStorage.getItem('searchValue') || '') : '');
  const [isShort, setIsShort] = React.useState(
    !props.isSaved ? !!JSON.parse(localStorage.getItem('searchIsShort')) : false);
  const [lastSearchValue, setLastSearchValue] = React.useState(
    !props.isSaved ? (localStorage.getItem('searchValue') || '') : '');

  const handleChangeValue = (evt) => {
    if (!props.isSaved) localStorage.setItem('searchValue', evt.target.value);
    setValue(evt.target.value);
  }

  const handleChangeIsShort = () => {
    if (!props.isSaved) localStorage.setItem('searchIsShort', JSON.stringify(!isShort));
    props.handleSearch(lastSearchValue, !isShort);
    setIsShort(!isShort);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleSearch(value, isShort);
    setLastSearchValue(value);
  }

  React.useEffect(() => {
    if ((props.savedMovies.length > 0) && props.isSaved) props.handleSearch(lastSearchValue, isShort);
  }, [props.savedMovies]);

  return (
    <section aria-label="поиск" className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate={true} >
        <div className="search__container">
          <input type="text" name="film-name" placeholder="Фильм" className="search__input" required={true}
                 value={value} onChange={handleChangeValue}
          />
          <button type="submit" className={`search__button`}>Найти</button>
          <p className={`search__error`}></p>
        </div>
        <FilterCheckbox isChecked={isShort} setIsChecked={handleChangeIsShort} />
      </form>
    </section>
  );
}

export default SearchForm;
