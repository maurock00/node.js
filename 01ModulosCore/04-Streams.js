/* 
Streams
    'Chorros' de información que se transmiten en 'Pedazos' (chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asíncrono
    Es raro crear streams directamente
    pero muchos recursos nos oferecen este interfaz 
    Detrás de muchos mecanisos de Node.JS
        stdin/stdout
        request  
*/

'use strict';

var fs = require('fs'),
    readStream = fs.createReadStream('asets/nombres.txt'),
    writeStream = fs.createWriteStream('asets/nombres_copia.txt');

readStream.pipe(writeStream);

readStream.on('data', function(chunk){
    console.log(
        'He leído:', 
        chunk.length,
        'caracteres'
    )
})

readStream.on('end', function(){
    console.log('Terminé de leer el archivop')
})
