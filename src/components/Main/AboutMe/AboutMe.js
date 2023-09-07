import "./AboutMe.css"
import photo from "../../../images/photo.png"

function AboutMe(props) {

  return (
    <section className="about-me" aria-label="обо мне">
      <h2 className="about-me__title">Студент</h2>
      <p className="about-me__name">Виталий</p>
      <p className="about-me__bio">Фронтенд-разработчик, 30 лет</p>
      <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
        Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной
        работы.</p>
      <a className="about-me__repo" href="https://github.com/Gorbatenko-Alexander" target="_blank">Github</a>
      <img className="about-me__photo" src={photo} alt="фото"/>
    </section>
  );
}

export default AboutMe;
