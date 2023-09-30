import "./Promo.css"
import promoLogo from "../../../images/landing-logo.svg";

function Techs () {
  return (
    <section aria-label="Промо" className="promo">
      <img className="promo__logo" src={promoLogo} alt="логотип"/>
      <h1 className="promo__title">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
      <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className="promo__button"
              onClick={() => {
                const width = document.documentElement.clientWidth;
                if (width > 1100) window.scrollTo({ top: 648, behavior: 'smooth' });
                if ((width <= 1100) && (width > 740)) window.scrollTo({ top: 924, behavior: 'smooth' });
                if (width <= 740) window.scrollTo({ top: 710, behavior: 'smooth' });
              }}
      >Узнать больше</button>
    </section>
  );
}

export default Techs;
