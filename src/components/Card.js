import PopupConfirmDelete from "./PopupConfirmDelete.js";
import { api } from "../pages/index.js";


export default class Card {
    constructor(data, cardSelector, func, api, confirmDelete){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._showImg = func;
        this._likes = data.likes;
        this._idCard = data._id;
        this._ownerId = data.owner._id;
        this._confirmDelete = confirmDelete;
        this._api = api;
    }

    _getTemplate() {
        const newCardElement = document
        .querySelector(this._cardSelector).content
        .cloneNode(true);
        return newCardElement;
    }

    _isLike(){ 
        
        if(this._likes.length === 0) {
            return false 
        } else {      
        this._likes.forEach(like => {
            if(like._id === 'ae5c6565fcfc7aa92249dcab') {
                return true;
            } else {
                return false;
            }
        })
        }
    }

    _isOwner(){
        if(this._ownerId === 'ae5c6565fcfc7aa92249dcab') {
            return true;
        } else {
            return false;
        }
    }

    generateCard() {
        this._element = this._getTemplate();

        this._cardName = this._element.querySelector('.element__heading');
        this._cardImage = this._element.querySelector('.element__image');
        this._trashButton = this._element.querySelector('.element__trash');
        this._likeButton = this._element.querySelector('.element__like'); 
        this._likeCount = this._element.querySelector('.element__likeCount');
        

       
       if(this._isOwner()) {
        this._trashButton.classList.add('element__trash_visible');
       } 
        
       if(this._isLike()) {
        this._likeButton.classList.add('element__like_black');
       }

        this._cardImage.src = this._link;
        this._cardImage.setAttribute('alt', this._name);
        this._cardName.textContent = this._name;
        
        
       if(this._likes.length === 0) {
        this._likeCount.textContent = 0; 
       } else {
        this._likeCount.textContent = this._likes.length;
       }

        this._setEventListener();
        
        return this._element;
    }

    _setEventListener() {
        this._trashButton.addEventListener('click', () => {
            this._confirmDelete();
        });
        this._likeButton.addEventListener('click', () => {
            this._likeElem(this._likeButton);
        });
        this._cardImage.addEventListener('click', () => {
            this._showImg(this._name, this._link);
        });
    }

    _deleteElem(evt) {
        evt.target.closest('.element').remove();
    }

    _likeElem(likeButton) {
        api.getLike()
        .then(result => {
        result.forEach(item => {
            console.log(item);
        })
        })
        
        if(!this._isLike()) {
        api.putLike(this._idCard);
        this._likeCount.textContent = this._likes.length + 1;
        likeButton.classList.add('element__like_black');
        } else {
        api.deleteLike(this._idCard)
        .then(data => {
            // console.log(data);
        });
        this._likeCount.textContent = this._likes.length - 1;
        likeButton.classList.remove('element__like_black');
        }
           
    }
}