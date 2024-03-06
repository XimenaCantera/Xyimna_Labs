
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// TODO USANDO MIDDLEWARE
app.use((request, response, next) => {
    next();
});

const rutasTrabaja = require('./routes/trabaja.routes');

app.use('/', rutasTrabaja);


/*
const server = http.createServer( (request, response) => {    
    

    if (request.url == "/") {

       

    } else if(request.url == "/Agregar" && request.method == "GET"){
        

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