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

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').setAttribute('alt', this._name);;
        this._element.querySelector('.element__heading').textContent = this._name;
        this._setEventListener();

        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.element__trash').addEventListener('click', (evt) => {
            this._deleteElem(evt);
        });
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeElem(evt);
        });
        this._element.querySelector('.element__image').addEventListener('click', (evt) => {
            this._showImg(evt);
        });
    }

    _deleteElem(evt) {
        evt.target.closest('.element').remove();
    }

    _likeElem(evt) {
        evt.target.classList.toggle('element__like_black');
    }

}