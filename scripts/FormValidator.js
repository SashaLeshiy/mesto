export default class FormValidator {
      constructor(formData, form) {
          this._formData = formData;
          this._form = form;
      } 
      
    _setListeners() {
         this._form.querySelectorAll('.input__text').forEach((input) => {
             input.addEventListener('input', () => {
             this._checkInputValidity();
         });
        });
     }

    _checkInputValidity() {
        if(!this._formData.inputSelector.validity.valid) {
            this._showError(this._formData.inputSelector.validationMessage);
        } else {
            this._hideError();
        }
    } 

    _showError(errorMessage) {
        this._formData.inputErrorClass.classList.add('input__text-error_active');
        this._formData.inputErrorClass.textContent = errorMessage;
    }

    _hideError() {
        this._formData.inputErrorClass.classList.remove('input__text-error_active');
    }

    enableValidation() {
        this._setListeners();
    }
    // // скрываем ошибку если валидно
// const hideError = (formElement, input) => {
//     const formError = formElement.querySelector(`.${input.id}-error`);
//     formError.classList.remove('input__text-error_active');
//     formError.textContent = "";
// }

    // // выводим ошибку если не валидно
// const showError = (formElement, input, errorMessage) => {
//     const formError = formElement.querySelector(`.${input.id}-error`);
//     formError.classList.add('input__text-error_active');
//     formError.textContent = errorMessage;
// }

    // // проверяем поле на валидность
// const checkInputValidity = (formElement, inputItem) => {
//     if(!inputItem.validity.valid){
//         showError(formElement, inputItem, inputItem.validationMessage);
//     } else {
//         hideError(formElement, inputItem);
//     }
// }

// //слушаем поля ввода
// const setListeners = (formElement) => {
//     const buttonElement = Array.from(formElement.querySelectorAll('.input__save'));
//     const inputList = Array.from(formElement.querySelectorAll('.input__text'));
//     inputList.forEach((inputElem) => {
//         inputElem.addEventListener('input', function (){
//             checkInputValidity(formElement, inputElem);
//             toggleButtonState(inputList, buttonElement[0]);
//         })
//     });
    
// }
}


        // formSelector: '.input',
        // inputSelector: '.input__text',
        // submitButtonSelector: '.input__save',
        // activeButtonClass: 'input__save_active',
        // inputErrorClass: 'input__text-error',
        // errorClass: 'input__text-error_active'








// // проверяем поле на валидность
// const checkInputValidity = (formElement, inputItem) => {
//     if(!inputItem.validity.valid){
//         showError(formElement, inputItem, inputItem.validationMessage);
//     } else {
//         hideError(formElement, inputItem);
//     }
// }

    // _setListeners() {

    // }

// //слушаем поля ввода
// const setListeners = (formElement) => {
//     const buttonElement = Array.from(formElement.querySelectorAll('.input__save'));
//     const inputList = Array.from(formElement.querySelectorAll('.input__text'));
//     inputList.forEach((inputElem) => {
//         inputElem.addEventListener('input', function (){
//             checkInputValidity(formElement, inputElem);
//             toggleButtonState(inputList, buttonElement[0]);
//         })
//     });
    
// }

// // проверяем все поля на валидность
// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// }

// //работаем с кнопкой в зависимости от валидности полей
// const toggleButtonState = (inputList, buttonElement) => {
//     if(hasInvalidInput(inputList)) {
//         buttonElement.classList.remove('input__save_active');
//         buttonElement.setAttribute('disabled', true);
//     } else {
//         buttonElement.classList.add('input__save_active');
//         buttonElement.removeAttribute('disabled');
//     }
//   }

// //выбираем из форм поля ввода
// const enableValidation = () => {
//     let formList = Array.from(document.querySelectorAll('form'));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//         });
//         setListeners(formElement); 
// })
// }

// enableValidation();



