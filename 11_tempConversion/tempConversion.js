const convertToCelsius = function(f) {
  let cConversion = (f - 32)*(5/9);

  // 1 decimal rounding: Math.round(num * 10) / 10
  return Math.round(cConversion * 10)/10;
};

const convertToFahrenheit = function(c) {
  let fConversion = c * (9/5) + 32;
  return Math.round(fConversion * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
