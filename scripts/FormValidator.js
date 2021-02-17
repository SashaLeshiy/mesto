// выводим ошибку если не валидно
const showError = (formElement, input, errorMessage) => {
    const formError = formElement.querySelector(`.${input.id}-error`);
    formError.classList.add('input__text-error_active');
    formError.textContent = errorMessage;
}

// скрываем ошибку если валидно
const hideError = (formElement, input) => {
    const formError = formElement.querySelector(`.${input.id}-error`);
    formError.classList.remove('input__text-error_active');
    formError.textContent = "";
}

// проверяем поле на валидность
const checkInputValidity = (formElement, inputItem) => {
    if(!inputItem.validity.valid){
        showError(formElement, inputItem, inputItem.validationMessage);
    } else {
        hideError(formElement, inputItem);
    }
}

//слушаем поля ввода
const setListeners = (formElement) => {
    const buttonElement = Array.from(formElement.querySelectorAll('.input__save'));
    const inputList = Array.from(formElement.querySelectorAll('.input__text'));
    inputList.forEach((inputElem) => {
        inputElem.addEventListener('input', function (){
            checkInputValidity(formElement, inputElem);
            toggleButtonState(inputList, buttonElement[0]);
        })
    });
    
}

// проверяем все поля на валидность
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//работаем с кнопкой в зависимости от валидности полей
const toggleButtonState = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.remove('input__save_active');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.add('input__save_active');
        buttonElement.removeAttribute('disabled');
    }
  }

//выбираем из форм поля ввода
const enableValidation = () => {
    let formList = Array.from(document.querySelectorAll('form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setListeners(formElement); 
})
}

enableValidation();



