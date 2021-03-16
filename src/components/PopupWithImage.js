import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor (selectorPopup) {
        super(selectorPopup);
    }

    open({src, text}) {       
        super.open();
        this._element.querySelector('.popup__image').src = src;
        this._element.querySelector('.popup__imageName').textContent = text; 
    }

}