// Detecta el evento de scroll
document.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        // Añade la clase 'scrolled' cuando se hace scroll
        document.body.classList.add('scrolled');
    } else {
        // Elimina la clase 'scrolled' cuando se vuelve al tope
        document.body.classList.remove('scrolled');
    }
});

// También puedes disparar la animación al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Muestra el logo inmediatamente después de cargar la página
    document.body.classList.add('scrolled');
});
