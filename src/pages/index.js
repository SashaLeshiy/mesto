import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import { initialCards, 
        cardElements, 
        editButton, 
        addButton, 
        // popupProfile, 
        // popupCard, 
        // openImg,
        // namePlace,
        // linkPlace,
        formList, 
        profileName, 
        career, 
        nameInput, 
        careerInput
} from '../utils/constants.js';

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

const popProfile = new PopupWithForm({ callback: (elems) => {
                                    profileData.setUserInfo(elems.nameSubject, elems.careerSubject);
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
}
}, '#cards');
popupCards.setEventListeners();

addButton.addEventListener('click', () => { 
  validAddForm.resetValidation();            
  popupCards.open();
})

// открытие попапа с картинкой
const popupImage = new PopupWithImage('#bigImage');

function showImg(evt){
  evt.preventDefault();
  popupImage.setEventListeners();
  popupImage.open({src: evt.target.src, text: evt.target.getAttribute('alt')});
}




