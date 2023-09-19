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
    setIsShort(!isShort);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLastSearchValue(value);
  }

  const handleSearch = props.handleSearch;

  React.useEffect(() => {
    handleSearch(lastSearchValue, isShort);
  }, [lastSearchValue, isShort, handleSearch]);

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
