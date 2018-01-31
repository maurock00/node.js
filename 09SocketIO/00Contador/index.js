//Ciente 
/* 
    Socket.IO
    1) Eventos connection y disconnect
    2) Puedes crear tus propios eventos
    3) emit(): cuando se comunica un mensaje a todos los clientes conectados
    4) broadcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina
    5) Los 4 puntos anteriores funcionan en el servidor y en el cliente. 
*/

'use strict'

var httpServer = require('http').createServer(server), 
    fs = require('fs'),
    io = require('socket.io')(httpServer),
    connections = 0;

function server(req, res){
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type' : 'text/html'});
            return res.end(`<h1> Error interno del servidor </h1>`);
        } 
        else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            return res.end(data, 'utf-8');
        }
            
    });
}

httpServer.listen(3000);
console.log(`Servidor en 127.0.0.1:3000`);

io.on('connection', (socket) => {
    socket.emit('hello', { message : 'Hola Mundo desde Socket.IO' } )
    
    socket.on('otro evento que me invente', (data) => {
        console.log(data)
    })

    connections++

    console.log(`Conexiones activas: ${connections}`)

    socket.emit('connect users', {numbers : connections})
    socket.broadcast.emit('connect users', {numbers : connections})

    socket.on('disconnect', () => {
        connections--
        console.log(`Conexiones activas: ${connections}`)
        socket.broadcast.emit('connect users', {numbers : connections})     
    })
})