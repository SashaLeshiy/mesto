import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';

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
const closeButtons = document.querySelectorAll('.popup__close'); // закрывающая окно
const formElement = document.querySelector('.input_profile'); // элементы в всплывающем окне
const formCard = document.querySelector('.input_card'); // элементы в всплывающем окне добавления карточки
const nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
const careerInput = document.querySelector('.input__text_text_career');// селектор для работы
const profileName = document.querySelector('.profile__heading'); // переменнная Имени в профиле
const career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
const namePlace = document.querySelector('.input__text_text_element') //селектор название места
const linkPlace = document.querySelector('.input__text_text_link') //селектор ссылка на фотографию
const bigImage = document.querySelector('.popup__image');// окно с картинкой
const imageName = document.querySelector('.popup__imageName'); // подпись к картинке
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


// Добавление новой карточки
const addElem = (elem) => {
  const cards = new Card(elem, '#element', showImg);
  const cardElement = cards.generateCard();
  cardElements.prepend(cardElement);
}

//добавление карточек из массива 
initialCards.forEach((item) => {
  addElem(item);
})

//добаление элементов новой карточки
function handleSubmit(evt){
  evt.preventDefault();
  const data = ({'name':namePlace.value, 'link':linkPlace.value});
  addElem(data);
  closePopup(popupCard);
}

function showImg(evt){
  evt.preventDefault();
  bigImage.src = evt.target.src;
  imageName.textContent = evt.target.getAttribute('alt');
  openPopup(openImg);
}

//закрытие попап окон
function closePopup(elem) {
  elem.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
}

// закрытие по клику на крестик
closeButtons.forEach(function(item){
  item.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  });
});

// закрытие по оверлею
popupList.forEach((item) => {
    item.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup')) {
        closePopup(evt.target);
      }
    });
})

// функция закрытия по esc
function handleCloseByEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
      }
}

//редактирование профиля
formElement.addEventListener('submit', function(evt){
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  career.textContent = careerInput.value;
  closePopup(popupProfile);
});

function openPopup(elem) {
  elem.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
}

//открытие окна редактирование профиля
editButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  careerInput.value = career.textContent;
  validProfileForm.resetValidation();
  openPopup(popupProfile);
});

//открытие окна добавления карточки
addButton.addEventListener('click', function(evt){
  namePlace.value = '';
  linkPlace.value = '';
  validAddForm.resetValidation();
  openPopup(popupCard);
})

formCard.addEventListener('submit', handleSubmit);
