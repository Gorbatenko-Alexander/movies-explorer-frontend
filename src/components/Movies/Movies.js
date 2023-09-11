import "./Movies.css";

import Page from "../Page/Page";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies (props) {
  return (
    <Page>
      <Header isLoggedIn={true} isLight={true} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={props.cards} size={props.size} />
      </main>
      <Footer />
    </Page>
  );
}

export default Movies;
