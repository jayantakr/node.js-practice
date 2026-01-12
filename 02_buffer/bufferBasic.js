const {Buffer} = require("buffer");

// const buf = Buffer.alloc(4);
// console.log(buf);

// const buf = Buffer.from("Hello friends");
// console.log(buf);
// console.log(buf.toString());


// const bufTwo = Buffer.allocUnsafe(100);
// console.log(bufTwo);

// const buf = Buffer.alloc(10);
// buf.write('Hello')
// console.log(buf.toString());

// const buf = Buffer.from('buffer is used in Node.Js');
// console.log(buf.toString());
// console.log(buf.toString('utf-8',0, 6));



/*Modify a byte manually*/
// const buf = Buffer.from('Buffer');
// console.log(buf);
// buf[0] = 0x4B
// console.log(buf);
// console.log(buf.toString());


// const buf1 = Buffer.from("Buffer code");
// const buf2 = Buffer.from(" is interesting");
// const merged = Buffer.concat([buf1, buf2]);
// console.log(merged.toString());
// console.log(merged.length);


/*Access single byte (index) - Buffers store ASCII numbers*/
// const buf = Buffer.from("A");
// console.log(buf[0]);



/*Checking for buffer - Returns true if it’s a buffer*/
// const buf = Buffer.from("test");
// console.log(Buffer.isBuffer(buf));


/*Slicing of a buffer */
// const buf = Buffer.from("Node.JS");
// const sliced = buf.slice(0, 5);
// console.log(sliced.toString());


/*Copy of buffer */
const buf1 = Buffer.from("Hello");
const buf2 = Buffer.alloc(5);

buf1.copy(buf2);
console.log(buf2.toString());
