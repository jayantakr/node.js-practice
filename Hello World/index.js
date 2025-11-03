// const fs = require('node:fs');


// // Task: Read the contents of notes.txt
// console.log('Start the script');

// const contents = fs.readFileSync('notes.txt', 'utf-8');

// console.log('contents', contents);

// console.log('End of the script');

const math = require('./math.js');
const sub = require('./sub.js');
const mul= require('./mul.js');
const div=require('./div.js');
console.log(math(2, 3)); // Outputs: 5
console.log(sub(2,3));
console.log(mul(3,4));
console.log(div(4,2));