//MANEJO DE SESIONES
/*
  cookie-parser Manejador de cookies
  cookie-session Middleware de sesiones basado en cookies

  Middleware: es una funcion con acceso al objeto de la peticion y
  al objeto de la respuesta, y al siguiente Middleware en la aplicacion.

  Pueden ejecutar cualquier codigo
  Ejecutarse en stack

  algo que se va a ejecutar en el tiempo medio de la peticion y respuesta
*/

'use strict';

var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

app.use( cookieParser() )
   .use( cookieSession(
     {
       secret: "secreto"
     })
   );

app.get('/', (req, res) => {

    //Se esta usando una version corta de una sentencia if else
    /*
      if(req.session.visitas){
      let n = req.session.visitas++;
      }
      else{
        req.session.visitas = 0
      }
    */
    req.session.visitas || (req.session.visitas = 0)
    let n = req.session.visitas++;

    res.end(`<h1>
                Hola desde express, me has visitado ${n} veces
            </h1>`);
} );

app.listen(3000);
console.log('Iniciando express en 127.0.0.1:3000');
