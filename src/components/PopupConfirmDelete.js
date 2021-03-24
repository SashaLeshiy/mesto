import Popup from '../components/Popup.js';

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

setEventListeners() {
    super.setEventListeners();
    // this._element.addEventListener('submit', (evt) => {
    //     evt.preventDefault();
        
}

}