export default class Card {
    constructor(data, cardSelector, func, api, popupConfirmDelete, userId){
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._showImg = func;
        this._likes = data.likes;
        this._idCard = data._id;
        this._ownerId = data.owner._id;
        this._confirmDelete = popupConfirmDelete;
        this._api = api;
        this._userId = userId;
    }

    _getTemplate() {
        const newCardElement = document
        .querySelector(this._cardSelector).content
        .cloneNode(true);
        return newCardElement;
    }

    
    _isOwner(userId){
        if(this._ownerId === userId) {
            return true;
        } else {
            return false;
        }
    }

    generateCard(userId) {
        this._element = this._getTemplate();

        this._cardName = this._element.querySelector('.element__heading');
        this._cardImage = this._element.querySelector('.element__image');
        this._trashButton = this._element.querySelector('.element__trash');
        this._likeButton = this._element.querySelector('.element__like'); 
        this._likeCount = this._element.querySelector('.element__likeCount');
        this._elem = this._element.querySelector('.element');
        

       
       if(this._isOwner(userId)) {
        this._trashButton.classList.add('element__trash_visible');
       } 
        
        this._cardImage.src = this._link;
        this._cardImage.setAttribute('alt', this._name);
        this._cardName.textContent = this._name;
        
        
       if(this._likes.length === 0) {
        this._likeCount.textContent = 0; 
       } else {
        this._likeCount.textContent = this._likes.length;
       }

       this._likes.forEach(like => {
           if(like._id === userId) {
               this._likeButton.classList.add('element__like_black');
           }
       })

        this._setEventListener(this._idCard, this._elem);
        
        return this._element;
    }

    _likeElem(cardId){
        if(!this._likeButton.classList.contains('element__like_black')) {
            this._api.putLike(cardId)
            .then(res => {
                this._likeButton.classList.add('element__like_black');
                this._likeCount.textContent = res.likes.length;
            })    
            .catch(err => {
                console.log(err);
            })
        } else {
            this._api.deleteLike(cardId)
            .then(res => {
                this._likeButton.classList.remove('element__like_black');
                this._likeCount.textContent = res.likes.length;
            })
            .catch(err => {
                console.log(err);
              }) 
        }
    }

    _setEventListener(cardId, elem) {
        this._trashButton.addEventListener('click', () => {
            this._confirmDelete.open(cardId, elem);
        });
        this._likeButton.addEventListener('click', () => {
            this._likeElem(this._idCard);
        });
        this._cardImage.addEventListener('click', () => {
            this._showImg(this._name, this._link);
        });
    }

    
}