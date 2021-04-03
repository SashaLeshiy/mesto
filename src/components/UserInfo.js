export default class UserInfo {
    constructor(nameElem, infoElem, avatar) {
        this._name = nameElem;
        this._info = infoElem;
        this._avatar = avatar;
    }

    setId(id) {
        this._userId = id;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._info.textContent,
            avatar: this._avatar.style.backgroundImage,
            id: this._userId
         }
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._info.textContent = about;
    }
    setAvatar(link) {
        this._avatar.style.backgroundImage = `url('${link}')`;
    }
    
}