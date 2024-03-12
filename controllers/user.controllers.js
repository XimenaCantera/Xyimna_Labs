exports.get_login = (request, response, next) => {
    response.render('login', {
        usuNombre: request.session.usuNombre || '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.usuNombre = request.body.usuNombre;
    response.redirect('/');
};

//Todo - Cerrar sesión
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login'); 
    });
};