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

const open = document.querySelector('.profile__button-edit'); //кнопка редактирование профиля
const addCard = document.querySelector('.profile__button-add'); //кнопка добавления карточки
const overlay = document.querySelector('.overlay'); // затемнение попап
const overlayImg = document.querySelector('.overlayImg');// затемнение поап с фотографией
const pop = document.querySelector('#profile'); // переменная всплывающего окна профиля
const popCard = document.querySelector('#cards');// переменная всплвающего окна карточек
const openImg = document.querySelector('#bigImage');// переменная всплвающего окна картинки
const close = document.querySelectorAll('.popup__close'); // закрывающая окно
const closeImg = document.querySelector('.popupImg__close');
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

function addNewCard(cards){
const newCardElement = elementTemplate.cloneNode(true);
newCardElement.querySelector('.element__heading').textContent = cards.name;
newCardElement.querySelector('.element__image').src = cards.link;
newCardElement.querySelector('.element__image').setAttribute('alt', cards.name);
cardsSection.prepend(newCardElement);
closePopup();
}

function handleSubmit(evt){
  evt.preventDefault();
  let cards = ({'name':namePlace.value, 'link':linkPlace.value});
  addNewCard(cards);
}

//закрытие попап окон
function closePopup() {
  pop.classList.remove('popup_opened');
  popCard.classList.remove('popup_opened');
  openImg.classList.remove('popup_opened');
  overlay.classList.remove('popup_opened');
  overlayImg.classList.remove('popup_opened');
};

close.forEach(function(item){
  item.addEventListener('click', function(){
    closePopup();
  })
})

//редактирование профиля
formElement.addEventListener('submit', function(evt){
      evt.preventDefault();
      name.textContent = nameInput.value;
      career.textContent = careerInput.value;
      closePopup();
});

//открытие окна редактирование профиля
open.addEventListener('click', function() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  pop.classList.add('popup_opened');
  overlay.classList.add('popup_opened');
});

//открытие окна добавления карточки
addCard.addEventListener('click', function(){
  namePlace.value = ('');
  linkPlace.value = ('');
  popCard.classList.add('popup_opened');
  overlay.classList.add('popup_opened');
})

//слушаем события на карточках
const elementsList = document.querySelectorAll('.elements');
elementsList.forEach(function(item){
  item.addEventListener('click', eventObj, true);
  })

// в зависимости от события лайкаем, удаляем или показываем картинку
function eventObj(evt) {
  evt.preventDefault();
  const bigImage = document.querySelector('.popupImg__image');
  const imageName = document.querySelector('.popupImg__imageName');
  if(evt.target.className === ('element__image')) {         // Попап с окном
    bigImage.src = evt.target.src;
    imageName.textContent = evt.target.getAttribute('alt');
    openImg.classList.add('popup_opened');
    overlayImg.classList.add('popup_opened');
  } else if(evt.target.className === ('element__trash')){     //удаление карточки
        evt.target.closest('.element').remove();
      } else if(evt.target.classList.contains('element__like')) {     //лайк
        evt.target.classList.toggle('element__like_black');
      } 
      return null;
      }

closeImg.addEventListener('click', closePopup);
formCard.addEventListener('submit', handleSubmit);
renderCards();