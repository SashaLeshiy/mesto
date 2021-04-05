import { profileName, career, userAvatar } from '../utils/constants.js';

export default class UserInfo {
    constructor(name, about, avatar) {
        this._name = name;
        this._info = about;
        this._avatar = avatar;
    }

    setUserInfo(name, about) {
        this._name = name;
        this._info = about;
        profileName.textContent = this._name;
        career.textContent = this._info;
    }
    setAvatar(link) {
        this._avatar = `url('${link}')`;
        userAvatar.style.backgroundImage = this._avatar;
    }

    getUserInfo() {
        return {
            name: this._name,
            info: this._info,
            avatar: this._avatar,
            id: this._userId
         }
    }
    
}