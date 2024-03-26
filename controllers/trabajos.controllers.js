const Trabajador = require('../models/trabajo.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        usuNombre: request.session.usuNombre || '',
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const nuevoTrabajador = new Trabajador(
        request.body.Nombre, 
        request.body.Area, 
        request.body.Correo, 
        request.body.Local
    );

    nuevoTrabajador.save()
        .then(result => {
            response.setHeader('Set-Cookie', 'lastTrabajador=' + nuevoTrabajador.Nombre + '; HttpOnly');
            response.setHeader('Set-Cookie', 'lastLocal=' + nuevoTrabajador.Local + '; HttpOnly');
            response.redirect('/trabajadores');
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};

exports.get_root = (request, response, next) => {
    Trabajador.fetchAll()
        .then(([trabajadores, metadata]) => { // Modificar aquí para acceder a los trabajadores
            console.log(trabajadores); // Verificar los datos de los trabajadores
            response.render('trabajos', {
                trabajadores: trabajadores,
                lastTrabajador: request.cookies.lastTrabajador || '',
                lastLocal: request.cookies.lastLocal || '',
                usuNombre: request.session.usuNombre || '',
            });
        })
        .catch(error => {
            console.log(error);
            response.status(500).send('Error interno del servidor');
        });
};


