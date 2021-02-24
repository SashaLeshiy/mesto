export default class FormValidator {
      constructor(formData, form) {
          this._inputs = formData.inputSelector;
          this._buttons = formData.submitButtonSelector;
          this._errorSpan = formData.inputErrorClass;
          this._activeButtonClass = formData.activeButtonClass;
          this._errorClass = formData.errorClass;
          this._form = form;
      } 
      
    _setListeners() {   
         this._inputs.forEach((input) => {
         input.addEventListener('input', () => {
             this._checkInputValidity(input, this._form.querySelector(`.${input.id}-error`));
             this._toggleButtonState(this._inputs, this._buttons);
         });
        });
     }

    _checkInputValidity(input, errorSpan) {
        if(!input.validity.valid) {
            this._showError(errorSpan, input.validationMessage);
        } else {
            this._hideError(errorSpan);
        }
    } 

    _showError(errorSpan, errorMessage) {
        errorSpan.classList.add(this._errorClass);
        errorSpan.textContent = errorMessage;
    }

    _hideError(errorSpan) {
        errorSpan.classList.remove(this._errorClass);
        errorSpan.textContent = '';
    }

    _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
        }

    _toggleButtonState = (inputList, buttonElement) => {
        if(this._hasInvalidInput(inputList)) {
            buttonElement.classList.remove(this._activeButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.add(this._activeButtonClass);
            buttonElement.removeAttribute('disabled');
        }
        }

    enableValidation() {
        this._setListeners(this._form);
    }
}



