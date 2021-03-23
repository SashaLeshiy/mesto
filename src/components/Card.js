import PopupConfirmDelete from "./PopupConfirmDelete";

export default class Card {
    constructor(data, cardSelector, func){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._showImg = func;
    }

    _getTemplate() {
        const newCardElement = document
        .querySelector(this._cardSelector).content
        .cloneNode(true);
        return newCardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._cardName = this._element.querySelector('.element__heading');
        this._cardImage = this._element.querySelector('.element__image');
        this._trashButton = this._element.querySelector('.element__trash');
        this._likeButton = this._element.querySelector('.element__like'); 

        
        this._cardImage.src = this._link;
        this._cardImage.setAttribute('alt', this._name);
        this._cardName.textContent = this._name;

        this._setEventListener();
        
        return this._element;
    }

    _setEventListener() {
        this._trashButton.addEventListener('click', (evt) => {
            this._deleteElem(evt);
        });
        this._likeButton.addEventListener('click', (evt) => {
            this._likeElem(evt);
        });
        this._cardImage.addEventListener('click', () => {
            this._showImg(this._name, this._link);
        });
    }

    _deleteElem(evt) {
        const confirmDel = new PopupConfirmDelete('#confirmDelete');
        confirmDel.open();
        confirmDel.setEventListeners();
        // evt.target.closest('.element').remove();
    }

    _likeElem(evt) {
        evt.target.classList.toggle('element__like_black');
    }

}