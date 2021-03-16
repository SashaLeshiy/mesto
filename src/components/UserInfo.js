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

    setUserInfo(nameEl, infoEl) {
        this._name.textContent = nameEl;
        this._info.textContent = infoEl;
    }
}