import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { //initialCards, 
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
 
api.getLikeCount()
.then((result) => {
  result.forEach(item => {
    return item.likes.length;
  })
})
.catch((err) => {
  console.log(err); 
}); 



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

const cards = new Section({   renderer:  (elem) => {
                              const card = new Card(elem, '#element', showImg);
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
                                      const data = ({name: elems.nameElement, link: elems.linkElement});
                                      const card = new Card(data, '#element', showImg);
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
  // popupImage.open({src: evt.target.src, text: evt.target.getAttribute('alt')});
}





