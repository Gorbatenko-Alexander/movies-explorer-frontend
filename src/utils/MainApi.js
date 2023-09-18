import { BASE_API_URL } from "./options";

class MainApi {
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
          return Promise.reject(`${result.message}`);
        });
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this.headers
    })
      .then(this._checkStatus)
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(movie)
    })
      .then(this._checkStatus)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(this._checkStatus)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(this._checkStatus)
  }

  changeUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email
      })
    })
      .then(this._checkStatus)
  }
}

export const mainApi = new MainApi({
  baseUrl: BASE_API_URL,
  headers: {
    authorization: localStorage.getItem('jwt') ? ('Bearer ' + localStorage.getItem('jwt')) : '',
    'Content-Type': 'application/json'
  }
});
