'use strict';

var fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-ES6.txt',
    promise = new Promise(function(resolve, reject){
      fs.access(file, fs.F_OK , function (err){
        return (err) ? reject(new Error('El archivo no existe') ) : resolve(true);
      })
    });


/*ES5
promise
    .then( function(resolve, reject) { } )
    .then( function(resolve, reject) { } )
    .then( function(resolve, reject) { } )
    .catch( function(err) { } );
*/

//ES6 arrow functions

//EN RESOLVE SE ALMACENA LO QUE DEVUELVE LA PROMESA ANTERIOR

/*
promise
    .then( (resolved, rejected) => {
        console.log('El archivo existe');

      return new Promise(function(resolve, reject){
          fs.readFile(file, function(err, data){
            return (err) ? reject(new Error('El archivo no se pudo leer') ) : resolve(data);
        })
      })
    })
    .then( (resolved, rejected) => {
      console.log('El archivo se leyo correctamente');

      return new Promise(function(resolve, reject){
        fs.writeFile(newFile, resolved, function(err){
          return (err) ? reject(new Error('El archivo no se pudo copiar') ) : resolve('El archivo se copio existosamente');
        })
      })
    })
    .then( (resolved, rejected) => {
        console.log(resolved);
     })
    .catch( (err) => {
        console.log(err.message);
     } );
*/

//CON MAS ARROWS FUNCTIONS
/*promise
    .then( (resolved, rejected) => {
        console.log('El archivo existe');

      return new Promise( (resolve, reject) => {
          fs.readFile(file, function(err, data){
            return (err) ? reject(new Error('El archivo no se pudo leer') ) : resolve(data);
        })
      })
    })
    .then( (resolved, rejected) => {
      console.log('El archivo se leyo correctamente');

      return new Promise((resolve, reject) => {
        fs.writeFile(newFile, resolved, function(err){
          return (err) ? reject(new Error('El archivo no se pudo copiar') ) : resolve('El archivo se copio existosamente');
        })
      })
    })
    .then( (resolved, rejected) => {
        console.log(resolved);
     })
    .catch( (err) => {
        console.log(err.message);
     } );
*/

//MAAAAAAAAAAAS ARROW function

promise
    .then( (resolved, rejected) => {
        console.log('El archivo existe');

      return new Promise( (resolve, reject) => {
          fs.readFile(file, (err, data) => {
            return (err) ? reject(new Error('El archivo no se pudo leer') ) : resolve(data);
        })
      })
    })
    .then( (resolved, rejected) => {
      console.log('El archivo se leyo correctamente');

      return new Promise((resolve, reject) => {
        fs.writeFile(newFile, resolved, (err) => {
          return (err) ? reject(new Error('El archivo no se pudo copiar') ) : resolve('El archivo se copio existosamente');
        })
      })
    })
    .then( (resolved, rejected) => {
        console.log(resolved);
     })
    .catch( (err) => {
        console.log(err.message);
     } );
