// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects
//     numberArray.map((num) => {
//         const numberObj = {val: num}
//         return numberObj;
//     })
// }

// transformToObjects([1, 2]);
// console.log(numberObj);


// function transformToObjects(numberArray) {
//     const numberObjects = numberArray.map((num) => {
//         return { val: num };
//     });
//     return numberObjects; // Return the array of objects
// }

// const numberObj = transformToObjects([1, 2]);
// console.log(numberObj);



//leverage method chaining
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price );

const sum = transformedArray.reduce((prev, cur) => prev + cur, 0)

const sum2 = originalArray.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97