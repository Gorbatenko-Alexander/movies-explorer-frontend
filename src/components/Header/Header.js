import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/icon-account.svg"
import {useNavigate} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Header(props) {
  const [isNavigationOpened, setIsNavigationOpened] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const navigate = useNavigate();

  return (
    <header className={`header ${props.isLight && "header_light"}`}>
      <img src={logo} alt="лого"
           className={`header__logo`}
           onClick={(evt) => {evt.preventDefault(); navigate('/');}}
      />

      {/* Авторизованный пользователь */}

      {currentUser.loggedIn && (
        <nav className="header__nav-bar">
          <a href='/movies'
             className={`header__link
             ${props.isLight && "header__link_light"}
             ${window.location.pathname === "/movies" && "header__link_active"}`}
             onClick={(evt) => {evt.preventDefault(); navigate('/movies');}}
          >Фильмы</a>

          <a href='/saved-movies'
             className={`header__link
             ${props.isLight && "header__link_light"}
             ${window.location.pathname === "/saved-movies" && "header__link_active"}`}
             onClick={(evt) => {evt.preventDefault(); navigate('/saved-movies');}}
          >Сохранённые фильмы</a>
        </nav>
      )}

      {currentUser.loggedIn && (
        <button
          className={`header__button ${props.isLight && "header__button_light"}`}
          onClick={(evt) => {evt.preventDefault(); navigate('/profile');}}
        >Аккаунт <img src={accountIcon} alt="аккаунт" className='header__account-icon' /></button>
      )}

      {currentUser.loggedIn && (
        <button
          className={`header__menu-button ${props.isLight && "header__menu-button_light"}`}
          onClick={(evt) => {
            evt.preventDefault();
            setIsNavigationOpened(true);
            document.body.style.overflow = "hidden";
          }}
        />
      )}

      {/* Неавторизованный пользователь */}

      {!currentUser.loggedIn && (
        <a href='/signup'
           className={`header__link header__link_notAuth
           ${props.isLight && "header__link_light"}
           ${window.location.pathname === "/signup" && "header__link_active"}`}
           onClick={(evt) => {evt.preventDefault(); navigate('/signup');}}
        >Регистрация</a>)}

      {!currentUser.loggedIn && (
        <button
          className={`header__button header__button_notAuth
          ${props.isLight && "header__button_light"}`}
          onClick={(evt) => {evt.preventDefault(); navigate('/signin');}}
        >Войти</button>)}

      <Navigation isOpened={isNavigationOpened} setIsOpened={setIsNavigationOpened} />
    </header>
  );
}

export default Header;
