const convertToCelsius = function(fValue) {
cResult=(fValue-32)*5/9;
return Number(cResult.toFixed(1));
};

const convertToFahrenheit = function(cValue) {
fResult=(cValue*9/5+32);
return Number(fResult.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
