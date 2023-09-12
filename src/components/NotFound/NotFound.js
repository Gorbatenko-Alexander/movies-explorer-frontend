import "./NotFound.css";

import Page from "../Page/Page";

function NotFound (props) {
  return (
    <Page>
      <main className="not-found">
        <p className="not-found__header">404</p>
        <p className="not-found__text">Страница не найдена</p>
        <p className="not-found__link-container">
          <a href="/" className="not-found__link">Назад</a>
        </p>
      </main>
    </Page>
  );
}

export default NotFound;
