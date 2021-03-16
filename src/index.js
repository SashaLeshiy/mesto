import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';
import './pages/index.css';
import { initialCards, 
        cardElements, 
        editButton, 
        addButton, 
        popupProfile, 
        popupCard, 
        openImg,
        namePlace,
        linkPlace,
        formList, 
        profileName, 
        career, 
        nameInput, 
        careerInput
} from './utils/constants.js';

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

const cards = new Section({ items: initialCards,
                            renderer:  (elem) => {
                              const card = new Card(elem, '#element', showImg);
                              const cardElement = card.generateCard();
                              cards.addItem(cardElement);
                              }
                             }, cardElements);
cards.renderItems();

//открытие окна редактирование профиля
const profileData = new UserInfo(profileName, career);


const popProfile = new PopupWithForm({ callback: () => {
                                      
                                      // const userInfo = new UserInfo();
                                      // userInfo.setUserInfo(); 
                                    }
                                    }, '#profile');

editButton.addEventListener('click', () => {
  
  validProfileForm.resetValidation();
  popProfile.setEventListeners();
  popProfile.open();
});

// //открытие окна добавления карточки
// addButton.addEventListener('click', () => { 
//   validAddForm.resetValidation();
//   const popupCards = new PopupWithForm({ callback: () => {
//                                       const data = ({'name':namePlace.value, 'link':linkPlace.value});
//                                       const card = new Card(data, '#element', showImg);
//                                       const cardElement = card.generateCard(); 
//                                       cards.addItem(cardElement); 
//                                     }
//                                     }, '#cards');                             
//   popupCards.open();
// })

const popupImage = new PopupWithImage('#bigImage');

function showImg(evt){
  evt.preventDefault();
  popupImage.setEventListeners();
  popupImage.open({src: evt.target.src, text: evt.target.getAttribute('alt')});
}




