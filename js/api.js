const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((userPhotos) => {
      onSuccess(userPhotos);
    });
};

export {getData};
