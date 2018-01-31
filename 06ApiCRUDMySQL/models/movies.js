//Conexion a base de datos
'use strict';

var mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOptions = {
      host : 'localhost',
      user : 'root',
      port : 3306,
      password : '',
      database : 'movies'
    },
    Movies = myConnection(mysql, dbOptions, 'request');

module.exports = Movies;
