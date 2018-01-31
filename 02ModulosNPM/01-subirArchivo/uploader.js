'use strict';

var http = require('http').createServer(serverUpload),
    util = require('util'),
    formidable = require('formidable'),
    fse = require('fs-extra');

function serverUpload(req, res){

  if(req.method.toLowerCase() == 'get' && req.url == '/' ){

    let form = `<h3>Uploader en archivo de node-js</h3>
    <form action="upload" enctype="multipart/form-data" method="post">
      <div><input type="file" name="upload" required></div>
      <div><input type="submit" value="Subir Archivo"></div>
    </form>`;

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(form);
  }

  if(req.method.toLowerCase() == 'post' && req.url == '/upload' ){
    let form = new formidable.IncomingForm();
    console.log(req.url)
   form.parse(req, function(err, fields, files){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write( '<h1> Archivos Recibidos </h1>' + util.inspect( {files : files} ) ); // .write sirve para escribir mucha informacion
        res.end();
    })

    form.on('progress', function(bytesReceived, bytesExpected){
        let percentCompleted = ( bytesReceived / bytesExpected ) * 100;
        console.log(percentCompleted.toFixed(2));
    })

    form.on('error', function(err){
        console.log(err);
    })

    form.on('end', function(fields, files){
        let tempPath = this.openedFiles[0].path, //Ubicacion temportal del archivo que se sube
            fileName = this.openedFiles[0].name, //Nombre del archivo
            newLocation = './upload/' + fileName; //Ruta destino

        fse.copy(tempPath, newLocation, function(err){
          return (err) ? console.log(err) : console.log('El archivo se subio con exito :)');
        })
    })

    return ;

  }

}

http.listen(3000,'127.0.0.1');

console.log('Server: 127.0.0.1:3000');
