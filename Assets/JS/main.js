document.addEventListener("DOMContentLoaded", function () {
    function checkScreenSize() {
        if (window.innerWidth >= 768) {
            // Cargar comportamiento de escritorio o realizar ajustes para desktop
            console.log("Cargar scripts y comportamiento de escritorio");
        } else {
            // Cargar comportamiento móvil o realizar ajustes para mobile
            console.log("Cargar scripts y comportamiento de móvil");
        }
    }

    // Llamar a la función para verificar el tamaño de la pantalla inicialmente
    checkScreenSize();

    // Escuchar los cambios de tamaño de la ventana
    window.addEventListener("resize", checkScreenSize);
});
