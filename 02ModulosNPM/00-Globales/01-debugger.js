/*Hacer debug con el core de node
  node debug nombre script.js
*/

var http = require('http');

function webServer(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    debugger;
    res.end('<h1>Hola Node.js</h1>');

}

http.createServer(webServer)
    .listen(3000, '127.0.0.1');

console.log('Servidor corrient en http://127.0.0.1:3000/');
