import Popup from '../components/Popup.js';

export default class PopupConfirmDelete extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        console.log(selectorPopup);
        this._callback = callback;
}

open(cardId, elem) {
    super.open();
    this.setEventListeners(cardId, elem);
}

close() {
    super.close();
    // this._element.querySelector('.popup__confirm').removeEventListener('click', this._callback);
}

setEventListeners(cardId, elem) {
    super.setEventListeners();
    this._element.querySelector('.popup__confirm').addEventListener('click', () => {
    this._callback(cardId, elem);
    });
}
}
