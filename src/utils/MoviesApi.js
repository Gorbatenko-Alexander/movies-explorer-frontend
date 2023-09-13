import { MOVIES_API_URL } from "./options"

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json()
        .then((result) => {
          return Promise.reject(`Ошибка ${res.status}: ${result.message}`);
        });
    }
  }

  _optimizeFilms = (res) => {
    return Promise.resolve(
      res.map((card) => {
        return {
          img: `${this._baseUrl}${card.image.url}`,
          title: card.nameRU,
          duration: card.duration,
          liked: true,
          saved: false,
        }
      })
    )
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this.headers
    })
      .then(this._checkStatus)
      .then(this._optimizeFilms)
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
