'use strcit';

var Clock = require('./Clock'),
    cucu = new Clock();

setInterval(cucu.theTime,1000);
