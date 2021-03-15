import Popup from '../scripts/Popup.js';
import { bigImage, imageName } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor (data, selectorPopup) {
        super(selectorPopup);
        this._text = data.text;
        this._src = data.src;
    }

    open() {
        this._element.classList.add('popup_opened');
        bigImage.src = this._src;
        imageName.textContent = this._text; 
        this.setEventListeners();
    }

}