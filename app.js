const express = require('express');
const app = express();

//Todo -  Configurar views
app.set('view engine', 'ejs');
app.set('views', 'views');

//Todo - Configurar express-session
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Todo - USANDO MIDDLEWARE
app.use((request, response, next) => {
    console.log('Middleware ejecutado');
    next(); 
});

//Todo - Cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Todo - Protección de CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

//Todo - Importar rutas
const rutaUser = require('./routes/user.routes');
app.use('/user', rutaUser);

const rutasPreguntas = require('./routes/PregLab1.routes');
app.use('/PregLab1', rutasPreguntas);

const rutasPreguntas3 = require('./routes/PregLab3.routes');
app.use('/PregLab3', rutasPreguntas3);

const rutasPreguntas4 = require('./routes/PregLab4.routes');
app.use('/PregLab4', rutasPreguntas4);

const rutasPreguntas6 = require('./routes/PregLab6.routes');
app.use('/PregLab6', rutasPreguntas6);

const rutasTrabajo = require('./routes/trabajo.routes');
app.use('/trabajadores', rutasTrabajo);

//Todo - html 404
app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(1200);