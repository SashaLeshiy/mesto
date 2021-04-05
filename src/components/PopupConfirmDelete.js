import Popup from '../components/Popup.js';

export default class PopupConfirmDelete extends Popup {
    constructor ({ callback }, selectorPopup) {
        super(selectorPopup);
        this._callback = callback;
}

open(cardId, elem) {
    super.open();
    this._cardId = cardId;
    this._elem = elem;
}

setEventListeners() {
    super.setEventListeners();
    this._element.querySelector('.popup__confirm').addEventListener('click', () => {
    this._callback(this._cardId, this._elem);
    });
}
}
