let open = document.querySelector('.profile__button-edit'); //кнопка редактирование
let pop = document.querySelector('.popup'); // переменная всплывающего окна
let close = document.querySelector('.popup__close'); // закрывающая окно
let formElement = document.querySelector('.input'); // элементы в всплывающем окне
let nameInput = document.querySelector('.input_text_name'); // селектор для Имени
let careerInput = document.querySelector('.input_text_career');// селектор для работы
let name = document.querySelector('.profile__heading'); // переменнная Имени в профиле
let career = document.querySelector('.profile__subheading'); // переменнная работы в профиле

function openPopup() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  pop.classList.add('popup_opened');
}

function closePopup() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
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
