(function() {
    function initCarousel() {
        const slideContainer = document.querySelector('#section-2 .custom-carousel-slide'); // El contenedor que se desplaza
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-2 .custom-carousel-slide .slide-content');
        const dots = document.querySelectorAll('#section-2 .custom-dot');
        let customSlideIndex = 0;
        let isScrolling = false;

        // Función para mostrar el slide actual basado en el índice
        function showSlide(index) {
            if (index >= slides.length) customSlideIndex = 0;
            if (index < 0) customSlideIndex = slides.length - 1;

            // Calcular la nueva posición del contenedor completo
            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const scrollPosition = customSlideIndex * slideWidth;

            // Desplazar el contenedor de las diapositivas
            slideContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            // Actualizar los puntos de navegación (dots)
            dots.forEach(dot => dot.classList.remove("active"));
            dots[customSlideIndex].classList.add("active");
        }

        // Moverse al siguiente o anterior slide
        function moveSlide(n) {
            customSlideIndex += n;
            if (customSlideIndex >= slides.length) {
                customSlideIndex = 0;
            } else if (customSlideIndex < 0) {
                customSlideIndex = slides.length - 1;
            }
            showSlide(customSlideIndex);
        }

        // Función para sincronizar el scroll manual con los puntos
        function syncScroll() {
            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const newIndex = Math.round(slideContainer.scrollLeft / slideWidth);
            if (customSlideIndex !== newIndex) {
                customSlideIndex = newIndex;
                // Actualizar los puntos de navegación (dots)
                dots.forEach(dot => dot.classList.remove("active"));
                dots[customSlideIndex].classList.add("active");
            }
        }

        // Inicializar el carrusel en el primer slide
        showSlide(customSlideIndex);

        // Event listeners para los botones de navegación
        document.querySelector('#section-2 .nav-arrow.left').addEventListener('click', () => moveSlide(-1));
        document.querySelector('#section-2 .nav-arrow.right').addEventListener('click', () => moveSlide(1));

        // Event listeners para los puntos de navegación
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                customSlideIndex = index;
                showSlide(index);
            });
        });

        // Habilitar el desplazamiento manual con scroll
        slideContainer.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    syncScroll();
                    isScrolling = false;
                });
            }
            isScrolling = true;
        });
    }

    document.addEventListener('DOMContentLoaded', initCarousel);
})();
