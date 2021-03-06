/*
Path
Contiene utilidades para manejar y transfomar las rutas de los directorios y
archivos a formato de cadena. El sistema de archivos no es consultado
para comprobar si los caminos son válidos
*/

'use strict';

var http = require('http').createServer(webServer),
    path = require('path'),
    url = require('url'),
    urls = [
      {
        id: 1,
        route: '',
        output: '<h2>Home</h2>'
      },
      {
        id: 2,
        route: 'acerca',
        output: '<h2>Acerca</h2>'
      },
      {
        id: 3,
        route: 'contacto',
        output: '<h2>Contacto</h2>'
      }
    ];

//Simulacion de urls a través de la web

function webServer(req,res){

  var message = '<h1> Hola Node.js</h1>',
      pathURL = path.basename(req.url),
      id = url.parse(req.url, true).query.id;

      console.log(`Path: ${pathURL}, Id: ${id}`);

      urls.forEach(function (pos) {
          if(pos.route == pathURL || pos.id == id){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(message + pos.output);
          }
        })

        if(!res.finished){
          res.writeHead(404, {'Content-Type':'text/html'});
          res.end('<h1>Error 404: Not Found</h1>');
        }
        /*res.writeHead(200, {'Content-Type':'text/html'});
        res.end(message);*/
}

http.listen(3000,'127.0.0.1');

console.log('Servidor corrient en http://127.0.0.1:3000/');
