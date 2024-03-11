const Trabajador = require('../models/trabajo.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const Trabaja = new Trabajador(
        request.body.nombre, request.body.area, request.body.correo, request.body.local
    );

    Trabaja.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('trabajos', {
        trabajadores: Trabajador.fetchAll(),
    });
};