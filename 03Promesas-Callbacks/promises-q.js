'use strict';

var Q = require('q'),
    fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-q.txt';

function existFile(file){
  let defer = Q.defer();
  fs.access(file, fs.F_OK , function (err){
    return (err) ? defer.reject(new Error('El archivo no existe') ) : defer.resolve(true);
  })

  return defer.promise;
}

function readFile(file){
  let defer = Q.defer();

  console.log('El archivo existe');

  fs.readFile(file, function(err, data){
    return (err) ? defer.reject(new Error('El archivo se pudo leer') ) : defer.resolve(data);
  })

  return defer.promise;
}

function writeFile(newFile, data){
  let defer = Q.defer(); //

  console.log('El archivo se leyo correctamente');

  fs.writeFile(newFile, data, function(err){
    return (err) ? defer.reject(new Error('El archivo no se pudo copiar') ) : defer.resolve('El archivo se copio existosamente');
  })

  return defer.promise;

}

/*
Si existe
  Abrelo
  Copailo
  Avisa que se copio
  Maneja errores
*/


/*ES5
Q.fcall(function(){ return existFile(file) })
  .then(function(){ return readFile(file) })
  .then(function(dataPromise){ return writeFile(newFile, dataPromise) } )
  .then(function(dataPromise){ return console.log(dataPromise) } )
  .fail(function(err){ return console.log(err.message) } )
*/

//ES6 using arrow functions
Q.fcall( () => { return existFile(file) })
  .then( () => { return readFile(file) })
  .then( (dataPromise) => { return writeFile(newFile, dataPromise) } )
  .then( (dataPromise) => { return console.log(dataPromise) } )
  .fail( (err) => { return console.log(err.message) } )
