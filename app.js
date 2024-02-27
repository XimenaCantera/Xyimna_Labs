//? fs es el módulo que contiene las funciones para manipular el sistema de archivos
//Se guarda la "libreria" de fs y se usa la constante de filesystem para ocupar esa librería
const filesystem = require('fs');

filesystem.writeFileSync('node.txt', 'Hola mundo desde node jajaja');

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
                            <img src="/CSTD/Imagenes/Logo_MasterShoes.png" class="h-8"/>
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Master Shoes</span>
                        </div>
                        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                            <a href="#" class="text-white bg-amber-400 hover:bg-orange-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600">Sign up</a>
                            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="relative flex bg-clip-border rounded-xl bg-[#E48F45]/65 text-black shadow-md w-full flex-row">
                <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-[#E48F45]/65 rounded-r-none bg-clip-border rounded-xl shrink-0">
                <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/312066103_987718562145825_1707666995852869215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEilK4Bk-cQjoLyooTjuNSYjFbDLPpOKUuMVsMs-k4pS_T0blvOazzmqzUUlD7EPylPcDwN4ZcoSIw8ZIfQMaOy&_nc_ohc=URx2ZwM3CBwAX-pC2VP&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBID3cT_TWZCnAJZFMaVsqt0KwzdGlJIhghHp_gfhrrjg&oe=65DCA8DB"
                    alt="card-image" class="object-cover w-96 m-20 rounded-lg" />
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
                </div>
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
                        <a href="#" class="hover:underline">Laboratorio 1</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Laboratorio 3</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Laboratorio 4</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Laboratorio 6</a>
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
                    <li class="mb-4">
                        <div class="flex botonContacto">
                            <button class="open-button rounded-lg text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 py-1.5 px-14 mb-2 mt-4 " id="open-button"> HECHO POR </button>
                            <div class="window-background" id="window-background">
                                <div class="window-container bg-slate-950" id="window-container">
                                    <button class="close-button" id="close-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon-x">
                                            <path 
                                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                            </path>
                                        </svg>
                                    </button>
                                    <h2 class="flex items-center justify-center text-4xl font-bold text-white mb-4">Datos de Contacto</h2>
                                    <div class="flex justify-center">
                                        <svg class="fill-white mr-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path></svg>
                                        <p class="font-semibold text-white flex justify-center">A01277310@tec.mx</p>
                                    </div>
                                    <div class="flex justify-center">
                                        <svg class="fill-white mr-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
                                        <p class="font-semibold text-white flex justify-center">771 128 5154</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
`;

const productos = [
{
    nombre: "Plantillas de gel",
    descripcion: "Contamos con plantillas y taloneras de gel de acuerdo a tu nececidad . Con gusto te atenderemos ",
    precio:50,
    imagen: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/62125148_906633896353316_989248740567023616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c2f564&_nc_ohc=ZKsG7PLQ_-EAX8_p6br&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBrKvmqg8UZp36AqTDsibiMT3ysXqJouMNcYZNH4XdFug&oe=6604DF5C",

},
{
    nombre: "Crema auto brillante Camaleón",
    descripcion: "Brillo al instante sin tener que cepillar",
    precio:20,
    imagen: "https://th.bing.com/th/id/OIP.Yrlj9GsHEpfxjYjyIf4KUQHaHa?rs=1&pid=ImgDetMain",

}];


const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if(request.url == "/"){

        response.setHeader('Content-Type', 'text/html');
        response.write(`  
                <hr class="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <div>
                    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black text-center pt-8"  >Nuestros Productos</h4>
                </div>

                <!--tODO  FILTRO-->
                <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button" class="text-white hover:text-white border border-bg-amber-900 bg-white hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-orange-400 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-bg-amber-700 dark:text-white dark:hover:text-white dark:hover:bg-amber-400 dark:bg-amber-700">Todo</button>
                    <button type="button" href="/Servicios" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Servicios</button>
                    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Productos</button>
                </div>


                <!--TODO NUEVO DISEÑO DE PRODUCTOS Y SERVICIOS-->
                <div class="columns-3 mx-20">
                    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-red-900">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/312066103_987718562145825_1707666995852869215_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEilK4Bk-cQjoLyooTjuNSYjFbDLPpOKUuMVsMs-k4pS_T0blvOazzmqzUUlD7EPylPcDwN4ZcoSIw8ZIfQMaOy&_nc_ohc=URx2ZwM3CBwAX-pC2VP&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBID3cT_TWZCnAJZFMaVsqt0KwzdGlJIhghHp_gfhrrjg&oe=65DCA8DB" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Reparaciones de productos de piel</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div class="mx-4 rounded-lg shadow dark:bg-red-900">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/242537897_1569292223420810_1656489833131288913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFVgI64jinF5ZchZcxWZhmOfWdE1i8gyRV9Z0TWLyDJFeqMi4BD1uhcua31p7TaJkv5oFywqjHDTU9mMwn4fej5&_nc_ohc=TgeDwWFWwMAAX9AyDbl&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBFf0JLCMH0kLsBwXJLLwaFWwRveVM9kveBeI6brV1dZw&oe=65DC44D5"/>
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mantenimiento en zapatos y accesorios</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg shadow dark:bg-red-900">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/242537897_1569292223420810_1656489833131288913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFVgI64jinF5ZchZcxWZhmOfWdE1i8gyRV9Z0TWLyDJFeqMi4BD1uhcua31p7TaJkv5oFywqjHDTU9mMwn4fej5&_nc_ohc=TgeDwWFWwMAAX9AyDbl&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBFf0JLCMH0kLsBwXJLLwaFWwRveVM9kveBeI6brV1dZw&oe=65DC44D5"/>
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mantenimiento en zapatos y accesorios</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white dark:hover:bg-amber-400 focus:outline-none dark:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Más información</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            
                <script>
                    const windowBackground = document.getElementById('window-background'),
                    windowContainer = document.getElementById('window-container'),
                    openButton = document.getElementById('open-button'),
                    closeButton = document.getElementById('close-button')
                
                openButton.addEventListener('click', () => windowBackground.style.display = 'flex')
        
                const closeWindow = () => {
                    windowContainer.classList.add('close')
        
                    setTimeout(() => {
                        windowContainer.classList.remove('close')
                        windowBackground.style.display = 'none'
                    }, 1000)
                }
        
                closeButton.addEventListener('click', () => closeWindow())
        
                window.addEventListener('click', e => e.target == windowBackground && closeWindow());
    
                </script>
            </body>

        </html>
        `);
        response.write(html_footer);
        response.end();

    } else{
        response.statusCode = 404;
        response.setHeader('content-Type', 'text/html');
        response.write(`<h2 class="title">Proximamente...</h2>`);
        response.write(html_footer);
        response.end();
    }
});

server.listen(1200);