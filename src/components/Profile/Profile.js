import "./Profile.css";

import Page from "../Page/Page";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {EMAIL_VALIDATION_EXP} from "../../utils/constants";

function Profile (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [isValid, setIsValid] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleEdit = (evt) => {
    evt.preventDefault();
    if (isValid) props.handleEdit({name, email})
      .then(() => {
        setStatus('');
      })
      .catch(() => {setStatus('editing error')})
    else setStatus('editing invalid')
  }

  const handleChange = (evt) => {
    setStatus('editing');
    setIsValid(evt.target.closest("form").checkValidity());
  }

  return (
    <Page>
      <Header isLight={true} isLoggedIn={true} />
      <main className="profile">
        <p className="profile__title">Привет, {currentUser.name}!</p>
        <form className="profile__form" onChange={handleChange} onSubmit={handleEdit} noValidate={true}>
          <label className="profile__field">
            <span className="profile__field-title">Имя</span>
            <input type="text" name="name" defaultValue={currentUser.name} onChange={(evt) => {setName(evt.target.value)}}
                   readOnly={!status.includes('editing')} className="profile__field-input" minLength={2} maxLength={30}/>
          </label>
          <label className="profile__field">
            <span className="profile__field-title">E-mail</span>
            <input type="text" name="email" defaultValue={currentUser.email} onChange={(evt) => {setEmail(evt.target.value)}}
                   readOnly={!status.includes('editing')} className="profile__field-input" pattern={EMAIL_VALIDATION_EXP} />
          </label>
          <p className={`profile__error ${!status.includes('editing') && "profile__error_inactive"}`}>
            {status.includes('error') && "При обновлении профиля произошла ошибка"}
            {status.includes('invalid') && "Введите корректные данные"}
          </p>
          <button type="submit"
                  className={`profile__submit-button
                  ${!status.includes('editing') && "profile__submit-button_inactive"}
                  ${(currentUser.name === name) && (currentUser.email === email) && "profile__submit-button_disabled"}`}
          >Сохранить</button>
          <button className={`profile__cancel-button ${!status.includes('editing') && "profile__cancel-button_inactive"}`}
                  onClick={(evt) => {evt.preventDefault(); setStatus(''); setName(currentUser.name); setEmail(currentUser.email);}}
          >Отмена</button>
        </form>
        <button className={`profile__edit-button ${status.includes('editing') && "profile__edit-button_inactive"}`}
                onClick={(evt) => {evt.preventDefault(); setStatus('editing');}}
        >Редактировать</button>
        <a href="/" className={`profile__logout-link ${status.includes('editing') && "profile__logout-link_inactive"}`}
           onClick={(evt) => {evt.preventDefault(); props.handleLogout(); navigate('/');}}
        >Выйти из аккаунта</a>
      </main>
    </Page>
  );
}

export default Profile;
