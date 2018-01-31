'use strict';

var express = require('express'),
    app = express();


/*__dirname devueleve la ruta del path actual, es una variable
de node.js*/
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/assets/index.html`);
});
app.listen(3000);

console.log('Servidor con express en 127.0.0.1:3000');
