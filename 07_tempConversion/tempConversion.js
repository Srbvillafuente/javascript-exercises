const convertToCelsius = function(deg) {
  newDeg = (deg - 32) * (5 / 9);
  return parseFloat(newDeg.toFixed(1));
};

const convertToFahrenheit = function(deg) {
  newDeg = deg * (9 / 5) + 32;
  return parseFloat(newDeg.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
