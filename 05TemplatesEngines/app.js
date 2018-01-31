'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    //jade = require('jade'), no es necesario declarar los templates engines si la variable no es usada
    //ejs = require('ejs'),
    routes = require('./routes/index.js'),
    faviconURL = `${__dirname}/public/img/favicon.ico`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express();

app
   //configurando app
   .set('views', viewDir)
   .set('view engine', 'jade')
   //.set('view engine', 'ejs')
   .set('port', port)
   //ejecutando middlwares
   .use( favicon(faviconURL) )
   .use(morgan('dev'))
   .use( publicDir)
   //ejecuto el middleware enrutador
   .use('/', routes);

module.exports = app;
