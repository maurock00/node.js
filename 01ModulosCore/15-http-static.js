/*
Path
Contiene utilidades para manejar y transfomar las rutas de los directorios y
archivos a formato de cadena. El sistema de archivos no es consultado
para comprobar si los caminos son válidos
*/

'use strict';

var http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    urls = [
      {
        id: 1,
        route: '',
        output: 'asets/index.html'
      },
      {
        id: 2,
        route: 'acerca',
        output: 'asets/acerca.html'
      },
      {
        id: 3,
        route: 'contacto',
        output: 'asets/contacto.html'
      }
    ];

//Simulacion de urls a través de la web

function webServer(req,res){

  var pathURL = path.basename(req.url),
      id = url.parse(req.url, true).query.id;

      console.log(`Path: ${pathURL}, Id: ${id}`);

      urls.forEach(function (pos) {
          if(pos.route == pathURL || pos.id == id){
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.readFile(pos.output, function(err, data){
              if(err){
                throw err}
              else{
                res.end(data)};
            });

          }
        })

        if(!res.finished){
          res.writeHead(404, {'Content-Type':'text/html'});

          fs.readFile('asets/404.html', function(err, data){
            if(err){
              throw err}
            else{
              res.end(data)};
          });
        }
}

http.listen(3000,'127.0.0.1');

console.log('Servidor corrient en http://127.0.0.1:3000/');
