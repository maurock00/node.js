'use strict';

var http = require('http').createServer(webServer),
    fs = require('fs');

function webServer(req,res){
    function readFile(err,data){
      if(err)
        {throw err;}
      else{res.end(data);}
    }

    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('asets/index.html',readFile);

}

http.listen(3000, '127.0.0.1');

console.log('Servidor corrient en http://127.0.0.1:3000/');
