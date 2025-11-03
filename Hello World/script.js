//console.log('Hello from script.js file');


//const a = 1
//const b = 4

//const sum = a+b

//console.log('Sum is', sum);


// const fs = require('fs');// Built in module

// // console.log(fs);
// const content = fs.readFileSync('notes.txt','utf-8');
// console.log(content);


const fs = require('node:fs');

const contents = fs.readFileSync('notes.txt','utf-8');

console.log(contents);