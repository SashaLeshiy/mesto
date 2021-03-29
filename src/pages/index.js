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
        formList, 
        profileName, 
        career, 
        userAvatar,
        nameInput, 
        careerInput
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


api.getUserInfo()
.then((result) => {
  profileName.textContent = result.name;
  career.textContent = result.about;
  userAvatar.style.backgroundImage = `url('${result.avatar}')`;
})
.catch((err) => {
  console.log(err); 
}); 

api.getInitialCards()
.then((result) => {
  cards.renderItems(result);
  })
.catch((err) => {
  console.log(err); 
}); 
 
// api.getLike()
// .then((result) => {
//   result.forEach(item => {
//     return item;
//   })
// })
// .catch((err) => {
//   console.log(err); 
// }); 



  const validProfileForm = new FormValidator ({
        activeButtonClass: 'input__save_active',
        inputErrors: Array.from(formList[0].querySelectorAll(`.input__text-error`)),
        errorClass: 'input__text-error_active'
  }, formList[0]);
  validProfileForm.enableValidation();

  const validAddForm = new FormValidator ({
      activeButtonClass: 'input__save_active',
      inputErrorClass: Array.from(formList[1].querySelectorAll(`.input__text-error`)),
      errorClass: 'input__text-error_active'
  }, formList[1]);
  validAddForm.enableValidation();

  const validAvatarForm = new FormValidator ({
    activeButtonClass: 'input__save_active',
    inputErrors: Array.from(formList[2].querySelectorAll(`.input__text-error`)),
    errorClass: 'input__text-error_active'
  }, formList[2]);
  validAvatarForm.enableValidation();

const cards = new Section({   renderer:  (elem) => {
                              const card = new Card(elem, '#element', showImg, api, confirmDeleteCard);
                              const cardElement = card.generateCard();
                              cards.addItem(cardElement);
                              }
                             }, cardElements);


//открытие окна редактирование профиля
const profileData = new UserInfo(profileName, career);
const popProfile = new PopupWithForm({ callback: (elems) => {
                                    profileData.setUserInfo(elems.nameSubject, elems.careerSubject);
                                    api.setUser(elems.nameSubject, elems.careerSubject);
                                    popProfile.close();
                                    }
                                    }, '#profile');
popProfile.setEventListeners();

editButton.addEventListener('click', () => {
  nameInput.value = profileData.getUserInfo().name; 
  careerInput.value = profileData.getUserInfo().info;
  validProfileForm.resetValidation();
  popProfile.open();
});

//открытие окна добавления карточки
const popupCards = new PopupWithForm({ callback: (elems) => {
                                      const data = ({name: elems.nameElement,
                                                     link: elems.linkElement,
                                                     likes:[],
                                                     owner: {
                                                      _id: 'ae5c6565fcfc7aa92249dcab' }
                                      });
                                      const card = new Card(data, '#element', showImg, api, confirmDeleteCard);
                                      const cardElement = card.generateCard();
                                      cards.addItem(cardElement); 
                                      api.setCard(elems.nameElement, elems.linkElement);
                                      popupCards.close();}
}, '#cards');
popupCards.setEventListeners();

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

function confirmDeleteCard() {
    const confirmDel = new PopupConfirmDelete('#confirmDelete');
    confirmDel.open();
    document.querySelector('#confirmDelete').addEventListener('submit', () => {
      console.log('колбэк');
    });
    // confirmDel.setEventListeners();
            // api.deleteCard(this._idCard);
            // this._deleteElem(evt);
}


userAvatar.addEventListener('click', () => {
  validAddForm.resetValidation();
  avatar.open();
})

const avatar = new PopupAvatar({ callback: (avaLink) => {
                                userAvatar.style.backgroundImage = `url('${avaLink}')`;
                                api.setAvatar(avaLink);
                                avatar.close();
  }
  },'#avatar');
avatar.setEventListeners();






