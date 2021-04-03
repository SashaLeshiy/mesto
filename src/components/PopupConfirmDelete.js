import Popup from '../components/Popup.js';

export default class PopupConfirmDelete extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
}

close() {
    super.close();
    // this._element.querySelector('.popup__confirm').removeEventListener('click', this._callback);
}

setEventListeners() {
    super.setEventListeners();
    this._element.querySelector('.popup__confirm').addEventListener('click', () => {
    this._callback(cardId, elem);
    });
}
}
