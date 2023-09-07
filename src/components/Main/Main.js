import "./Main.css";
import React from 'react';

import Page from "../Page/Page";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Techs from "./Techs/Techs"
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main (props) {

  return (
    <Page>
      <Header isLoggedIn={false} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </Page>
  );
}

export default Main;
