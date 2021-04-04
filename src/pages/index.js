import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import {
        cardElements, 
        editButton, 
        addButton,
        profileForm, 
        addForm,
        addAva,
        profileName, 
        career, 
        userAvatar,
        nameInput, 
        careerInput, 
        textButton
} from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupAvatar from '../components/PopupAvatar.js';

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '8df10295-759e-4055-b075-ee2c8fc5cf8c',
    'Content-Type': 'application/json'
  }
};
export const api = new Api(config);

let userId;

const profileData = new UserInfo(profileName, career, userAvatar);

Promise.all([api.getUserInfo(),api.getInitialCards()])
.then((res) => {
  profileData.setUserInfo(res[0].name, res[0].about);
  profileData.setAvatar(res[0].avatar);
  userId = res[0]._id;
  cards.renderItems(res[1]);
})
.catch((err) => {
    console.log(err); 
});



// api.getUserInfo()
// .then((result) => {
//   profileData.setUserInfo(result.name, result.about);
//   profileData.setAvatar(result.avatar);
//   profileData.setId(result._id);
//   // const profileData = new UserInfo(result.name, result.about, result.avatar, result._id);
//   // profileName.textContent = result.name;
//   // career.textContent = result.about;
//   // userAvatar.style.backgroundImage = `url('${result.avatar}')`;
//   // userId = result._id;
// })
// .catch((err) => {
//   console.log(err); 
// }); 

// api.getInitialCards()
// .then((result) => {
//   cards.renderItems(result);
//   })
// .catch((err) => {
//   console.log(err); 
// }); 


const validProfileForm = new FormValidator ({
        activeButtonClass: 'input__save_active',
        inputsText: Array.from(profileForm.querySelectorAll('.input__text')),
        submitButton: profileForm.querySelector('.input__save'),
        inputErrors: Array.from(profileForm.querySelectorAll(`.input__text-error`)),
        errorClass: 'input__text-error_active'
  }, profileForm);
  validProfileForm.enableValidation();

  const validAddForm = new FormValidator ({
      activeButtonClass: 'input__save_active',
      inputsText: Array.from(addForm.querySelectorAll('.input__text')),
      submitButton: addForm.querySelector('.input__save'),
      inputErrorClass: Array.from(addForm.querySelectorAll(`.input__text-error`)),
      errorClass: 'input__text-error_active'
  }, addForm);
  validAddForm.enableValidation();

  const validAvatarForm = new FormValidator ({
    activeButtonClass: 'input__save_active',
    inputsText: Array.from(addAva.querySelectorAll('.input__text')),
    submitButton: addAva.querySelector('.input__save'),
    inputErrors: Array.from(addAva.querySelectorAll(`.input__text-error`)),
    errorClass: 'input__text-error_active'
  }, addAva);
  validAvatarForm.enableValidation();


  
function createCard(elem, userId) {
  const card = new Card(elem, '#element', showImg, api, popupConfirmDelete, userId);
  const cardElement = card.generateCard(userId);
  return cardElement;
}  


const cards = new Section({   renderer:  (elem) => {
                              // const card = new Card(elem, '#element', showImg, api, confirmDelete, userId);
                              // const cardElement = card.generateCard(userId);
                              // createCard(elem);
                              cards.addItem(createCard(elem, userId));
                              }
                             }, cardElements);


//открытие окна редактирование профиля


const popProfile = new PopupWithForm({ callback: (elems) => {
                                      renderLoading(true, '#profile');
                                      api.setUser(elems.nameSubject, elems.careerSubject)
                                      .then (() => {
                                        profileData.setUserInfo(elems.nameSubject, elems.careerSubject);
                                      })
                                      .then (() => {
                                        popProfile.close();
                                      })
                                      .catch(err => {
                                        console.log(err);
                                      })
                                      .finally(() => {
                                        renderLoading(false, '#profile');
                                      });
                                      }
                                      }, '#profile');
popProfile.setEventListeners();

editButton.addEventListener('click', () => {
  nameInput.value = profileData.getUserInfo().name; 
  careerInput.value = profileData.getUserInfo().info;
  validProfileForm.resetValidation();
  popProfile.open();
});

const avatar = new PopupWithForm({ callback: (elem) => {
                                    renderLoading(true, '#avatar');
                                    api.setAvatar(elem.linkElement)
                                    .then(() => {
                                    profileData.setAvatar(elem.linkElement);
                                    })
                                    .then(() => {
                                    avatar.close();
                                    })
                                    .catch(err => {
                                      console.log(err);
                                    })
                                    .finally(() => {
                                      renderLoading(false, '#avatar');
                                    });
                                  }
},'#avatar');
avatar.setEventListeners();

//открытие окна добавления карточки
const popupCards = new PopupWithForm({ callback: (elems) => {
                                      renderLoading(true, '#cards');
                                      api.setCard(elems.nameElement, elems.linkElement)
                                      .then(res => {
                                      const data = ({name: elems.nameElement,
                                                     link: elems.linkElement,
                                                     likes:[],
                                                     _id: res._id,
                                                     owner: {
                                                      _id: userId }
                                      })
                                        // const card = new Card(data, '#element', showImg, api, confirmDelete, userId);
                                        // const cardElement = card.generateCard(userId);
                                        // cards.addItem(cardElement);
                                        cards.addItem(createCard(data));
                                      })
                                      .then(() => {
                                      popupCards.close();
                                      })
                                      .catch(err => {
                                        console.log(err);
                                      })
                                      .finally(() => {
                                        renderLoading(false, '#cards');
                                      });
}}, '#cards');
popupCards.setEventListeners();

function renderLoading(isLoading, idPopup) {
  const element = document.querySelector(`${idPopup}`);
  const buttonElem = element.querySelector('.input__save');
  if(isLoading) {
    buttonElem.textContent = 'Создание...';
  } else {
    buttonElem.textContent = textButton;
  }
}

addButton.addEventListener('click', () => { 
  validAddForm.resetValidation();            
  popupCards.open();
})

// открытие попапа с картинкой
const popupImage = new PopupWithImage('#bigImage');
popupImage.setEventListeners();

function showImg(name, link){
  popupImage.open({src: link, text: name});
}

// слушатель на аватар
userAvatar.addEventListener('click', () => {
  validAddForm.resetValidation();
  avatar.open();
})

//подтверждение удаления карточки
// function confirmDelete(cardId, element) {
const popupConfirmDelete = new PopupConfirmDelete({ callback: (cardId, elem) => {
                                                    api.deleteCard(cardId)
                                                    .then(() => {
                                                      elem.remove();
                                                    })
                                                    .then(() => {
                                                      popupConfirmDelete.close(cardId, elem);
                                                    })
                                                    .catch( err => {
                                                      console.log(err);
                                                    })
                                                  }
                                                  },'#confirmDelete');
// popupConfirmDelete.setEventListeners();
// }









