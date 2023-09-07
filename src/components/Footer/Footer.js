import './Footer.css';
import React from 'react';

function Footer (props) {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">© 2020</p>
      <a className="footer__link" href="http://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
      <a className="footer__link" href="http://github.com" target="_blank">Github</a>
    </footer>
  );
}

export default Footer;
