import Popup from '../scripts/Popup.js';
import Section from '../scripts/Section.js'

export default class PopupWithForm extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
        // this._element = document.querySelector(this._selector);
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
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this._element.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup')) {
            this.close();
            }
        })
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callback();
            this.close();
            
        });
    }

    close() {
        this._element.querySelector('.input').reset();
        this._element.classList.remove('popup_opened');
        

    }

}