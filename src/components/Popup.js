export default class Popup {
    constructor(selectorPopup) {
        this._element = document.querySelector(selectorPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }


    setEventListeners() {
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
        
        this._element.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup')) {
            this.close(evt.target);
            }
        });
    }
}