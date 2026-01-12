// const http = require('node:http');

// const server = http.createServer(function(req, res) {
//     console.log('I got an incomming request');
    
//     res.writeHead(200);
//     res.end('Thanks for visiting my server')
// });

// server.listen(7000, function(){
//     console.log(`Http server is up and running on port 7000`);
// });


const http = require("http");

const server = http.createServer((req, res) => {
    // Print request headers in terminal
    console.log("Request Headers:", req.headers);

    // Send response to browser
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Check the terminal to see request headers");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
