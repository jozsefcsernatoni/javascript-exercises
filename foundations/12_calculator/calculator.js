const add = function(number1,number2) {
	return number1+number2;
};

const subtract = function(number1,number2) {
	return number1-number2;
};

const sum = function(arr) {
    const init=0;
    return  arr.reduce((acc,curr)=>acc+curr,init,
);};

const multiply = function(arr) {
    
    return  arr.reduce((acc,curr)=>acc * curr , 
);
};

const power = function(number1,number2) {
return number1**number2;
};

const factorial = function(number1) {
if(!number1==0){
  let fact=1;
  for(let i=1;i<=number1;i++){
    fact*=i;
  }
  return fact;
}
else return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
