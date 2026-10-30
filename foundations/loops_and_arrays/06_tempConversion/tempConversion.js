function round(num, digits) {
  const adjust = Math.pow(10, digits)
  return Math.round(num * adjust) / adjust
}

const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9
  return round(celsius, 1)
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32
  return round(fahrenheit, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
