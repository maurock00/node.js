'use strict';

var Clock = (function(){
      var EventEmitter = require('events').EventEmitter,
          inherits = require('util').inherits;

      var Clock = function(){
        var self = this;

          setInterval(function(){
              //console.log('Hola')
              self.emit('tictac');
          },1000);
      };

      inherits(Clock,EventEmitter);

      Clock.prototype.theTime = function(){
          var date = new Date(),
              hrs = addZero( date.getHours() ) ,
              min = addZero( date.getMinutes() ),
              sec = addZero( date.getSeconds() ),
              ampm  = (hrs < 12) ? 'am' : 'pm',
              msg = '';

              hrs = defineAmPm(hrs);
              msg = hrs + ':' + min + ':' + sec + ampm;

              function addZero(num){
                return (num < 10) ? ('0'+num): num;
              }

              function defineAmPm(hour){
                return (hour > 12) ? (hour-12): hour;
              }

          console.log(msg);
        }
    return Clock;
})()

module.exports = Clock;
