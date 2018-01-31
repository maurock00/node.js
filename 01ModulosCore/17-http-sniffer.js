'use strict';

var http = require('http'),
    options = {
      host: 'lacuerda.net',
      port: 80,
      path: '/'
    },
    htmlCode = '';

function httpClient(res){
  console.log(`El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`);
  res.on('data',function(data){
      htmlCode += data;
      console.log(data, data.toString()
    );
  });
}

function httpError(err){
  console.log(`El sitio ${options.host} no ha respondido. Codigo de estado: ${err.code} Mensaje: ${err.message}`);
}

function webServer(req,res){
   res.writeHead(200, {'Content-Type':'text/html'});
   res.end(htmlCode);
}

http.get(options,httpClient)
    .on('error',httpError);

http.createServer(webServer)
    .listen(3000);

console.log('Servidor corrient en http://127.0.0.1:3000/');
