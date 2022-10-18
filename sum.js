const sum = (directionsArray) => {
  const { Rx, Ry } = require("./mhasila")(directionsArray);
  let R = Math.sqrt(Ry ** 2 + Rx ** 2);
  return R;
};

module.exports = sum;
