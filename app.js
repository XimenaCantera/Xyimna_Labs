//? fs es el módulo que contiene las funciones para manipular el sistema de archivos
//Se guarda la "libreria" de fs y se usa la constante de filesystem para ocupar esa librería


const html_header = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <title>Master Shoes web</title>
        </head>
        <body class="max-w-m m-auto">
            <!--TODO  NAVBAR-->
            <div>
                <nav class="bg-white dark:bg-red-900">
                    <div class="flex justify-between mx-auto p-4">
                        <div class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img class="h-8" alt="iconoMasterShoes" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/241087326_1559743931042306_7376873698654842302_n.png?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH1QMmnnlcXnuT1iw3MKxug8ljJnbZuJ2HyWMmdtm4nYcLqVcTz1nzivUpvj-UTK2WsKpKwI0oLdyB9DSGSm1eI&_nc_ohc=7cogh4kEYvcAX9GAS8P&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDLfOHlnIfsttkdscIGYLEe8K9sCWg0g8noMJPbwrSXug&oe=65E273D2"/>
                            <a href="/"  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Master Shoes</a>
                        </div>
                        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                            <a href="#" class="text-white bg-amber-400 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600">Sign up</a>
                            
                        </div>
                    </div>
                </nav>
            </div>   
`;

const html_footer = `
    <!--TODO INFORMACIÓN EN FOOTER-->
            <footer class="bg-white dark:bg-red-900">
                <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Preguntas</h2>
                        <ul class="dark:text-white font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline"></a>
                            </li>
                            <li class="mb-4">
                                <a href="/PregLab1" class="hover:underline">Laboratorio 1</a>
                            </li>
                            <li class="mb-4">
                                <a href="/PregLab3" class="hover:underline">Laboratorio 3</a>
                            </li>
                            <li class="mb-4">
                                <a href="/PregLab4" class="hover:underline">Laboratorio 4</a>
                            </li>
                            <li class="mb-4">
                                <a href="/PregLab6" class="hover:underline">Laboratorio 6</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                        <ul class="dark:text-white font-medium">
                            <li class="mb-4">
                                <a class="hover:underline">mastershoespr@gmail.com </a>
                            </li>
                            <li class="mb-4">
                                <a  class="hover:underline">Teléfono: 55+ 1234-5678</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.instagram.com/mastershoespr?igsh=a2VraWVkbzF5Nmdl" class="hover:underline">Instagram</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://www.facebook.com/mastershoespr" class="hover:underline">Facebook</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ubicación y horario</h2>
                        <ul class="dark:text-white font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Miguel Hidalgo No. 809 , Local C, Pachuca 42000</a>
                            </li>
                            <li class="mb-4">
                                <a class="hover:underline">Lunes a viernes de 8:30am a 6:30pm y sábados de 9:30am a 2:00pm.</a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </footer>
        </body>
    </html>
    
