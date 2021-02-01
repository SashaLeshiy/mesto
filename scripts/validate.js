const profileForm = document.querySelector('.input_profile');
const addForm = document.querySelector('.input_card');
const formInput = document.querySelectorAll('.input__text');

const setListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.input__text'));
    inputList.forEach((inputElem) => {
        inputElem.addEventListener('input', function (){
            checkInputValidity(inputElem);
        })
    });
}

const showError = (input, errorMessage) => {
    const formError = document.querySelector(`.${input.id}-error`);
    formError.classList.add('input__text-error_active');
    formError.textContent = errorMessage;
}

const hideError = (input) => {
    const formError = document.querySelector(`.${input.id}-error`);
    formError.classList.remove('input__text-error_active');
    formError.textContent = "";
}

const checkInputValidity = (inputItem) => {
    if(!inputItem.validity.valid){
        showError(inputItem, inputItem.validationMessage);
    } else {
        hideError(inputItem);
    }
}

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