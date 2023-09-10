import "./Login.css";

import Page from "../Page/Page";
import logo from "../../images/logo.svg";
import {useNavigate} from "react-router-dom";

function Login (props) {
  const navigate = useNavigate();

  return (
    <Page>
      <main className="login">
        <img src={logo} alt="лого" className="login__logo"
             onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        />
        <p className="login__title">Рады видеть!</p>
        <form className="login__form">
          <label className="login__field">
            <span className="login__field-title">E-mail</span>
            <input type="text" name="email" className="login__field-input" />
            <span className="login__field-error"></span>
          </label>
          <label className="login__field">
            <span className="login__field-title">Пароль</span>
            <input type="text" name="password" className="login__field-input" />
            <span className="login__field-error"></span>
          </label>
          <button type="submit" className="login__button">Войти</button>
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
