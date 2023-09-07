import "./Portfolio.css"

function Portfolio(props) {

  return (
    <section className="portfolio" aria-label="">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://gorbatenko-alexander.github.io/how-to-learn/" target="_blank">
            Статичный сайт <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://gorbatenko-alexander.github.io/russian-travel/" target="_blank">
            Адаптивный сайт <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mestodep.nomoredomainsicu.ru/" target="_blank">
            Одностраничное приложение <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
