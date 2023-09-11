import "./Navigation.css";
import accountIcon from "../../images/icon-account.svg";
import React from "react";
import {useNavigate} from "react-router-dom";

function Navigation (props) {
  const navigate = useNavigate();

  return (
    <div className={`navigation ${props.isOpened && "navigation_opened"}`}>
      <div className="navigation__container">
        <button className="navigation__exit-button"
                onClick={(evt) => {
                  evt.preventDefault();
                  props.setIsOpened(false);
                  document.body.style.overflow = "";
                }}
        ></button>
        <nav className="navigation__nav-bar">
          <a href="/"
             className={`navigation__link
             ${window.location.pathname === "/" && "navigation__link_active"}`}
             onClick={(evt) => {
               evt.preventDefault();
               navigate('/');
               props.setIsOpened(false);
               document.body.style.overflow = "";
             }}
          >Главная</a>
          <a href="/movies"
             className={`navigation__link
             ${window.location.pathname === "/movies" && "navigation__link_active"}`}
             onClick={(evt) => {
               evt.preventDefault();
               navigate('/movies');
               props.setIsOpened(false);
               document.body.style.overflow = "";
             }}
          >Фильмы</a>
          <a href="/saved-movies"
             className={`navigation__link
             ${window.location.pathname === "/saved-movies" && "navigation__link_active"}`}
             onClick={(evt) => {
               evt.preventDefault();
               navigate('/saved-movies');
               props.setIsOpened(false);
               document.body.style.overflow = "";
             }}
          >Сохранённые фильмы</a>
        </nav>
        <button
          className="navigation__account-button"
          onClick={(evt) => {
            evt.preventDefault();
            navigate('/profile');
            props.setIsOpened(false);
            document.body.style.overflow = "";
          }}
        >Аккаунт <img src={accountIcon} alt="аккаунт" className='navigation__account-icon' /></button>
      </div>
    </div>
  );
}

export default Navigation;
