const EventEmitter = require("events");

const eventEmitter = new EventEmitter()


// Simple greet event
eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and Welcome to events in node.js`);

})

eventEmitter.on('greet', (username) => {
    console.log(`Hey ${username} and update events in node.js`);

})



eventEmitter.once('pushnotify', () => {
    console.log("This event will run only once")
});

// //Emit the event
eventEmitter.emit("greet","jayanta" );

// // eventEmitter.emit('greeting');
// eventEmitter.emit("greet","jay" );
// eventEmitter.emit("pushnotify");
// // eventEmitter.emit("pushnotify"); = this line will run only once
// eventEmitter.emit("greet","jkk" );



// // Test listener example
// const myListener = () => console.log("I am a test listener");

// // Register listener
// eventEmitter.on("test", myListener);


// // Emit multiple times
// eventEmitter.emit("test");
// eventEmitter.emit("test"); //So output repeats 3 times.means before removing it can emit as many times we want.
// eventEmitter.emit("test");


// // Remove the listener
// eventEmitter.removeListener("test", myListener);

// // Emit again after removing
// eventEmitter.emit("test"); //Now nothing happens because the listener was removed.

// console.log(eventEmitter.listeners("greet"));