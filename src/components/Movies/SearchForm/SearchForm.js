import "./SearchForm.css";
import React from "react";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm (props) {
  const [isValid, setIsValid] = React.useState(
    localStorage.getItem('searchValue') && localStorage.getItem('searchValue').length > 0 && !props.isSaved);
  const [isError, setIsError] = React.useState(false);
  const [value, setValue] = React.useState(
    !props.isSaved ? (localStorage.getItem('searchValue') || '') : '');
  const [isShort, setIsShort] = React.useState(
    !props.isSaved ? !!JSON.parse(localStorage.getItem('searchIsShort')) : false);
  const [lastSearchValue, setLastSearchValue] = React.useState('');

  const handleChangeValue = (evt) => {
    setIsError(false);
    setIsValid(evt.target.validity.valid);
    if (!props.isSaved) localStorage.setItem('searchValue', evt.target.value);
    setValue(evt.target.value);
  }

  const handleChangeIsShort = () => {
    if (lastSearchValue !== '') props.handleSearch(lastSearchValue, !isShort);
    if (!props.isSaved) localStorage.setItem('searchIsShort', JSON.stringify(!isShort));
    setIsShort(!isShort);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      props.handleSearch(value, isShort);
      setLastSearchValue(value);
    } else setIsError(true);
  }

  return (
    <section aria-label="поиск" className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate={true} >
        <div className="search__container">
          <input type="text" name="film-name" placeholder="Фильм" className="search__input" required={true}
                 value={value} onChange={handleChangeValue}
          />
          <button type="submit" className={`search__button`}>Найти</button>
          <p className={`search__error ${isError && "search__error_shown"}`}>Введите текст</p>
        </div>
        <FilterCheckbox isChecked={isShort} setIsChecked={handleChangeIsShort} />
      </form>
    </section>
  );
}

export default SearchForm;
