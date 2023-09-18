import "./AuthForm.css"

import React from "react";

function AuthForm (props) {
  const [isValid, setIsValid] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleFormChange = (evt) => {
    setIsValid(evt.target.closest("form").checkValidity());
  }

  const handleFormInvalid = (evt) => {
    evt.preventDefault();
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsDisabled(true);
    props.handleSubmit(setIsDisabled);
  }

  return (
    <form className="auth-form" onChange={handleFormChange} onInvalid={handleFormInvalid} onSubmit={handleFormSubmit}>
      <fieldset className={"auth-form__fields"} disabled={isDisabled}>
        {props.children}
        <button type="submit" className={`auth-form__button ${(!isValid || isDisabled) && "auth-form__button_disabled"}`}>{props.buttonText}</button>
      </fieldset>
    </form>
  );
}

export default AuthForm;
