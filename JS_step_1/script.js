const someString = 'This is some strange string';

function reverse(str) {
//     const arr = str.split('').reverse().join("").toString();
    
//     return arr

let newstrm = ''
for(let i = str.length-1; i >= 0; i--) {
    newstrm += str[i]
}
return str
}

console.log(reverse(someString));