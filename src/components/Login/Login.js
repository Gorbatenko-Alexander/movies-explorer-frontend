import "./Login.css";

import {Navigate, useNavigate} from "react-router-dom";
import React from "react";

import Page from "../Page/Page";
import logo from "../../images/logo.svg";
import { EMAIL_VALIDATION_EXP } from "../../utils/constants";
import AuthForm from "../AuthForm/AuthForm";
import AuthFormField from "../AuthForm/AuthFormField/AuthFormField";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Login (props) {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSubmit = (setIsDisabled) => {
    props.handleLogin(passwordValue, emailValue, setIsDisabled);
  }

  return currentUser.loggedIn ? (<Navigate to="/movies" replace/>) : (
    <Page>
      <main className="login">
        <img src={logo} alt="лого" className="login__logo"
             onClick={(evt) => {
               evt.preventDefault();
               navigate('/');
             }}
        />
        <p className="login__title">Рады видеть!</p>
        <AuthForm buttonText={"Войти"} handleSubmit={handleSubmit}>
          <AuthFormField value={emailValue} setValue={setEmailValue} name={"email"} type={"email"} title={"E-mail"}
                         required={true} pattern={EMAIL_VALIDATION_EXP}/>
          <AuthFormField value={passwordValue} setValue={setPasswordValue} name={"password"} type={"password"}
                         title={"Пароль"}
                         required={true} min={8}/>
        </AuthForm>
        <p className="login__info">
          Ещё не зарегистрированы?
          <a href="/signup" className="login__info-link"
             onClick={(evt) => {
               evt.preventDefault();
               navigate('/signup');
             }}
          >Регистрация</a>
        </p>
      </main>
    </Page>
  );
}

export default Login;
