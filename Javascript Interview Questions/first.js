
//Create a function that returns the last element of an array

function LastElement(arr) {
    let lastElement = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            lastElement = arr[i];
            return lastElement;
        }
    }
}

const arr = [1, 2, 3, 4, 5];
console.log(LastElement(arr)); // Output: 5
