import "./Register.css";

import Page from "../Page/Page";
import FormField from "../FormField/FormField";
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";
import React from "react";

function Register () {
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const navigate = useNavigate();

  const handleFormChange = (evt) => {
    setIsValid(evt.target.closest("form").checkValidity());
  }

  return (
    <Page>
      <main className="register">
        <img src={logo} alt="лого" className="register__logo"
             onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        />
        <p className="register__title">Добро пожаловать!</p>
        <form className="register__form" onChange={handleFormChange}>
          <FormField value={nameValue} setValue={setNameValue} name={"name"}  type={"text"} title={"Имя"}
                     required={true} min={2} max={40} />
          <FormField value={emailValue} setValue={setEmailValue} name={"email"} type={"email"} title={"E-mail"}
                     required={true} min={2} max={40} />
          <FormField value={passwordValue} setValue={setPasswordValue} name={"password"} type={"password"} title={"Пароль"}
                     required={true} min={2} max={40} />
          <button type="submit" className={`register__button ${!isValid && "register__button_disabled"}`}>Зарегистрироваться</button>
        </form>
        <p className="register__info">
          Уже зарегистрированы?
          <a href="/signin" className="register__info-link"
             onClick={(evt) => {evt.preventDefault(); navigate('/signin');}}
          >Войти</a>
        </p>
      </main>
    </Page>
  );
}

export default Register;
