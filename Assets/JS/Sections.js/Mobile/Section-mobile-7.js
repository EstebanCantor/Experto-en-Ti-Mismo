document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    let isAnimating = false; // Variable para controlar si hay una animación en curso
    const slides = document.querySelectorAll('#section-mobile-7 .carousel-slide');
    const dots = document.querySelectorAll('#section-mobile-7 .dot');
    const carousel = document.getElementById('section-mobile-7-carousel');

    let startX = 0;
    let endX = 0;

    function updateSlide(slideIndex) {
        if (isAnimating) return; // Evitar cambios mientras hay una animación
        isAnimating = true;
        console.log(`Cambiando a la diapositiva ${slideIndex}`);

        slides.forEach((slide, index) => {
            const imageWrapper = slide.querySelector('.image-wrapper');
            const text = slide.querySelector('.carousel-text');

            if (index === slideIndex) {
                // Mostrar la diapositiva actual
                slide.classList.add('active');

                // Reiniciar transformaciones para que la animación inicie correctamente
                imageWrapper.style.transform = 'translateX(20px)';
                imageWrapper.style.opacity = '0';
                text.style.transform = 'translateX(30px)';
                text.style.opacity = '0';

                // Forzar reflujo para asegurar que las transformaciones se aplican
                void slide.offsetWidth;

                // Aplicar animaciones
                imageWrapper.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
                text.style.transition = 'transform 0.7s ease, opacity 0.7s ease';

                setTimeout(() => {
                    imageWrapper.style.transform = 'translateX(0)';
                    imageWrapper.style.opacity = '1';
                    text.style.transform = 'translateX(0)';
                    text.style.opacity = '1';
                }, 50);
            } else {
                // Ocultar las diapositivas inactivas
                slide.classList.remove('active');

                // Resetear transformaciones sin animación
                imageWrapper.style.transition = 'none';
                text.style.transition = 'none';
                imageWrapper.style.transform = 'translateX(20px)';
                imageWrapper.style.opacity = '0';
                text.style.transform = 'translateX(30px)';
                text.style.opacity = '0';
            }
        });

        // Actualizar puntos indicadores
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });

        // Esperar a que la animación termine antes de permitir otro cambio
        setTimeout(() => {
            isAnimating = false;
            console.log(`Animación completada para la diapositiva ${slideIndex}`);
        }, 750); // Duración de la animación + un pequeño buffer
    }

    function nextSlide() {
        if (isAnimating) return;
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }

    function prevSlide() {
        if (isAnimating) return;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    }

    // Botones de navegación
    document.getElementById('section-mobile-7-nextSlide').addEventListener('click', nextSlide);
    document.getElementById('section-mobile-7-prevSlide').addEventListener('click', prevSlide);

    // Agregar funcionalidad de deslizar
    carousel.addEventListener('touchstart', handleTouchStart, false);
    carousel.addEventListener('touchmove', handleTouchMove, false);
    carousel.addEventListener('touchend', handleTouchEnd, false);

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        endX = startX;
    }

    function handleTouchMove(event) {
        endX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        let deltaX = endX - startX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Deslizó hacia la derecha
                prevSlide();
            } else {
                // Deslizó hacia la izquierda
                nextSlide();
            }
        }
        // Resetear valores
        startX = 0;
        endX = 0;
    }

    // Mostrar la primera diapositiva al cargar la página
    updateSlide(currentSlide);
});
