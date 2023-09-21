import "./Promo.css"
import promoLogo from "../../../images/landing-logo.svg";

function Techs () {
  return (
    <section aria-label="Промо" className="promo">
      <img className="promo__logo" src={promoLogo} alt="логотип"/>
      <h1 className="promo__title">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
      <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className="promo__button"
              onClick={() => {window.scrollTo({ top: 648, behavior: 'smooth' });}}
      >Узнать больше</button>
    </section>
  );
}

export default Techs;
