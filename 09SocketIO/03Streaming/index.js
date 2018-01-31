'use strict'

var express = require('express'),
    app = express(),
    httpServer = require('http').createServer(app),
    io = require('socket.io')(httpServer),
    port = process.env.PORT || 3000,
    publicDir = `${__dirname}/public`

httpServer.listen(port, () => {
    console.log('Server en 127.0.0.1:3000')
})

app
   .get('/', (req, res) => {
       res.sendFile(`${publicDir}/client.html`)     
   })
   .get('/streaming', (req, res) => {
       res.sendFile(`${publicDir}/server.html`) 
   })

io.on('connection', (socket) => {
    socket.on('streaming', (image) => {
        io.emit('play stream', image)
        //console.log(image)
    })
})