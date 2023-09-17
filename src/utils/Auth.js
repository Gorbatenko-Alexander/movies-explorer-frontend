import { BASE_API_URL } from "./options";

class Auth {
  constructor (baseUrl) {
    this._baseUrl = baseUrl
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

  register (name, password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "password": password,
        "email": email
      })
    })
      .then(this._checkStatus)
  }

  login (password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
      .then(this._checkStatus)
  }

  checkToken (token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
      .then(this._checkStatus)
  }
}

export const auth = new Auth(BASE_API_URL);
