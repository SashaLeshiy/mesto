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

    setUserInfo(nameSubject, infoSubject) {
        this._name.textContent = nameSubject;
        this._info.textContent = infoSubject;
    }
}