import "./Portfolio.css"

function Portfolio() {

  return (
    <section className="portfolio" aria-label="">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://gorbatenko-alexander.github.io/how-to-learn/" target="_blank" rel="noreferrer">
            Статичный сайт <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://gorbatenko-alexander.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://mestodep.nomoredomainsicu.ru/" target="_blank" rel="noreferrer">
            Одностраничное приложение <span className="portfolio__link-arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
