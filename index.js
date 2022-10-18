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

const choice = prompt("0:tahleel,1:muhasila ");
if (choice == 0) {
  console.log(require("./mhasila")(array));
} else {
  console.log(require("./sum")(array));
}
