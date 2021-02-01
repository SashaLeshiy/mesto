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

const editButton = document.querySelector('.profile__button-edit'); //кнопка редактирование профиля
const addButton = document.querySelector('.profile__button-add'); //кнопка добавления карточки
const pop = document.querySelector('#profile'); // переменная всплывающего окна профиля
const popCard = document.querySelector('#cards');// переменная всплвающего окна карточек
const openImg = document.querySelector('#bigImage');// переменная всплвающего окна картинки
const closeButton = document.querySelectorAll('.popup__close'); // закрывающая окно
const formElement = document.querySelector('.input_profile'); // элементы в всплывающем окне
const formCard = document.querySelector('.input_card'); // элементы в всплывающем окне добавления карточки
const nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
const careerInput = document.querySelector('.input__text_text_career');// селектор для работы
const name = document.querySelector('.profile__heading'); // переменнная Имени в профиле
const career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
const namePlace = document.querySelector('.input__text_text_element') //селектор название места
const linkPlace = document.querySelector('.input__text_text_link') //селектор ссылка на фотографию
const cardsSection = document.querySelector('.elements');// переменная карточки
const elementTemplate = document.querySelector('#element').content;

// // считаем карточки для изменения стилей для блока карточек
// function cardslenght() {
//   if(initialCards.length % 2 !== 0) {
//     cardsSection.classList.toggle('elements__extraStyle');
//   }
// }

function renderCards() {
  initialCards.forEach(addNewCard);
}

renderCards();

function addNewCard(card){
  const newCardElement = elementTemplate.cloneNode(true);
  newCardElement.querySelector('.element__heading').textContent = card.name;
  newCardElement.querySelector('.element__image').src = card.link;
  newCardElement.querySelector('.element__image').setAttribute('alt', card.name);
  setListener(newCardElement);
  cardsSection.prepend(newCardElement);
  popCard.classList.remove('popup_opened');
}

function handleSubmit(evt){
  evt.preventDefault();
  const card = ({'name':namePlace.value, 'link':linkPlace.value});
  initialCards.unshift(card);
  addNewCard(card);
}

//закрытие попап окон
function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}


closeButton.forEach(function(item){
  item.addEventListener('click', closePopup);
});

const overlayClose = document.querySelectorAll('.popup');
overlayClose.forEach((item) => {
    item.addEventListener('click', closeClick);
    document.addEventListener('keydown', function(evt) {
      if(evt.key === 'Escape') {
        item.classList.remove('popup_opened');
      }
    });
})

function closeClick(evt) {
  if(evt.target.classList.contains('popup')) {
    closePopup(evt);
  }
}

//редактирование профиля
formElement.addEventListener('submit', function(evt){
  evt.preventDefault();
  name.textContent = nameInput.value;
  career.textContent = careerInput.value;
  pop.classList.remove('popup_opened');
});

function openPopup(elem) {
  elem.classList.add('popup_opened');
}


//открытие окна редактирование профиля
editButton.addEventListener('click', function() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  openPopup(pop);
});


//открытие окна добавления карточки
addButton.addEventListener('click', function(){
  namePlace.value = '';
  linkPlace.value = '';
  openPopup(popCard);
})

function setListener(elem) {
  elem.querySelector('.element__trash').addEventListener('click', deleteElem);
  elem.querySelector('.element__like').addEventListener('click', likeElem);
  elem.querySelector('.element__image').addEventListener('click', showImg);
}

function deleteElem(evt){
  evt.target.closest('.element').remove();
}

function likeElem(evt){
  evt.target.classList.toggle('element__like_black');
}

function showImg(evt){
  evt.preventDefault();
  const bigImage = document.querySelector('.popup__image');
  const imageName = document.querySelector('.popup__imageName');
  bigImage.src = evt.target.src;
  imageName.textContent = evt.target.getAttribute('alt');
  openPopup(openImg);
}

formCard.addEventListener('submit', handleSubmit);
