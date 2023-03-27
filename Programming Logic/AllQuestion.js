const prompt = require('prompt-sync')(); // import prompt 
const fs = require('fs');  // import fs

const numbers = fs.readFileSync('index1.txt', 'utf-8').split(',').map(Number);// read the data
const target = parseInt(prompt("Enter a search term:")); // taken searching value

// console.log(target);
// console.log(numbers);

let left = 0; // starting point
let right = numbers.length - 1; // last point
let index = -1;
while (left <= right) {  //  algorithm to find target value
    let mid = Math.floor((left + right) / 2); // mid index of the array
    if (numbers[mid] === target) {
        index = mid;
        break;
    } else if (numbers[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
 // Output 
if (index !== -1) {
    console.log(`The search term was found at index ${index}.`);
} else {
    console.log("The search term was not found.");
}
