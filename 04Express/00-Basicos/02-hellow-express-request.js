'use strict';

var express = require('express'),
    app = express();

app.get('/', (req, res) => {
    res.end('<h1>Hola Mundo desde Express :)</h1>');
} );

//http://127.0.0.1:3000/user/19-MADMAX-31
app.get('/user/:id-:name-:age', (req, res) => {
    res.end(`<h1>
              ${req.params.name}, bienvenido a Express :) tu id es: <b>${req.params.id}</b> y tienes ${req.params.age} </h1>`);
} );


//http://127.0.0.1:3000/search?s=perros
app.get('/search', (req, res) => {
    res.end(`
            <h1>
            Bienvenido a Express, los resultados de tu busqueda son:
            <mark>${req.query.s}</mark>
            </h1>
          `);
} );

app.listen(3000);
console.log('Iniciando express en 127.0.0.1:3000');
