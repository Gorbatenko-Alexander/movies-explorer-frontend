import "./AuthForm.css"

import React from "react";

function AuthForm (props) {
  const [isValid, setIsValid] = React.useState(false);

  const handleFormChange = (evt) => {
    setIsValid(evt.target.closest("form").checkValidity());
  }

  const handleFormInvalid = (evt) => {
    evt.preventDefault();
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    props.handleSubmit();
  }

  return (
    <form className="auth-form" onChange={handleFormChange} onInvalid={handleFormInvalid} onSubmit={handleFormSubmit}>
      {props.children}
      <button type="submit" className={`auth-form__button ${!isValid && "auth-form__button_disabled"}`}>{props.buttonText}</button>
    </form>
  );
}

export default AuthForm;
