export default class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    } 

getUserInfo() {
    return fetch(`${this.url}users/me`, {
    headers: this.headers,
    })  
    .then(this._checkResponse)
    .then(data => {
          return data;
    })
}

getInitialCards() {   
    return fetch(`${this.url}cards`, {
        headers: this.headers,
        })
    .then(this._checkResponse)
    .then(data => {
        return data;
        })
    .catch((err) => {
        console.log(err); 
      });    
 }

setUser(userName, info) {
  return fetch(`${this.url}users/me`, {
  method: 'PATCH',
  headers: this.headers,
  body: JSON.stringify({
    name: userName,
    about: info
  }),
  })
  .then(this._checkResponse);
}

setCard(cardName, link) {
  return fetch(`${this.url}cards`, {
  method: 'POST',
  headers: this.headers,
  body: JSON.stringify({
    name: cardName,
    link: link
  }),
  })
  .then(this._checkResponse)
}

deleteCard(cardId) {
  return fetch(`${this.url}cards/${cardId}`, {
    method: 'DELETE',
    headers: this.headers,
    })
    .then(this._checkResponse)
}


putLike(cardId) {
  return fetch(`${this.url}cards/likes/${cardId}`, {
    method: 'PUT',
    headers: this.headers,
    })
    .then(this._checkResponse)
}

deleteLike(cardId) {
  return fetch(`${this.url}cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: this.headers,
    })
    .then(this._checkResponse)
}

setAvatar(link) {
  return fetch(`${this.url}users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      avatar: link
    }),
    })
    .then(this._checkResponse)
}

_checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

}
