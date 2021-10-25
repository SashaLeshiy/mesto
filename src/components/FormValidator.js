export default class FormValidator {
      constructor(formData, form) {
          this._inputs = Array.from(form.querySelectorAll(`.${formData.inputsText}`));
          this._submitButton = form.querySelector(`.${formData.submitButton}`);
          this._errorSpan = Array.from(form.querySelectorAll(`.${formData.inputErrors}`));
          this._activeButtonClass = formData.activeButtonClass;
          this._errorClass = formData.errorClass;
          this._form = form;
      } 

    resetValidation() {
        this._inputs.forEach((input) => {
            this._hideError(this._form.querySelector(`.${input.id}-error`));
        })
            this._toggleButtonState();
    }  
      
    _setListeners() { 
         this._inputs.forEach((input) => {
         input.addEventListener('input', () => {
             this._checkInputValidity(input, this._form.querySelector(`.${input.id}-error`));
             this._toggleButtonState();
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

    _toggleButtonState() {
        if(this._hasInvalidInput(this._inputs)) {
            this._submitButton.classList.remove(this._activeButtonClass);
            this._submitButton.setAttribute('disabled', true);
        } else {
            this._submitButton.classList.add(this._activeButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
        }

    enableValidation() {
        this._setListeners(this._form);
    }
}



