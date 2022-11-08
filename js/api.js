import {showErrorPopUp, showSuccessPopUp, showAlert} from './util.js';

const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((userPhotos) => {
      onSuccess(userPhotos);
    })
    .catch(() => {
      onError(showAlert());
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(showSuccessPopUp());
      } else {
        onFail(showErrorPopUp());
      }
    })
    .catch(() => {
      onFail(showErrorPopUp());
    });
};

export {getData, sendData};
