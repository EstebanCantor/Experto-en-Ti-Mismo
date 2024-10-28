document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('#section-mobile-3 .carousel-grid');
    const container = document.querySelector('#section-mobile-3 .carousel-container');
    const nextButtons = document.querySelectorAll('#section-mobile-3 .next-slide'); // Botones dentro de cada diapositiva
    const prevButtons = document.querySelectorAll('#section-mobile-3 .prev-slide'); // Botones dentro de cada diapositiva
    const items = document.querySelectorAll('#section-mobile-3 .carousel-item');
    const totalItems = items.length;
    let index = 0; // Índice inicial

    // Función para actualizar la posición del carrusel al hacer clic en los botones flotantes
    function moveCarouselToIndex() {
        const itemWidth = items[0].offsetWidth;
        container.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
    }

    // Función para avanzar al siguiente slide
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (index < totalItems - 1) {
                index++;
                moveCarouselToIndex();
            }
        });
    });

    // Función para retroceder al slide anterior
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (index > 0) {
                index--;
                moveCarouselToIndex();
            }
        });
    });

    // Actualizar el índice al hacer scroll manual
    container.addEventListener('scroll', function() {
        const itemWidth = items[0].offsetWidth;
        const scrollLeft = container.scrollLeft;

        // Actualizar el índice basado en el desplazamiento manual
        index = Math.round(scrollLeft / itemWidth);
    });
});
