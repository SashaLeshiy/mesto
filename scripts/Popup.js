export default class Popup {
    constructor(selectorPopup) {
        this._selector = selectorPopup;
        this._element = document.querySelector(this._selector);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._element.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._element.classList.remove('popup_opened');
    }


    setEventListeners() {
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this._element.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup')) {
            this.close();
            }
        })
    }
}