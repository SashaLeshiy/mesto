import Popup from '../components/Popup.js';

export default class PopupConfirmDelete extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
}
_handleEscClose(evt) {
    if(evt.key === 'Escape') {
        this.close();
    }
}

open() {
    super.open();
}

close(cardId, element) {
    super.close();
    this._element.querySelector('.popup__confirm').removeEventListener('click', this._callback);
}

setEventListeners(cardId, element) {
    super.setEventListeners();
    this._element.querySelector('.popup__confirm').addEventListener('click', this._callback);
}
}