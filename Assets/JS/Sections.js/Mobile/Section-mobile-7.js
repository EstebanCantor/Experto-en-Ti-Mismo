document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#section-mobile-7 .carousel-slide');
    const images = document.querySelectorAll('#section-mobile-7 .image-wrapper');
    const texts = document.querySelectorAll('#section-mobile-7 .carousel-text');
    const dots = document.querySelectorAll('#section-mobile-7 .dot');

    function updateSlide(slideIndex) {
        slides.forEach((slide, index) => {
            const imageWrapper = images[index];
            const text = texts[index];

            if (index === slideIndex) {
                // Mostrar la diapositiva actual
                slide.classList.add('active');
                setTimeout(() => {
                    // Mostrar imagen y texto con transiciones suaves
                    imageWrapper.style.transform = 'translateX(0)';
                    imageWrapper.style.opacity = '1';
                    text.style.transform = 'translateX(0)';
                    text.style.opacity = '1';
                }, 100); // Retardo para sincronización de la animación
            } else {
                // Ocultar las diapositivas inactivas
                slide.classList.remove('active');
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
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    }

    // Botones de navegación
    document.getElementById('section-mobile-7-nextSlide').addEventListener('click', nextSlide);
    document.getElementById('section-mobile-7-prevSlide').addEventListener('click', prevSlide);

    // Mostrar la primera diapositiva al cargar la página
    updateSlide(currentSlide);
});

