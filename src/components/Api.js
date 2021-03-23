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
    })
  .catch((err) => {
      console.log(err); 
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
    })
  .catch((err) => {
      console.log(err); 
    });
}

}
