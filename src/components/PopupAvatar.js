// import Popup from '../components/Popup.js';
// import { userAvatar } from '../utils/constants.js';

// export default class PopupAvatar extends Popup {
//     constructor ({ callback }, selectorPopup) {
//         super(selectorPopup);
//         this._callback = callback;
// }

// _getInputValues(){
//     this._inputList = this._element.querySelector('.input__text');
//     console.log(this._inputList);
//     this._inputList.name = this._inputList.value;
//         return this._inputList.name; 
// }

// setEventListeners() {
//     super.setEventListeners();
//     this._element.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         this._callback(this._getInputValues());
//     });
       
// }

// close() {
//     super.close();
//     this._element.querySelector('.input').reset();
//     }

// }