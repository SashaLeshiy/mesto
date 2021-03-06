import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
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
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues());
        });
           
    }

    close() {
        super.close();
        this._element.querySelector('.input').reset();
        }

}