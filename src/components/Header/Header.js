import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/icon-account.svg"
import {useNavigate} from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={`header ${props.isLight && "header_light"}`}>
      <img src={logo} alt="лого" className="header__logo"/>
      {/* Авторизованный пользователь */}
      {props.isLoggedIn && (
        <a className={`header__link ${props.isLight && "header__link_light"}`} href='/movies'>Фильмы</a>
      )}
      {props.isLoggedIn && (
        <a className={`header__link ${props.isLight && "header__link_light"}`} href='/saved-movies'>Сохранённые фильмы</a>
      )}
      {props.isLoggedIn && (
        <button className={`header__button ${props.isLight && "header__button_light"}`}>
          Аккаунт <img src={accountIcon} alt="аккаунт" className='header__account-icon' />
        </button>
      )}
      {/* Неавторизованный пользователь */}
      {!props.isLoggedIn && (
        <a className={`header__link header__link_notAuth ${props.isLight && "header__link_light"}`} href='/signup'>
          Регистрация
        </a>
      )}
      {!props.isLoggedIn && (
        <button className={`header__button header__button_notAuth ${props.isLight && "header__button_light"}`}>Войти</button>
      )}
    </header>
  );
}

export default Header;
