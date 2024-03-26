// user.controllers.js

const User = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        usuNombre: request.session.usuNombre || '',
        registro: false,
        csrfToken: request.csrfToken(),
        error: error,
    });
};

exports.post_login = (request, response, next) => {
    request.session.usuNombre = request.body.usuNombre;
    
    User.fetchOne(request.body.usuNombre)
        .then(([usuarios, fieldData]) => {
            if(usuarios.length === 1) {
                const usuario = usuarios[0];
                bcrypt.compare(request.body.usuContra2, usuario.usuContra2)
                    .then((doMatch) => {
                        if(doMatch) {
                            request.session.usuNombre = usuario.usuNombre;
                            request.session.isLoggedIn = true;
                            response.redirect('/trabajadores');
                        } else {
                            request.session.error = "Ha ingresado un usuario o contraseña de forma incorrecta.";
                            response.redirect('/user/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                request.session.error = "Ha ingresado un usuario o contraseña de forma incorrecta.";
                response.redirect('/user/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

//Todo - Cerrar sesión
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login'); 
    });
};

exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
    });
};

exports.post_signup = (request, response, next) => {  
    const newUser = new User(
        request.body.usuNombre, request.body.usuEmail, request.body.usuContra2
    );
    newUser.save()
        .then(() => {
            response.redirect('/user/login');
        })
        .catch((error) => {
            console.log(error);
            // Manejar el error apropiadamente, por ejemplo, mostrando un mensaje al usuario
            response.redirect('/user/login');
        });
};
