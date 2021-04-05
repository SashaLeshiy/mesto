import Popup from '../components/Popup.js';
import { bigImage, imageName } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor (selectorPopup) {
        super(selectorPopup);
    }

    open({src, text}) {    
        bigImage.src = src;
        imageName.textContent = text;   
        super.open();
         
    }

}