`;

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

const express = require('express');
const app = express();

// TODO USANDO MIDDLEWARE
app.use((request, response, next) => {
    next();
});

app.get('/', (request, response, next) => {
    let html = html_header;
    html += `
        <div class="relative flex bg-clip-border rounded-xl bg-[#E48F45]/65 text-black shadow-md w-full flex-row">
            <div class="items-center justify-center relative w-2/5 m-0 overflow-hidden text-gray-700 bg-[#E48F45]/65 rounded-r-none bg-clip-border rounded-xl shrink-0">
                <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/84355621_1107165882966782_2005786651065843712_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeH0y3__G0BbFFNLgVHOLmFQtckrNC-k0261ySs0L6TTbt6XZDwwDRWjSLELfDqYjbNJ1dXnMbIzqVrvrI0LKlU6&_nc_ohc=XmY1dYtC_uYAX-rMgut&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD2thqmakiEwuCNQttitvL6uFziq3uCLFoX_53OpmJJZQ&oe=6605D4EC" alt="card-image" class="object-cover w-96 my-10 ml-24 rounded-lg"/>
            </div>
            <div class="p-6 m-20">
                <h1 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black">
                    ¡Bienvenidos!
                </h1>
                <h6 class="block mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-black">
                    Hola somos Master Shoes, nos complace anunciar que el día de hoy damos un gran paso para nosotros, desde hace un tiempo hemos planeado este gran cambio, que viene acompañado de crecimiento, un gran esfuerzo, grandes mejoras y excelencia en nuestro servivio.
                </h6>
                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black">
                    Nosotros innovamos nuestros servicios para ofrecerte una mejor calidad en la fabricación, reparación y cuidado de tu calzado.
                </p>
                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black">
                    En nuestro taller te podemos pfrecer la mejor solución, contamos con años de experiencia, gusto por la elegancia, exactitud y esmero.
                </p>
                <a href="/Agregar" class="text-white bg-amber-400 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600">Agrega trabajadores</a>
            </div>

        </div> 
            <hr class="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /><br>
            <!--tODO  FILTRO-->
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <a type="button" class="text-white hover:text-white border border-bg-amber-900 bg-white hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-orange-400 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-bg-amber-700 dark:text-white dark:hover:text-white dark:hover:bg-amber-400 dark:bg-amber-700">Todo</a>
                <a type="button" href="#" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Servicios</a>
                <a type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Productos</a>
            </div>

            <!--TODO NUEVO DISEÑO DE PRODUCTOS Y SERVICIOS-->
            <div class="grid grid-cols-3 gap-5">
                <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-red-900 ml-11">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/242537897_1569292223420810_1656489833131288913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFVgI64jinF5ZchZcxWZhmOfWdE1i8gyRV9Z0TWLyDJFeqMi4BD1uhcua31p7TaJkv5oFywqjHDTU9mMwn4fej5&_nc_ohc=SUmWBapsUgoAX-3jAxz&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBpinsEnkkd-wwwmAT6C4KTn5_P85rH97uwhhX069MRfw&oe=65E42DD5" alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Reparaciones de productos de piel</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/Presupuesto" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Realizar presupuesto</a>
                        </div>
                    </div>
                </div>
                <div class="mx-4 rounded-lg shadow dark:bg-red-900">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/312066103_987718562145825_1707666995852869215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEilK4Bk-cQjoLyooTjuNSYjFbDLPpOKUuMVsMs-k4pS_T0blvOazzmqzUUlD7EPylPcDwN4ZcoSIw8ZIfQMaOy&_nc_ohc=SSG_GfZ5ZtcAX-l1l3L&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCMs95fkm1W5-cIGJ-PmYqBdAyH4a9xJEX5dfhJrX-nrw&oe=65E2979B"/>
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mantenimiento en zapatos y accesorios</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="#" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Realizar presupuesto</a>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg shadow dark:bg-red-900 mr-11">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/312066103_987718562145825_1707666995852869215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEilK4Bk-cQjoLyooTjuNSYjFbDLPpOKUuMVsMs-k4pS_T0blvOazzmqzUUlD7EPylPcDwN4ZcoSIw8ZIfQMaOy&_nc_ohc=SSG_GfZ5ZtcAX-l1l3L&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCMs95fkm1W5-cIGJ-PmYqBdAyH4a9xJEX5dfhJrX-nrw&oe=65E2979B"/>
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mantenimiento en zapatos y accesorios</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="#" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Realizar presupuesto</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <h1 class="flex items-center justify-center my-16 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black">Equipo de trabajo</h1>
    `;

    html += `
        <div class="grid grid-cols-4 gap-4">
    `;

    for (let trabajador of trabajadores) {
        html += `                
            <div class="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-[#E48F45]">
                <div class="flex flex-col items-center pb-10">
                   <h5 class="mb-1 text-xl font-medium dark:text-white">${trabajador.Nombre}</h5>
                    <span class="text-sm dark:text-black">${trabajador.Area}</span>
                    <span class="text-sm dark:text-black">${trabajador.Correo}</span>
                    <span class="text-sm dark:text-black">${trabajador.Local}</span>
                </div>
            </div>
        `;
    }

    html += `
        </div>
    `;

    //response.write(html_trabajadores);
    html += html_footer;
    response.send(html);
});

app.use((request, response, next) => {
    response.status(404);
    let html = html_header;
    html += `<h2 class="title">Proximamente...</h2>`;
    html += html_footer;
    response.send(html);
});

/*
const server = http.createServer( (request, response) => {    
    

    if (request.url == "/") {

       

    } else if(request.url == "/Agregar" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`

        <div class="mx-60 my-20">
            <form action="/Agregar" method="POST" class="max-w-sm mx-auto"> 
            <div class="mb-5">
                <label for="Nombre" class="block mb-2 text-sm font-medium dark:text-black">Nombre del trabajador</label>
                <input id="Nombre" name="Nombre"  class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
                <label for="Area" class="block mb-2 text-sm font-medium dark:text-black">Área encargada</label>
                <input id="Area" name="Area" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
                <label for="Correo" class="block mb-2 text-sm font-medium dark:text-black">Correo</label>
                <input type="text" id="Correo" name="Correo" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:shadow-sm-light" required />
            </div>
            <div class="mb-5">
                <label for="Local" class="block mb-2 text-sm font-medium dark:text-black">Local</label>
                <input type="text" id="Local" name="Local" class="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:shadow-sm-light" required />
            </div>
            <button type="submit" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirmar</button> 
            </form>
        </div>
        <hr class="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /><br>
        `);

        response.write(html_footer);
        response.end();

    } else if(request.url == "/Agregar" && request.method == "POST"){
        
        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const todosDatos = Buffer.concat(datos).toString();
            const Nombre = todosDatos.split('&')[0].split('=')[1];
            const Area = todosDatos.split('&')[1].split('=')[1];
            const Correo = todosDatos.split('&')[2].split('=')[1];
            const Local = todosDatos.split('&')[3].split('=')[1];
            trabajadores.push({
                Nombre: Nombre,
                Area: Area,
                Correo: Correo,
                Local: Local,
            });
            response.writeHead(302, { 'Location': '/' });
            return response.end();
        });

    } else if(request.url == "/PregLab1" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);

        response.write(`
        <div class="mx-60 my-20">
            <h3>PREGUNTAS LAB 1</h3>
            <table class="border-separate">
            <thead>
                    <tr>
                        <th class="bg-yellow-600">PREGUNTA</th>
                        <th class="bg-yellow-600">RESPUESTA</th>
                    </tr>
            </thead>
                <tbody class="bg-lime-800/50">
                    <tr>
                        <td class="azul">¿Cuál es la diferencia entre Internet y la World Wide Web?</td>
                        <td  id="respuesta">El internet es una red global de computadoras interconectadas en todo el mundo, mientras que la Web es una colección de páginas dentro de una red. La Web necesita del internet para acceder a la información. https://www.bbc.com/mundo/noticias-47538812</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Cuáles son las partes de un URL?</td>
                        <td id="respuesta">
                            Protocolo. Define cómo se enviarán los datos, puede ser HTTP o HTTPS.<br>
                            Subdominio. Es lo que se encuentra después del protocolo, ejemplo: “www”.<br>
                            Dominio. Es el nombre del dominio y la TLD, ejemplo: “.com”.<br>
                            Ruta. Es la ubicación del recurso de un servidor.<br>
                            Parámetro. Es información extra en una URL.<br>
                            Etiqueta. Ancla a una parte especifica de la página.
                        </td>
                    </tr>
                    <tr>
                        <td class="azul">¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</td>
                        <td id="respuesta">
                            
                            GET. Solicita una representación de un recurso.<br>
                            HEAD. Pide el encabezado.<br>
                            POST. Envía una datos a un recurso, causando cambios en el servidor.<br>
                            PUT. Reemplaza representaciones actuales del recurso.<br>
                            DELETE. Borra un recurso específico.<br>
                            PATCH. Actualizar datos de un recurso.                       
                        </td>
                    </tr>
                    <tr>
                        <td class="azul">¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</td>
                        <td id="respuesta">Se utiliza un método POST, ya que al momento de enviar los datos de usuario y contraseña al servidor se realizan cambios como el inicio de sesión o mandar un mensaje sobre algún error.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</td>
                        <td id="respuesta">Se utiliza el método Get, ya que se solicita una representación de la URL a la que corresponde.</td>
                    </tr>
                    <tr>
                        <td class="azul">Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</td>
                        <td id="respuesta">Significa que la solicitud fue exitosa y no ocurrió ningún error.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</td>
                        <td id="respuesta">Si debe corregirlo ya que indica que el recurso no fue encontrado. A no ser que sea un error de una página eliminada o que el usuario colocó mal la URL.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</td>
                        <td id="respuesta">Si, porque el error es interno en el servidor.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)?</td>
                        <td id="respuesta">Significa que es obsoleto y que no es recomendado usarlo.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</td>
                        <td id="respuesta">HTML5 es mejor, ya que admite vídeo y audio, así como nuevas etiquetas como “header” y “nav”.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Qué componentes de estructura y estilo tiene una tabla?</td>
                            <td id="respuesta">    
                                Estructura:Etiquetas como table,tr,th y td.<br>
                                Estilo: CSS para bordes, colores, etc.<br>
                            </td>
                    </tr>
                    <tr>
                        <td class="azul">¿Cuáles son los principales controles de una forma HTML5?</td>
                        <td id="respuesta">Input, textarea, select y button.</td>
                    </tr>
                    <tr>
                        <td class="azul">¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</td>
                        <td id="respuesta"><img src="/CSTD/Imagenes/html5_Edge.jpg" width="300"> </td>
                    </tr>
                    <tr>
                        <td class="azul">El ciclo de vida y desarrollo de los sistemas de información:</td>
                        <td id="respuesta">
                            Ciclo de vida: Planificación, análisis, diseño, implementación, mantenimiento.<br>
                            Ciclo de desarrollo: Requisitos, diseño, construcción, pruebas, despliegue.
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
        `);
        response.write(html_footer);
        response.end();
    } else if(request.url == "/PregLab3" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);

        response.write(`
        <div class="mx-60 my-20">
            <h2>PREGUNTAS LAB. 3</h2>
            <h3 class="text-xl font-bold">Como ingeniero de software ¿cuál es tu recomendación sobre el uso de ”!important”</h3>
            <p>Creo que no es lo ideal ocuparlo, pero si un grupo de etiquetas tienen el mismo estilo pero quieres que alguna en específico tenga algo diferente sin afectar las otras, se puede ocupar “!important” para priorizar ese cambio individual y dejar en segundo las grupales.</p>
            <h3 class="text-xl font-bold">Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h3>
            <p>El tamaño de la imagen es importante para que se vea bien, también si la página se abre en un dispositivo con diferentes medidas la imagen puede sufrir cambios.</p>
            <h3 class="text-xl font-bold">Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h3>
            <p >Creo que es depende de para que se ocupen, yo creo que debería de ser algo así:
            <br>% para diseños flexibles y responsivos.
            <br>px para tamaños precisos en la pantalla.
            <p>pt siento que es el que menos se debe de usar, recomendaría cambiarlo a px.</p>
            <h3 class="text-xl font-bold">¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h3>
            <p>Es una buena práctica el minimizar el CSS para eliminar espacios o líneas innecesarias, evitar guardar caché en ese archivo y  para que el sitio web sea más fluido.</p>
        </div>
        `);
        response.write(html_footer);
        response.end();

    } else if(request.url == "/PregLab4" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
        <div class="mx-60 my-20>            
            <h3>PREGUNTAS LAB 4</h3>            
            <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-lime-900">
                <li>
                    ¿Qué diferencias y semejanzas hay entre Java y JavaScript?
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li><strong >Diferencias.</strong> Java es compilado y se ocupa más para orientado a objetos, mientras que JavaScript es interpretado y se usa del lado del cliente en páginas web. Java es tipado estáticamente, mientras que JavaScript es tipado dinámicamente.</li>
                    <li><strong>Semejanzas.</strong> Tienen algunas similitudes en la sintaxis y el usar objetos. Ambos se utilizan en el desarrollo web, pero Java se utiliza en el backend, mientras que JavaScript se usa en el frontend.</li>
                </ul>
                </li>
                <li>
                    ¿Qué métodos tiene el objeto Date? 
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li><strong>getMonth().</strong> Devuelve el número del mes, pero enero es 0 y diciembre es 11.</li>
                    <li><strong>getDate().</strong> Regresa el día del mes, en un rango de 1 a 31.</li>
                    <li><strong>getDay().</strong> Nos da el día de la semana, siendo domingo un 0 y sábado 6.</li>
                    <li><strong>getHours().</strong> Devuelve la hora actual en un formato de 24 horas.</li>
                    <li><strong>getMinutes().</strong> Retorna los minutos actuales.</li>
                </ul>
                </li>
                <li>
                ¿Qué métodos tienen los arreglos? 
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li><strong>push().</strong> Agrega el elemento al final del arreglo.</li>
                    <li><strong>unshift().</strong> Agrega un elemento al inicio del arreglo.</li>
                    <li><strong>pop().</strong> Elimina el último elemento del arreglo.</li>
                    <li><strong>shift().</strong> Elimina el primer elemento del arreglo.</li>
                    <li><strong>slice().</strong> Copia todo o una sección de un arreglo.</li>
                </ul>
                </li>
                <li>
                    ¿Cómo se declara una variable con alcance local dentro de una función?
                    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                        <li>Se utiliza let o const. “let variableLocal = “Soy una variable local”;”</li>
                    </ul>
                </li>   
                <li>
                    ¿Qué implicaciones tiene utilizar variables globales dentro de funciones?
                    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                        <li>Es muy recomendable usar variables locales dentro de las funciones que sea posible, esto ayuda al mantenimiento y la legibilidad del código.</li>
                    </ul>
                </li>   
            </ol>
        </div>
        `);
        response.write(html_footer);
        response.end();

    } else if(request.url == "/PregLab6" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
        <div class="mx-60 my-20>            
            <h3>PREGUNTAS LAB 6</h3>            
            <ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-lime-900">
                <li>
                    ¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li><strong >Validación del cliente.</strong> Evita errores y proporciona retroalimentación inmediata al usario.</li>
                    <li><strong>Mejora la usabilidad.</strong> Ayuda a los usuarios a corregir problemas rápidamente.</li>
                    <li><strong>Menos carga en el servidor.</strong> Reduce solicitudes al servidor.</li>
                </ul>
                </li>
                <li>
                    ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li><strong>Desactivar JavaSript.</strong> Es poco común, pero es posible.</li>
                    <li><strong>Manipulación del código fuente.</strong> Requiere acceso al código.</li>
                    <li><strong>Envío directo al servidor.</strong> Sin pasar por validación en el cliente.</li>
                </ul>
                </li>
                <li>
                Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica? 
                <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>A pesar de las vulnerabilidades, mejora la experiencia y cumple con los estándares. Siempre complementando con validaciones en el servidor.</li>
                </ul>
                </li>
            </ol>
        </div>
        `);
        response.write(html_footer);
        response.end();
    } else{
       
    }
});
*/
app.listen(1200);