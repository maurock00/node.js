'use strict';

class Clock {
  /*constructor(){
    /*setInterval( () => { //Arrow function
        this.theTime();
    },1000);
  }*/

  theTime(){
    var date = new Date(),
        hrs = addZero( date.getHours() ) ,
        min = addZero( date.getMinutes() ),
        sec = addZero( date.getSeconds() ),
        ampm  = (hrs < 12) ? 'am' : 'pm',
        msg = '';

        hrs = defineAmPm(hrs);
        msg = `${hrs}:${min}:${sec}${ampm}`;

        function addZero(num){
          return (num < 10) ? ('0'+num): num;
        }

        function defineAmPm(hour){
          return (hour > 12) ? (hour-12): hour;
        }

    console.log(msg);
  }
}

module.exports = Clock;
