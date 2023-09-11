import './Footer.css';
import React from 'react';

function Footer () {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright"><span className="footer__copyright-symbol">©</span>2020</p>
      <p className="footer__links">
        <a className="footer__link" href="http://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a className="footer__link" href="http://github.com" target="_blank" rel="noreferrer">Github</a>
      </p>
    </footer>
  );
}

export default Footer;
