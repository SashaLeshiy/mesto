export default class UserInfo {
    constructor(name, about, avatar) {
        this._name = document.querySelector(`.${name}`);
        this._info = document.querySelector(`.${about}`);
        this._avatar = document.querySelector(`.${avatar}`);
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._info.textContent = about;
    }
    setAvatar(link) {
        this._avatar.style.backgroundImage = `url('${link}')`;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._info.textContent,
            avatar: this._avatar,
            id: this._userId
         }
    }
    
}