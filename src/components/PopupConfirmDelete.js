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

// _deleteElem() {
//     api.deleteCard(cardId);
//     this._element.removeEventListener('submit', this._deleteElem);
// }

setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', () => {
        console.log('колбэк');
    });
    };




}