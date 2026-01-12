# What is set(): 
A Set in JavaScript is like a special container that stores values without duplicates.

- Think of it like a bag where:

You can put items inside

But if you try to put the same item again, the bag says:
“No, it already exists!”

The items stay in the same order you added them.

-> Main Features of Set():
- Stores Values
- No duplicates allowed
- Keep insertion order
- Very fast to check if something exists




# Buffer in Node.Js
- A Buffer is a special container in Node.js used to store raw binary data.
- Node.js does not support direct binary manipulation (like C/C++), so Buffers help handle raw data efficiently.
- Used mostly when dealing with file streams, network data, and binary protocols.

## Why Do We Need Buffers?

- JavaScript strings are UTF-16 encoded, making direct binary data handling inefficient.
- Buffers store binary data outside V8’s heap.
- Useful when working with:
a) File System (fs module)
b) Networking (TCP, UDP, WebSockets)
c) Streams (handling chunks of data)
