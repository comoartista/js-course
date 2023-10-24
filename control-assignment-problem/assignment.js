function randomNumber(num) {
    const randomNumber = Math.random(num); 
    const randomNumber2 = Math.random(num); 

    console.log(randomNumber, randomNumber2);
    
    // if (randomNumber >= 0.7) {
    //     alert();
    // }

    if (randomNumber > 0.7 && randomNumber2 >= 0.7 || randomNumber >= 0.2 || randomNumber2 >= 0.2) {
        alert();
    }
}

randomNumber (1); 

function arr() {
    let arr = [7, 2, 75, 4, 5]

    // for (num of arr) {
    //     console.log(num);
    // }
    
    // for (let i = 0; i <= arr.length; i++) {
    //     console.log(arr[i]);
    // }

    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// arr();