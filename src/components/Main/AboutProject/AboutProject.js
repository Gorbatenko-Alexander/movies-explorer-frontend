import "./AboutProject.css";

function AboutProject(props) {

  return (
    <section id="about" className="about-project" aria-label="о проекте">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__info-title">Дипломный проект включал 5 этапов</li>
        <li className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </li>
        <li className="about-project__info-title">На выполнение диплома ушло 5 недель</li>
        <li className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </li>
      </ul>
      <ul className="about-project__timing">
        <li className="about-project__timing-point about-project__timing-point_complete">1 неделя</li>
        <li className="about-project__timing-description">Back-end</li>
        <li className="about-project__timing-point">4 недели</li>
        <li className="about-project__timing-description">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
