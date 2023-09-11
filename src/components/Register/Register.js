import "./Register.css";

import Page from "../Page/Page";
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";

function Register () {
  const navigate = useNavigate();

  return (
    <Page>
      <main className="register">
        <img src={logo} alt="лого" className="register__logo"
             onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        />
        <p className="register__title">Добро пожаловать!</p>
        <form className="register__form">
          <label className="register__field">
            <span className="register__field-title">Имя</span>
            <input type="text" name="name" defaultValue="Виталий" className="register__field-input" />
            <span className="register__field-error"></span>
          </label>
          <label className="register__field">
            <span className="register__field-title">E-mail</span>
            <input type="text" name="email" defaultValue="pochta@yandex.ru"
                   className="register__field-input register__field-input_bold" />
            <span className="register__field-error"></span>
          </label>
          <label className="register__field">
            <span className="register__field-title">Пароль</span>
            <input type="password" name="password" defaultValue="12345678901234" className="register__field-input register__field-input_invalid" />
            <span className="register__field-error">Что-то пошло не так...</span>
          </label>
          <button type="submit" className="register__button">Зарегистрироваться</button>
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
