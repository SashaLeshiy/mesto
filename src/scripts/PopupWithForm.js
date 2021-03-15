import Popup from '../scripts/Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
        const func = (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues);
            this._element.removeEventListener('submit', func);
            this.close();
        };
        this._func = func.bind(this);
}

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.input__text');
        
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          }); 
        return this._formValues;  
     }


    setEventListeners() {
        super.setEventListeners();
       
        this._element.addEventListener('submit', this._func);
           
    }

    close() {
        this._element.classList.remove('popup_opened');
        this._element.querySelector('.input').reset();
        this._element.removeEventListener('submit', this._func);
        }

}