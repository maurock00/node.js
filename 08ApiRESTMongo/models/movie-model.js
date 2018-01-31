 'use strict';

var conn = require('./movie-connection'),
     MovieModel = () => {};

MovieModel.getAll = (callback) => {
    conn
        .find()
        .exec( (err, data) => { //Ejecuta una callback si es que no existe errores
            if (err) throw err
            callback(data)
        }) 
}

MovieModel.getOne = (movie_id, callback) => {
    conn
        .findOne( { movie_id : movie_id} )
        .exec( (err, docs) => {
            if(err) throw err
            callback(docs)
        })
}

MovieModel.save = (data, callback) => {
    conn
        .count( { movie_id : data.movie_id } )
        .exec( (err, count) => {
            if (err) throw err
            console.log(`no. de DOCS: ${count}`)

            if(count == 0){
                conn
                    .create(data, (err) => {
                        if(err) throw(err)
                        callback()
                    })
            } 
            else if (count ==1){
                conn
                    .findOneAndUpdate( 
                        {movie_id : data.movie_id} , 
                        {
                          movie_id : data.movie_id,
                          title : data.title,
                          release_year : data.release_year,
                          rating : data.rating,
                          image : data.image
                        }, 
                        (err) => {
                            if(err) throw err
                            callback()
                        })
            }
        })
}

MovieModel.delete = (movie_id, callback) => {
    conn.remove( {movie_id : movie_id}, (err, docs) => {
        if(err) throw err
        callback()
    })
}

module.exports = MovieModel;