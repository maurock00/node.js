'use strict';

var http = require('http').createServer(webServer),
    fs = require('fs'),
    index = fs.createReadStream('asets/index.html');

function webServer(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    //res.end('<h1>Hola Node.js</h1>');
    index.pipe(res);

}

http.listen(3000, '127.0.0.1');

console.log('Servidor corrient en http://127.0.0.1:3000/');
