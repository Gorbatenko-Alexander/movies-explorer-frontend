import "./FormField.css";
import React from "react";

function FormField (props) {
  const [isValid, setIsValid] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(true);

  const handleChange = (evt) => {
    setIsValid(evt.target.validity.valid);
    setErrorMessage(evt.target.validationMessage);
    props.setValue(evt.target.value);
    console.log(evt.target.validity);
  }

  return (
    <label className="form-field">
      <span className="form-field__title">{props.title}</span>
      <input value={props.value} name={props.name} type={props.type}
             required={props.required} minLength={props.min} maxLength={props.max} pattern={props.pattern}
             className={`form-field__input ${!isValid && "form-field__input_invalid"}`}
             onChange={handleChange}
      />
      <span className="form-field__error">{errorMessage}</span>
    </label>
  );
}

export default FormField;
