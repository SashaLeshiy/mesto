import Card from '../src/scripts/Card.js';
import FormValidator from '../src/scripts/FormValidator.js';
import Section from '../src/scripts/Section.js';
import PopupWithForm from '../src/scripts/PopupWithForm.js';
import PopupWithImage from '../src/scripts/PopupWithImage.js';
import UserInfo from '../src/scripts/UserInfo.js';
import '../src/pages/index.css';
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
} from '../src/utils/constants.js';

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
editButton.addEventListener('click', () => {
  const profileData = new UserInfo(profileName.textContent, career.textContent);
  profileData.getUserInfo();
  validProfileForm.resetValidation();
  const popProfile = new PopupWithForm({ callback: () => {
                                        const userInfo = new UserInfo(nameInput.value, careerInput.value);
                                        userInfo.setUserInfo(); 
                                    }
                                    }, popupProfile);
  popProfile.open();
});

//открытие окна добавления карточки
addButton.addEventListener('click', () => { 
  validAddForm.resetValidation();
  const popupCards = new PopupWithForm({ callback: () => {
                                      const data = ({'name':namePlace.value, 'link':linkPlace.value});
                                      const card = new Card(data, '#element', showImg);
                                      const cardElement = card.generateCard(); 
                                      cards.addItem(cardElement); 
                                    }
                                    }, popupCard);                             
  popupCards.open();
})

function showImg(evt){
  evt.preventDefault();
  const popupImage = new PopupWithImage({ src: evt.target.src, text: evt.target.getAttribute('alt')}, openImg);
  popupImage.open();
}




