import "./Profile.css";

import Page from "../Page/Page";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import React from "react";

function Profile (props) {
  const [isEditing, setIsEditing] = React.useState(false);

  const navigate = useNavigate();

  return (
    <Page>
      <Header isLight={true} isLoggedIn={true} />
      <main className="profile">
        <p className="profile__title">Добро пожаловать!</p>
        <form className="profile__form">
          <label className="profile__field">
            <span className="profile__field-title">E-mail</span>
            <input type="text" name="email" defaultValue="Виталий"
                   readOnly={!isEditing} className="profile__field-input" />
          </label>
          <label className="profile__field">
            <span className="profile__field-title">Пароль</span>
            <input type="text" name="password" defaultValue="pochta@yandex.ru"
                   readOnly={!isEditing} className="profile__field-input" />
          </label>
          <p className={`profile__error ${!isEditing && "profile__error_inactive"}`}>
            При обновлении профиля произошла ошибка.
          </p>
          <button type="submit" className={`profile__submit-button ${!isEditing && "profile__submit-button_inactive"}`}
                  onClick={(evt) => {evt.preventDefault(); setIsEditing(false);}}
          >Сохранить</button>
        </form>
        <button className={`profile__edit-button ${isEditing && "profile__edit-button_inactive"}`}
                onClick={(evt) => {evt.preventDefault(); setIsEditing(true);}}
        >Редактировать</button>
        <a href="/" className={`profile__logout-link ${isEditing && "profile__logout-link_inactive"}`}
           onClick={(evt) => {evt.preventDefault(); navigate('/');}}
        >Выйти из аккаунта</a>
      </main>
    </Page>
  );
}

export default Profile;
