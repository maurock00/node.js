'use strict'

var  express = require('express'),
     app = express(),
     httpServer = require('http').createServer(app),
     io = require('socket.io')(httpServer),
     port = process.env.PORT || 3000,
     publicDir = express.static(`${__dirname}/public`)

app
    .use(publicDir)
    .get('/', (req, res) => {
        res.sendFile(`${publicDir}/index.html`)
    })

io.on('connection', (socket) => {
    socket.broadcast.emit('new user', { message : 'Ha entrado un usuario al chat'})

    socket.on('new message', (message) => {
        io.emit('user says', message)
    })

    socket.on('disconnect', () => {
        console.log('Ha salido un usuario del chat')
        socket.broadcast.emit('bye bye user', { message : 'Se ha desconectado un usuario'})
    })
})

httpServer.listen(port, '127.0.0.1', () => {
    console.log(`Servidor en 127.0.0.1:${port}`)
})