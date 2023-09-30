import "./Profile.css";

import Page from "../Page/Page";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {EMAIL_VALIDATION_EXP, NAME_VALIDATION_EXP} from "../../utils/constants";

function Profile (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [isValid, setIsValid] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isChanged, setIsChanged] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    setIsChanged((currentUser.name !== name) || (currentUser.email !== email));
  }, [name, email, currentUser]);

  const handleEdit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      if (isChanged) {
        setIsDisabled(true);
        props.handleEdit({name, email})
          .then(() => {
            setStatus('');
          })
          .catch(() => {
            setIsDisabled(false);
            setStatus('editing error');
          })
      }
    } else setStatus('editing invalid');
  }

  const handleFormChange = (evt) => {
    setStatus('editing');
    setIsValid(evt.target.closest("form").checkValidity());
  }

  return (
    <Page>
      <Header isLight={true} isLoggedIn={true} />
      <main className="profile">
        <p className="profile__title">Привет, {currentUser.name}!</p>
        <form className="profile__form" onChange={handleFormChange} onSubmit={handleEdit} noValidate={true}>
          <fieldset className="profile__fields" disabled={isDisabled}>
            <label className="profile__field">
              <span className="profile__field-title">Имя</span>
              <input type="text" name="name" value={name}
                     onChange={(evt) => {setName(evt.target.value)}}
                     className="profile__field-input"
                     required={true} minLength={2} maxLength={30} pattern={NAME_VALIDATION_EXP}
              />
            </label>
            <label className="profile__field">
              <span className="profile__field-title">E-mail</span>
              <input type="text" name="email" value={email}
                     onChange={(evt) => {setEmail(evt.target.value)}}
                     className="profile__field-input"
                     required={true} pattern={EMAIL_VALIDATION_EXP}
              />
            </label>
          </fieldset>
          <p className={`profile__error ${!status.includes('editing') && "profile__error_inactive"}`}>
            {status.includes('error') && "При обновлении профиля произошла ошибка"}
            {status.includes('invalid') && "Введите корректные данные"}
          </p>
          <button type="submit"
                  className={`profile__submit-button
                  ${!status.includes('editing') && "profile__submit-button_inactive"}
                  ${(!isChanged || isDisabled) && "profile__submit-button_disabled"}`}
          >Сохранить</button>
          <button className={`profile__cancel-button ${!status.includes('editing') && "profile__cancel-button_inactive"}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    setStatus('');
                    setName(currentUser.name);
                    setEmail(currentUser.email);
                    setIsDisabled(true);
                  }}
          >Отмена</button>
        </form>
        <button className={`profile__edit-button ${status.includes('editing') && "profile__edit-button_inactive"}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  setStatus('editing');
                  setIsDisabled(false);
                }}
        >Редактировать</button>
        <a href="/"
           className={`profile__logout-link ${status.includes('editing') && "profile__logout-link_inactive"}`}
           onClick={(evt) => {
             evt.preventDefault();
             props.handleLogout();
             navigate('/');
           }}
        >Выйти из аккаунта</a>
      </main>
    </Page>
  );
}

export default Profile;
