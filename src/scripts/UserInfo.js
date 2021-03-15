import { profileName, career, nameInput, careerInput } from '../utils/constants.js';

export default class UserInfo {
    constructor(nameUser, infoUser) {
        this._name = nameUser;
        this._info = infoUser;
    }

    getUserInfo() {
        nameInput.value = this._name;
        careerInput.value = this._info;
    }

    setUserInfo() {
        profileName.textContent = this._name;
        career.textContent = this._info;
    }
}