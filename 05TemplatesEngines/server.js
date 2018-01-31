'use strict';

var app = require('./app.js'),
    server = app.listen(app.get('port'), () => {
      console.log(`Server en 127.0.0.1:${app.get('port')}`)
    });
