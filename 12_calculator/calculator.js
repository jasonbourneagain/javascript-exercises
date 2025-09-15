const add = function(a,b) {
  return parseInt(a) + parseInt(b);
	
};

const subtract = function(a,b) {
  return parseInt(a) - parseInt(b);
	
};

const sum = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
	
};

const multiply = function(arr) {
  let result = 1;
  for(i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;

};

const power = function(a,b) {
  let pow = 1;
  for(i = 0; i < b; i++) {
    pow *= a;
  }	
  return pow;
};

const factorial = function(a) {
  if(a == 0) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
	
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
