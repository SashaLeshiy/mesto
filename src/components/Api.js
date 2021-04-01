export default class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    } 

getUserInfo() {
    return fetch(`${this.url}users/me`, {
    headers: this.headers,
    })  
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);   
      })
    .then(data => {
          return data;
    })
    .catch((err) => {
        console.log(err); 
      });
}

getInitialCards() {   
    return fetch(`${this.url}cards`, {
        headers: this.headers,
        })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);   
    })
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
  .then(res => {
      if (res.ok) {
        return res.json();
      }   
      return Promise.reject(`Ошибка: ${res.status}`);
    });
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
  .then(res => {
      if (res.ok) {
        return res.json();
      }   
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

deleteCard(cardId) {
  return fetch(`${this.url}cards/${cardId}`, {
    method: 'DELETE',
    headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);   
      });
}


putLike(cardId) {
  return fetch(`${this.url}cards/likes/${cardId}`, {
    method: 'PUT',
    headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }  
        return Promise.reject(`Ошибка: ${res.status}`);   
      });
}

deleteLike(cardId) {
  return fetch(`${this.url}cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);     
      });
}

setAvatar(link) {
  return fetch(`${this.url}users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      avatar: link
    }),
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);   
      });
}

}
