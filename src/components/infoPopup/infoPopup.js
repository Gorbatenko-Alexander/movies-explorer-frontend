import "./infoPopup.css";

import React from 'react';

function InfoPopup(props) {
  return (
    <div className={`info-popup ${props.isOpened && 'info-popup_opened'}`}>
      <div className="info-popup__container">
        <button type="button" className="info-popup__exit" onClick={props.onClose}></button>
        <p className="info-popup__text">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default InfoPopup;
