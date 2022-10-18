const prompt = require("prompt-sync")();
const length = parseInt(prompt("how man directions:"));
const array = [];
for (i = 0; i < length; i++) {
  let obj = {
    value: parseInt(prompt(`value ${i + 1}: `)),
    corner: parseInt(prompt(`corner ${i + 1}: `)),
  };
  array.push(obj);
}
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
const sum = (directionsArray) => {
  const { Rx, Ry } = mhasila(directionsArray);
  let R = Math.sqrt(Ry ** 2 + Rx ** 2);
  return R;
};

const choice = prompt("0:tahleel,1:muhasila ");
if (choice == 0) {
  console.log(mhasila(array));
} else {
  console.log(sum(array));
}
