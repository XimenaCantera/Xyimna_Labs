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
    html +=`
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
    `;
    html += html_footer;
    response.send(html);
});

module.exports = router;