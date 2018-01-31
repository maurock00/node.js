'use strict';

var Clock = require('./clock-module-ES6.js');

var cucu = new Clock();

cucu.on('tictac', function(){
    cucu.theTime();
})
