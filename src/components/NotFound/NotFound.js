import "./NotFound.css";

import {useNavigate} from "react-router-dom";

import Page from "../Page/Page";

function NotFound () {
  const navigate = useNavigate();

  return (
    <Page>
      <main className="not-found">
        <p className="not-found__header">404</p>
        <p className="not-found__text">Страница не найдена</p>
        <p className="not-found__link-container">
          <a href="/" className="not-found__link"
             onClick={(evt) => {
               evt.preventDefault();
               navigate(-1);
             }}
          >Назад</a>
        </p>
      </main>
    </Page>
  );
}

export default NotFound;
