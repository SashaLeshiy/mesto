import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js'

//массив с дефолтными карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardElements = document.querySelector('.elements'); // блок с карточками
const editButton = document.querySelector('.profile__button-edit'); //кнопка редактирование профиля
const addButton = document.querySelector('.profile__button-add'); //кнопка добавления карточки
const popupProfile = document.querySelector('#profile'); // переменная всплывающего окна профиля
const popupCard = document.querySelector('#cards');// переменная всплвающего окна карточек
const openImg = document.querySelector('#bigImage');// переменная всплвающего окна картинки
export const closeButtons = document.querySelectorAll('.popup__close'); // закрывающая окно
const formElement = document.querySelector('.input_profile'); // элементы в всплывающем окне
const formCard = document.querySelector('.input_card'); // элементы в всплывающем окне добавления карточки
export const nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
export const careerInput = document.querySelector('.input__text_text_career');// селектор для работы
export const profileName = document.querySelector('.profile__heading'); // переменнная Имени в профиле
export const career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
const namePlace = document.querySelector('.input__text_text_element') //селектор название места
const linkPlace = document.querySelector('.input__text_text_link') //селектор ссылка на фотографию
export const bigImage = document.querySelector('.popup__image');// окно с картинкой
export const imageName = document.querySelector('.popup__imageName'); // подпись к картинке
const popupList = document.querySelectorAll('.popup');// все попапы


// валидация форм
  const formList = Array.from(document.querySelectorAll('form'));

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
  const popupProfile = new PopupWithForm({ callback: (formData) => {
                                        const newProfile = new UserInfo(formData.nameSubject, formData.careerSubject);
                                        newProfile.setUserInfo(); 
                                    }
                                    },'#profile');
  popupProfile.open();
});

//открытие окна добавления карточки
addButton.addEventListener('click', () => {
  namePlace.value = '';
  linkPlace.value = '';
  validAddForm.resetValidation();
  const popupCards = new PopupWithForm({ callback: (formData) => {
                                      const data = ({'name':formData.nameElement, 'link':formData.linkElement});
                                      const card = new Card(data, '#element', showImg);
                                      console.log(card);
                                      const cardElement = card.generateCard(); 
                                      cards.addItem(cardElement); 
                                    }
                                    },'#cards');                             
  popupCards.open();
})

function showImg(evt){
  evt.preventDefault();
  const popupImage = new PopupWithImage({ src: evt.target.src, text: evt.target.getAttribute('alt')}, '#bigImage');
  popupImage.open();
}


// // Добавление новой карточки
// const addElem = (elem) => {
//   const cards = new Card(elem, '#element', showImg);
//   const cardElement = cards.generateCard();
//   cardElements.prepend(cardElement);
// }


// //добавление карточек из массива 
// initialCards.forEach((item) => {
//   addElem(item);
// })



//добавление элементов новой карточки
// function handleSubmit(evt){
//   evt.preventDefault();
//   const data = ({'name':namePlace.value, 'link':linkPlace.value});
//   const card = new Card(data, '#element', showImg);
//   const cardElement = card.generateCard(); 
//   cardElements.prepend(cardElement);   
//   const close = new Popup('#cards');
//   close.close();
//   // closePopup(popupCard);
// }



//закрытие попап окон
// function closePopup(elem) {
//   elem.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleCloseByEsc);
// }



// закрытие по клику на крестик
    // closeButtons.forEach((elem) => {
    // item.addEventListener('click', (evt) => {
    // const close = new Popup('.popup_opened');
    // close.close(evt.target.closest('.popup'));
  // });

// закрытие по оверлею
// popupList.forEach((item) => {
//     item.addEventListener('click', (evt) => {
//       const close = new Popup('.popup_opened');
//       if(evt.target.classList.contains('popup')) {
//         close.close(evt.target);
//       }
//     });
// })

// // функция закрытия по esc
// function handleCloseByEsc (evt) {
//   if(evt.key === 'Escape') {
//     const close = new Popup('.popup_opened');
//     close.close();
//       }
// }

// //редактирование данных профиля
// formElement.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   career.textContent = careerInput.value;
//   const close = new PopupWithForm('#profile');
//   close.close();
// });

// // добавление новой карточки с данными
// formCard.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const data = ({'name':namePlace.value, 'link':linkPlace.value});
//   const card = new Card(data, '#element', showImg);
//   const cardElement = card.generateCard(); 
//   cardElements.prepend(cardElement);   
//   const close = new PopupWithForm('#cards');
//   close.close();
// });


// function openPopup(elem) {
//   elem.classList.add('popup_opened');
//   document.addEventListener('keydown', handleCloseByEsc);
// }




