'use strict';

var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.end('<h1>Hola Mundo desde Express</h1>');
} );

app.listen(3000);
console.log('Iniciando express en 127.0.0.1:3000');
