'use strict';

var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    //res.end('<h1>Hola Mundo desde Express</h1>');
    res.send('<h1>Hola Mundo desde Express</h1>');
} );

//Redireccionamiento 301
app.get('/bextlan', (req, res) => {
    res.redirect(301, 'http://bextlan.com');
} );

app.get('/json', (req, res) => {
    res.json({
      name : "Mauricio",
      age: 24,
      facebook: "mauricio_facebook"
    })
} );


//primero se deben generar las vistas para poder utilizar .render
app.get('/render', (req, res) => {
  res.render(`${__dirname}assets/index.html`);
});

app.listen(3000);
console.log('Iniciando express en 127.0.0.1:3000');

//Mensajes de errir de node por defecto
//301 Redireccion permanente
//302 Redireccion momentanea
