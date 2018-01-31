'use stric';

var express = require('express'),
    router = express.Router();

function jade(req, res, next){
  let locals = {
    title : 'Jade',
    link: 'https://www.youtube.com/feed/history',
    description: `Jade es un template engine, es un preprocesador
                  de lenguaje html`
  }
  res.render('index', locals)
}

function ejs(req, res, next){
  let locals = {
    title : 'EJS',
    link : 'http://www.embeddedjs.com/',
    name : 'EJS',
    description : `EJS limpia el HTML del JS con plantillas del lado
    cliente. Combina datos y una plantilla para producir HTML.
    Codigo entre <% %> se ejecuta.
    Codigo entre <% %> lo añade al HTML que se resuelve`,
    seasons : [
      ['Primavera', ['Abril','Mayo','Junio']],
      ['Verano', ['Julio','Agosto','Septiembre']],
      ['Otonio', ['Octubre','Noviembre','Diciembre']],
      ['Invierno', ['Enero','Febrero','Marzo']]
    ]
  }
  res.render('index', locals)
}

function error404(req,res,next){
  let error = new Error(),
      locals = {
        title : 'Error 404',
        description : 'Recurso no encontrado',
        error : error
      }

      error.status = 404;
      res.render('error',locals)

      next();
}

router.get('/', (req, res) => {
          res.end('<h1>Terminamos la configuracion de nuestra primera APP en express</h1>');
        })
      .get('/jade', jade)
      .get('/ejs', ejs)
      .use(error404) //Debe estar definido siempre al final, por ser un middleware que maneja errores

module.exports = router;
