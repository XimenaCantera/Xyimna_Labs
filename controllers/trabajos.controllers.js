const Trabajador = require('../models/trabajo.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        usuNombre: request.session.usuNombre || '',
    })
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const Trabajas = new Trabajador(
        request.body.Nombre, request.body.Area, request.body.Correo, request.body.Local
    );

    Trabajas.save();

    //todo - Crear Cookie con propiedad HttpOnly  :)
    response.setHeader('Set-Cookie', 'lastTrabajador=' + Trabajas.Nombre + '; HttpOnly');
    response.setHeader('Set-Cookie', 'lastLocal=' + Trabajas.Local + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    //? Revisar que sea el dato esperdo - console.log(request.cookies);
    //? console.log(request.cookies.lastTrabajador);

    response.render('trabajos', {
        trabajadores: Trabajador.fetchAll(),
        lastTrabajador: request.cookies.lastTrabajador || '',
        lastLocal: request.cookies.lastLocal || '',

        usuNombre: request.session.usuNombre || '',
    });
};