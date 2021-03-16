// import { profileName, career, nameInput, careerInput } from '../utils/constants.js';

export default class UserInfo {
    constructor(nameElem, infoElem) {
        this._name = nameElem;
        this._info = infoElem;
        
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._info.textContent
         }
    }

    setUserInfo() {
        // profileName.textContent = this._name;
        // career.textContent = this._info;
    }
}