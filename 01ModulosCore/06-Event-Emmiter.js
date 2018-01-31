'use strict';

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter();

pub.on('myEvent',function(message){
    console.log(message);
})

pub.once('myEvent', function(message){
    console.log('Se emite la primera vez');
})

pub.emit('myEvent','Soy un emisor de eventos');
pub.emit('myEvent','Vovliendo a emitir');
//pub.removeAllListeners('myEvent');
pub.emit('myEvent','Vovliendo a emitir por tercera vez');