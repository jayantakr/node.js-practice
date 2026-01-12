const http = require('node:http');

const server = http.createServer(function(req, res) { 
    console.log('I got an incomming request at [${Date.now()}]');
    // console.log(req.header);
    // console.log(req.method);
    console.log(req.url);


   

    switch(req.url) {
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`);
        case '/contact-us':
            res.writeHead(200);
            return res.end(`Contact me at work.jayantakumar@gmail.com`);
        case '/about':
            res.writeHead(200);
            return res.end(`I am a software engineer`);

        default:
            res.writeHead(404);
            res.end('You are lost ')

    }
    //...
    // res.writeHead(200);
    // res.end('OK!');
});

server.listen(4000, () => console.log('Server is running on port 4000'));
