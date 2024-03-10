
const express = require('express');
const app = express();

const path = require(404);
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// TODO USANDO MIDDLEWARE
app.use((request, response, next) => {
    console.log('Middleware ejecutado');
    next(); 
});

//Todo Importar rutas
const rutasPreguntas = require('./routes/PregLab1.routes');
app.use('/PregLab1', rutasPreguntas);

const rutasPreguntas3 = require('./routes/PregLab3.routes');
app.use('/PregLab3', rutasPreguntas3);

const rutasPreguntas4 = require('./routes/PregLab4.routes');
app.use('/PregLab4', rutasPreguntas4);

const rutasPreguntas6 = require('./routes/PregLab6.routes');
app.use('/PregLab6', rutasPreguntas6);

const rutasTrabajo = require('./routes/trabajo.routes');
app.use('/', rutasTrabajo);

//TODO Html
app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(1200);