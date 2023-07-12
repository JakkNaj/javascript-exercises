const add = function(x ,y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(...args) {
  let outcome = 1;
  for (let i = 0; i < args.length; i++) {
    outcome *= args[i];
  }
  return outcome;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let outcome = 1;
  for (let i = n; i > 0; i--) {
    outcome *= i;
  }
  return outcome;
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
