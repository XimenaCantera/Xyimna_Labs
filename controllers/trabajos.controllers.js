const Trabajador = require('../models/trabajo.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        usuNombre: request.session.usuNombre || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const Trabajas = new Trabajador(
        request.body.Nombre, request.body.Correo, request.body.Local
    );

    //todo - Crear Cookie con propiedad HttpOnly  :)
    Trabajas.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'lastTrabajador=' + Trabajas.Nombre + '; HttpOnly');
            response.setHeader('Set-Cookie', 'lastLocal=' + Trabajas.Local + '; HttpOnly');
            response.redirect('/trabajadores');
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_root = (request, response, next) => {
    Trabajador.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('trabajos', {
                trabajadores: rows,
                lastTrabajador: request.cookies.lastTrabajador || '',
                lastLocal: request.cookies.lastLocal || '',
                usuNombre: request.session.usuNombre || '',
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
