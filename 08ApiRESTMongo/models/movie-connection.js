'use strict';

var mongoose = require('mongoose'),
    conf = require('./db-conf.json'), 

    Schema = mongoose.Schema,

    MovieSchema = new Schema({ //Debo setear crear el modelo de mi collecion 
        movie_id : "string",
        title : "string",
        release_year : "string",
        rating : "string",
        image : "string"
    }, 
        { collection : "movie" } //Se define el nombre de la coleccion
    ),

    MovieModel = mongoose.model("Movie", MovieSchema);

mongoose.connect(`mongodb:\/\/${conf.mongo.host}\/${conf.mongo.db}`)


module.exports = MovieModel;