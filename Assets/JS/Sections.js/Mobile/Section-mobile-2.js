(function() {
    function initMobileCarousel() {
        const slideContainer = document.querySelector('#section-mobile-2 .carousel-slider');
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-mobile-2 .carousel-slide');
        let currentSlideIndex = 0;

        // Función para mostrar la diapositiva actual con desplazamiento suave
        function showSlideMobile(n) {
            if (n >= slides.length) {
                currentSlideIndex = 0;
            } else if (n < 0) {
                currentSlideIndex = slides.length - 1;
            } else {
                currentSlideIndex = n;
            }

            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            slideContainer.scrollTo({
                left: currentSlideIndex * slideWidth,
                behavior: 'smooth' // Desplazamiento suave
            });
        }

        // Función para mover la diapositiva en la dirección indicada
        function moveSlideMobile(n) {
            showSlideMobile(currentSlideIndex + n);
        }

        // Ajuste inicial para que comience en la primera diapositiva
        showSlideMobile(0);

        const prevBtn = document.querySelector('#section-mobile-2 .nav-arrow.left');
        const nextBtn = document.querySelector('#section-mobile-2 .nav-arrow.right');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => moveSlideMobile(-1));
            nextBtn.addEventListener('click', () => moveSlideMobile(1));
        }
    }

    document.addEventListener('DOMContentLoaded', initMobileCarousel);
})();
