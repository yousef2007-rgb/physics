const mhasila = (directionsArray) => {
  let Rx = 0;
  let Ry = 0;
  for (i = 0; i < directionsArray.length; i++) {
    Rx +=
      directionsArray[i].value *
      Math.cos((directionsArray[i].corner * Math.PI) / 180);
  }

  for (i = 0; i < directionsArray.length; i++) {
    Ry +=
      directionsArray[i].value *
      Math.sin((directionsArray[i].corner * Math.PI) / 180);
  }
  return { Rx, Ry };
};

module.exports = mhasila;
