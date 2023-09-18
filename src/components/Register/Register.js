import "./Register.css";

import {useNavigate} from "react-router-dom";
import React from "react";

import Page from "../Page/Page";
import AuthForm from "../AuthForm/AuthForm";
import AuthFormField from "../AuthForm/AuthFormField/AuthFormField";
import logo from "../../images/logo.svg";
import { EMAIL_VALIDATION_EXP } from "../../utils/constants";

function Register (props) {
  const [nameValue, setNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    props.handleRegister(nameValue, passwordValue, emailValue);
  }

  return (
    <Page>
      <main className="register">
        <img src={logo} alt="лого" className="register__logo"
             onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        />
        <p className="register__title">Добро пожаловать!</p>
        <AuthForm buttonText={"Зарегистрироваться"} handleSubmit={handleSubmit}>
          <AuthFormField value={nameValue} setValue={setNameValue} name={"name"} type={"text"} title={"Имя"}
                         required={true} min={2} max={30} />
          <AuthFormField value={emailValue} setValue={setEmailValue} name={"email"} type={"text"} title={"E-mail"}
                         required={true} pattern={EMAIL_VALIDATION_EXP} />
          <AuthFormField value={passwordValue} setValue={setPasswordValue} name={"password"} type={"password"} title={"Пароль"}
                         required={true} min={8} />
        </AuthForm>
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
