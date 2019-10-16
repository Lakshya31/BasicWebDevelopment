const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Another Visitor!!!");
})

server.listen(3000);
