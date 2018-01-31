 'use strict';

var conn = require('./movie-connection'),
     MovieModel = () => {};

MovieModel.getAll = (callBack) => {
    conn.query('SELECT * FROM movie', callBack);
}

MovieModel.getOne = (movie_id, callback) => {
    conn.query('SELECT * FROM movie WHERE movie_id = ?', movie_id , callback);
}

/*MovieModel.insert = (data, callBack) => {
    conn.query('INSERT INTO movie SET ?', data , callBack);
}

MovieModel.update = (data, callback) => {
    conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callback);
}*/

MovieModel.save = (data, callBack) => {

    conn.query('SELECT * FROM movie WHERE movie_id = ?', data.movie_id, (err, rows) => {
        console.log(rows.length)
        
        if(err){
            return err;
        } else {
            return (rows.length == 1) ? conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], callBack) 
                                      : conn.query('INSERT INTO movie SET ?', data , callBack) 
        }
    })
}

MovieModel.delete = (movie_id, callback) => {
    conn.query('DELETE FROM movie WHERE movie_id = ?', movie_id, callback);
}

module.exports = MovieModel;