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


// export const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21/cards',
//     headers: {
//       authorization: '8df10295-759e-4055-b075-ee2c8fc5cf8c',
//       'Content-Type': 'application/json'
//     }
//   });
}
