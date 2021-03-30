import Popup from '../components/Popup.js';
import { api } from '../pages/index.js';

export default class PopupConfirmDelete extends Popup {
    constructor (selectorPopup) {
        super(selectorPopup);
}
_handleEscClose(evt) {
    if(evt.key === 'Escape') {
        this.close();
    }
}

open() {
    super.open();
}

close() {
    super.close();
}

setEventListeners(cardId, element) {
    super.setEventListeners();
    this._element.addEventListener('click', () => {
        api.deleteCard(cardId);
        element.remove();
        this.close();
    });
    };




}