const fs = require('fs'); // import module fs which help to read and write files

      // Average of numbers
      
const numbers = fs.readFileSync('index.txt', 'utf-8').split(',').map(Number);// read the data in file index.txt
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length; // total sum / total number
console.log(`The average of the integers is: ${average}`); // output

          //Max and Min Number

const smallest = Math.min(...numbers);// used to find min number
const largest = Math.max(...numbers);// used to find max number
console.log(`The smallest integer is: ${smallest} and The largest integer is: ${largest} `);// output

            // Sort Given Numbers

const numbers_sorted = numbers.sort((a, b) => a - b);// sort the array
fs.writeFileSync('output.txt', numbers_sorted.join(','));// return in new file output.txt
  
