import "./Login.css";

import Page from "../Page/Page";
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";
import FormField from "../FormField/FormField";
import React from "react";

function Login () {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const navigate = useNavigate();

  const handleFormChange = (evt) => {
    setIsValid(evt.target.closest("form").checkValidity());
  }

  return (
    <Page>
      <main className="login">
        <img src={logo} alt="лого" className="login__logo"
             onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        />
        <p className="login__title">Рады видеть!</p>
        <form className="login__form" onChange={handleFormChange} onInvalid={(evt) => {evt.preventDefault()}}>
          <FormField value={emailValue} setValue={setEmailValue} name={"email"} type={"email"} title={"E-mail"}
                     required={true} min={2} max={40} pattern={"[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}[.][a-zA-Z0-9]{1,}"} />
          <FormField value={passwordValue} setValue={setPasswordValue} name={"password"} type={"password"} title={"Пароль"}
                     required={true} min={2} max={40} />
          <button type="submit" className={`login__button ${!isValid && "login__button_disabled"}`}>Войти</button>
        </form>
        <p className="login__info">
          Ещё не зарегистрированы?
          <a href="/signup" className="login__info-link"
             onClick={(evt) => {evt.preventDefault(); navigate('/signup');}}
          >Регистрация</a>
        </p>
      </main>
    </Page>
  );
}

export default Login;
