import Popup from '../scripts/Popup.js';

export default class PopupWithForm extends Popup {
    constructor (data, selectorPopup) {
        super(selectorPopup);
        this._callback = data.callback;
        this._element = document.querySelector(this._selector);
}
    _getInputValues() {

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
        this._element.addEventListener('submit', this._callback);
    }

    close() {
        this._element.classList.remove('popup_opened');

    }

}