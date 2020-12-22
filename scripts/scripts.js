let open = document.querySelector('.profile__button-edit');
let pop = document.querySelector('.popup');
let close = document.querySelector('.popup__close');
let formElement = document.querySelector('.input');
let nameInput = document.querySelector('.input__text_name');
let careerInput = document.querySelector('.input__text_career');
let name = document.querySelector('.profile__heading');
let career = document.querySelector('.profile__subheading');

function Popup() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  if(!pop.classList.contains('popup_opened')) {
  pop.classList.add('popup_opened');
} else {
  pop.classList.remove('popup_opened');
}
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    career.textContent = careerInput.value;
    pop.classList.remove('popup_opened');
}

open.addEventListener('click', Popup);
close.addEventListener('click', Popup);
formElement.addEventListener('submit', handleFormSubmit);
