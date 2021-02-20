export default class FormValidator {
      constructor(formData, form) {
          this._inputs = formData.inputSelector;
          this._buttons = formData.submitButtonSelector;
          this._error = formData.inputErrorClass;
          this._form = form;
      } 
      
    _setListeners() {   
         this._inputs.forEach((input) => {
         input.addEventListener('input', () => {
             this._checkInputValidity(input, this._form);
             this._toggleButtonState(this._inputs, this._buttons);
         });
        });
     }

    _checkInputValidity(input, currentForm) {
        if(!input.validity.valid) {
            this._showError(input, currentForm, input.validationMessage);
        } else {
            this._hideError(input, currentForm);

        }
    } 

    _showError(input, currentForm, errorMessage) {
        const formError = currentForm.querySelector(`.${input.id}-error`);
        formError.classList.add('input__text-error_active');
        formError.textContent = errorMessage;
    }

    _hideError(input, currentForm) {
        const formError = currentForm.querySelector(`.${input.id}-error`);
        formError.classList.remove('input__text-error_active');
        formError.textContent = '';
    }

    _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
        }

    _toggleButtonState = (inputList, buttonElement) => {
        if(this._hasInvalidInput(inputList)) {
            buttonElement.classList.remove('input__save_active');
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.add('input__save_active');
            buttonElement.removeAttribute('disabled');
        }
        }

    enableValidation() {
        this._setListeners(this._form);
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



