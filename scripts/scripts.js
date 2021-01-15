let open = document.querySelector('.profile__button-edit'); //кнопка редактирование
let pop = document.querySelector('.popup'); // переменная всплывающего окна
let close = document.querySelector('.popup__close'); // закрывающая окно
let formElement = document.querySelector('.input'); // элементы в всплывающем окне
let nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
let careerInput = document.querySelector('.input__text_text_career');// селектор для работы
let name = document.querySelector('.profile__heading'); // переменнная Имени в профиле
let career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
let cardsSection = document.querySelector('.elements');// переменная карточки

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

//наполнение дефолтными карточками
initialCards.forEach(function(item) {
  const elementTemplate = document.querySelector('#element').content;
  const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = item['link'];
    cardElement.querySelector('.element__heading').textContent = item['name'];
    cardsSection.append(cardElement);
});

function openPopup() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  pop.classList.add('popup_opened');
}

function closePopup() {
  pop.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
      name.textContent = nameInput.value;
      career.textContent = careerInput.value;
      closePopup();
}

open.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
