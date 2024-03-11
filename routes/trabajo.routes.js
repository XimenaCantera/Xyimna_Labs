const express = require('express');
const router = express.Router();


const trabajadores = [
{
    Nombre: "Ximena Cantera",
    Area: "Reparación",
    Correo: "xyimna@gmail.com",
    Local: "av.centro cd.48023",
},
{
    Nombre: "Yael Cortés",
    Area: "Mantenimiento",
    Correo: "yao@gmail.com",
    Local: "av. boulevard pricnipal cd.48083",
}];

router.get('/Agregar', (request, response, next) => {
    response.render('agregar');
});

router.post('/Agregar', (request, response, next) => {
    trabajadores.push({
        Nombre: request.body.Nombre,
        Area: request.body.Area,
        Correo: request.body.Correo,
        Local: request.body.Local,
    });
    response.redirect('/');
});


router.get('/', (request, response, next) => {
    response.render('trabajos', {
        trabajadores: trabajadores,
      });
});

module.exports = router;