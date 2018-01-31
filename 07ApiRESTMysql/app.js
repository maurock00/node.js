'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/movie-router.js'),
    faviconURL = `${__dirname}/public/img/favicon.ico`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express();

app
   .set('views', viewDir)
   .set('view engine', 'jade')
   .set('port', port)
   .use( favicon(faviconURL) )
   //Parsear a formato json
   .use( bodyParser.json() )
   //parse application/x-www-form-urlencoded aplica este tipo de parseo en la url
   .use( bodyParser.urlencoded({extended: false}) )
   .use ( restFul )
   .use( morgan('dev') )
   .use( publicDir )
   .use( routes );

module.exports = app;
