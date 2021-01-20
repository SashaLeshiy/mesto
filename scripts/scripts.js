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

let open = document.querySelector('.profile__button-edit'); //кнопка редактирование профиля
let addCard = document.querySelector('.profile__button-add'); //кнопка добавления карточки
let pop = document.querySelector('#profile'); // переменная всплывающего окна профиля
let popCard = document.querySelector('#cards');// переменная всплвающего окна карточек
let openImg = document.querySelector('#bigImage');// переменная всплвающего окна картинки
let close = document.querySelectorAll('.popup__close'); // закрывающая окно
let formElement = document.querySelector('.input_profile'); // элементы в всплывающем окне
let formCard = document.querySelector('.input_card'); // элементы в всплывающем окне добавления карточки
let nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
let careerInput = document.querySelector('.input__text_text_career');// селектор для работы
let name = document.querySelector('.profile__heading'); // переменнная Имени в профиле
let career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
let namePlace = document.querySelector('.input__text_text_element') //селектор название места
let linkPlace = document.querySelector('.input__text_text_link') //селектор ссылка на фотографию
let cardsSection = document.querySelector('.elements');// переменная карточки

const elementTemplate = document.querySelector('#element').content;
const newCardElement = elementTemplate.cloneNode(true);

formCard.addEventListener('submit', function(evt){
  evt.preventDefault();
  newCardElement.querySelector('.element__heading').textContent = namePlace.value;
  newCardElement.querySelector('.element__image').src = linkPlace.value;
  newCardElement.querySelector('.element__image').setAttribute('alt', `Фотография ${namePlace.value}`);
  
  cardsSection.prepend(newCardElement);
  closePopup();
});

//наполнение дефолтными карточками

initialCards.forEach(function(item) {
    const cardElement = elementTemplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = item['link'];
    cardElement.querySelector('.element__image').alt = `Фотография ${item['name']}`;
    cardElement.querySelector('.element__heading').textContent = item['name'];
    cardsSection.append(cardElement);
});

function closePopup() {
  pop.classList.remove('popup_opened');
  popCard.classList.remove('popup_opened');
  openImg.classList.remove('popup_opened');
};

close.forEach(function(item){
  item.addEventListener('click', function(){
    closePopup();
  })
})

formElement.addEventListener('submit', function(evt){
      evt.preventDefault();
      name.textContent = nameInput.value;
      career.textContent = careerInput.value;
      closePopup();
});

open.addEventListener('click', function() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  pop.classList.add('popup_opened');
});

addCard.addEventListener('click', function(){
  namePlace.value = ('');
  linkPlace.value = ('');
  popCard.classList.add('popup_opened');
})

let likeElement = document.querySelectorAll('.element__like');//переменная лайк места
likeElement.forEach(function(item){
  item.addEventListener('click', function(){
    item.classList.toggle('element__like_black');
  });
});

let deleteElement = document.querySelectorAll('.element__trash');
deleteElement.forEach(function(item) {
  item.addEventListener('click', function(){
    item.closest('.element').remove();
  })
})

let imgElement = document.querySelectorAll('.element__image');
imgElement.forEach(function(item){
  item.addEventListener('click', function(evt){
    evt.preventDefault();
    openImg.classList.add('popup_opened');
    let bigImage = document.querySelector('.popup__image');
    bigImage.src = item.src;
    console.log(item);
    // let imageName = document.querySelector('popup_imageName');
    // imageName.textContent = item.alt;
  });
})

