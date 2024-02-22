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

        window.addEventListener('click', e => e.target == windowBackground && closeWindow())



        // Función para abrir el modal y mostrar la imagen
    function openModal(imgSrc) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("modalImg");
        modal.style.display = "block"; // Mostrar el modal
        modalImg.src = imgSrc; // Establecer la imagen del modal
    }

    // Función para cerrar el modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none"; // Ocultar el modal
    }