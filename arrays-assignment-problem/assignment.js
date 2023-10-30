// 1
const newArr = [1, 2, 5, 120, 65, 12];

const numFilter = newArr.filter(num => num > 5);
console.log(numFilter);

const numMap = newArr.map(num => ({val: num}))
console.log(numMap);


const numReduce  = newArr.reduce((a,b) => {
    return a * b;
}, 1);
console.log(numReduce);

//2
// function findMax(arr) {
//     const arr2 = Math.max(...arr);
//     console.log(arr2);
// }

// findMax(newArr)
function findMax(...nums) {
    let curMax = nums[0];

    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        } 
    } 
    return curMax;
}

console.log(findMax(...newArr));

//3
// function findMax2(arr) {
//     const arr2 = [Math.max(...arr), Math.min(...arr),  ]
//     const [min, max] = arr2;
    
//     console.log(min, max);
// }
// findMax2(newArr)

function findMinMax(...nums) {
    let curMin = nums[0];
    let curMax = nums[0];

    for (const num of nums) {
        if (num < curMin) {
            curMin = num;
        } 
        if (num > curMax) {
            curMax = num;
        } 
    } 
    return [curMin, curMax];
}

const [min, max] = findMinMax(...newArr);
console.log(min, max);

//4
const userIds = new Set();
userIds.add(10); 
userIds.add(-5); 
userIds.add(-5); 

console.log(userIds);