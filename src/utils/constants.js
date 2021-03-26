//массив с дефолтными карточками
// export const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
//   ];
  
  export const cardElements = document.querySelector('.elements'); // блок с карточками
  export const editButton = document.querySelector('.profile__button-edit'); //кнопка редактирование профиля
  export const addButton = document.querySelector('.profile__button-add'); //кнопка добавления карточки
  export const popupProfile = document.querySelector('#profile'); // переменная всплывающего окна профиля
  export const popupCard = document.querySelector('#cards');// переменная всплвающего окна карточек
  export const openImg = document.querySelector('#bigImage');// переменная всплвающего окна картинки
  export const closeButtons = document.querySelectorAll('.popup__close'); // закрывающая окно
  export const nameInput = document.querySelector('.input__text_text_name'); // селектор для Имени
  export const careerInput = document.querySelector('.input__text_text_career');// селектор для работы
  export const profileName = document.querySelector('.profile__heading'); // переменнная Имени в профиле
  export const career = document.querySelector('.profile__subheading'); // переменнная работы в профиле
  export const userAvatar =  document.querySelector('.profile__image');
  export const namePlace = document.querySelector('.input__text_text_element') //селектор название места
  export const linkPlace = document.querySelector('.input__text_text_link') //селектор ссылка на фотографию
  export const bigImage = document.querySelector('.popup__image');// окно с картинкой
  export const imageName = document.querySelector('.popup__imageName'); // подпись к картинке
  export const formList = Array.from(document.querySelectorAll('form'));
  