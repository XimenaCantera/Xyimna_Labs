//? fs es el módulo que contiene las funciones para manipular el sistema de archivos
//Se guarda la "libreria" de fs y se usa la constante de filesystem para ocupar esa librería
const filesystem = require('fs');

filesystem.writeFileSync('node.txt', 'Hola desde node');

//todo CREAR SERVIDOR
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    //console.setHeader('Content-Type', 'text/html');

});
 
server.listen(3200);