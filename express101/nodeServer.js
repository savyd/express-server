// http is native to NodeJS. We just have to ask for it
const http = require('http');

// the http module has a createServer method:
// takes 1 arg: 
// 1. callback, and callback has 2 args: req, res
const server = http.createServer((req, res) => {
    // console.log(req);
    // res = our way of responding to the require
    // http message
    // 1. start-line - CHACK
    // 2. header
    // 3. body

    // writeHead takes 2 arg:
    // 1. status
    // 2. object for the mime-type
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
});

// createServer return an object whit a listen object
// listen takes 1 arg:
// 1. port to listen for HTTP trafic on

const port = 3000;
server.listen(port , console.log('connect to port http://localhost:' + port));