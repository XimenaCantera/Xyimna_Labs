const express = require('express');
const router = express.Router();

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


router.get('/', (request, response, next) => {
    let html = html_header;
    html += `
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
    `;
    html += html_footer;
    response.send(html);
});

module.exports = router;