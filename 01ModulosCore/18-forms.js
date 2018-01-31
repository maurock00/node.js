'use strict';

var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('asets/form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = '';

function webServer(req,res){
  if(req.method == 'GET'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(form);
  }

  if(req.method == 'POST'){

    req.on('data',function(data){
      dataString += data;
    })

    req.on('end',function(){
      var dataObject = querystring.parse(dataString),
          dataObjectInspected = util.inspect(dataObject),
          templateString = `
          DataString: ${dataString}
          DataObject: ${dataObjectInspected}`;
      console.log(templateString);
      res.end(templateString);
    })
  }
}

http.listen(3000,'127.0.0.1');

console.log('Servidor en 172.0.0.1:3000');


//+ 'Los datos enviados como objeto son:' + dataObject;
