
const server = require('http').createServer();

server.on('request', function (request, response) {

    response.writeHead(200, { 'Content-Type': 'flag-of-ethiopia-scaled.jpg' });

    let img = require('fs').readFileSync('./tiles.jpg');
    
    response.end(img, 'binary');
});

server.listen(8080);
