import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor (bigImage, imageName, selectorPopup) {
        super(selectorPopup);
        this._bigImage = bigImage;
        this._imageName = imageName;
    }

    open({src, text}) {    
        this._bigImage.src = src;
        this._imageName.textContent = text;   
        super.open();
         
    }

}