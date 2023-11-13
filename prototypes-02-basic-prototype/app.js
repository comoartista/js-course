// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);


function getCoupeNumber(num) {
  if (num === ' ' || num < 0 || !Number.isInteger(num)) {
    return console.log('Ошибка. Проверьте правильность введенного номера места');
  } 
  
  if (num === 0 || num > 36) {
    return console.log('Таких мест в вагоне не существует');
  } 

  place = Math.ceil(num / 4)
  console.log(place);
}

getCoupeNumber(5)


function findMaxNumber(num1, num2, num3, num4) {
  console.log(Math.max(num1, num2, num3, num4));
}

findMaxNumber(2, 5, 66, 8)

function fib(num) {
  res = `${num}`
    console.log(res);
}

fib(4)