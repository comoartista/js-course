// not related to game

const sumUp = (a, b, ...numbers) => {
  const validateNumber = (number) => {//funktion inside the funktion
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const subtractUp = function() { 
  let sum = 0;
  for (const num of arguments) { // don't use that
    sum -= num;
  }
  return sum;
}

console.log(sumUp(1, 5, 'fdsa', -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10, 15, 20));