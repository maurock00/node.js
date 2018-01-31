'use strict';

var MovieModel = require('../models/movie-model.js'),
    MovieController = () => {};

//Conexion con la base de datos
MovieController.getAll = (req, res, next) => {
    MovieModel.getAll( (docs) => {
            let locals = {
                title : 'Lista de Peliculas',
                data : docs
            };

            res.render('index', locals);
    })
}

MovieController.getOne = (req, res, next) => {
    
    let movie_id = req.params.movie_id;
    console.log(movie_id);
    
    MovieModel.getOne(movie_id, ( docs ) => {

            let locals = {
              title : 'Editar registro',
              data : docs
            }
            res.render('edit-movie', locals)
            
    })
}

MovieController.save = (req, res, next) => {
    let movie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image : req.body.image
      }
      console.log(movie);

      MovieModel.save(movie, () => {res.redirect('/'); })
}

MovieController.delete = (req, res, next) => {
    let movie_id = req.params.movie_id;
    
    MovieModel.delete(movie_id, () => {
            res.redirect('/');
    })
}

//Solicitudes de vistas
MovieController.addForm = (req, res, next) => {
    res.render('add-movie', { title : 'Agregar Pelicula' } );
}

MovieController.error404 = (req, res, next) => {
    let error = new Error(),
    locals = {
      title : 'Error 404',
      description : 'Recurso no encontrado',
      error : error
    }

    error.status = 404;
    res.render('error',locals)

    next();
}

module.exports = MovieController;