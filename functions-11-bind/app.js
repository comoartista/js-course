const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function(resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) { 
    sum -= num;
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + result);
};

sumUp(showResult.bind(this, 'The result after adding all numbers is: '), 1, 5, 'fdsa', -3, 6, 10);
sumUp(showResult.bind(this, 'The result after adding all numbers is: '), 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractUp(showResult.bind(this, 'The result after substracting all numbers is: '), 1, 10, 15, 20));