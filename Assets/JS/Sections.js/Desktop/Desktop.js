document.addEventListener('DOMContentLoaded', function () {
    // Encapsular el código dentro de una función para la Sección 1
    function initSection1() {
        // Selección de elementos de la Sección 1
        const daysElement = document.querySelector('#section-1 #days-value');
        const hoursElement = document.querySelector('#section-1 #hours-value');
        const minutesElement = document.querySelector('#section-1 #minutes-value');
        const secondsElement = document.querySelector('#section-1 #seconds-value');
        const countdownContainer = document.querySelector('#section-1 .countdown');

        // Manejo del Contador de Cuenta Regresiva
        function startCountdown() {
            const countDownDate = new Date("Nov 30, 2024 19:00:00").getTime();
            const countdownFunction = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                // Calculo de días, horas, minutos y segundos restantes
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Actualizar los elementos de la cuenta regresiva
                if (daysElement) daysElement.textContent = days;
                if (hoursElement) hoursElement.textContent = hours;
                if (minutesElement) minutesElement.textContent = minutes;
                if (secondsElement) secondsElement.textContent = seconds;

                // Si la cuenta regresiva ha terminado
                if (distance < 0) {
                    clearInterval(countdownFunction);
                    if (countdownContainer) {
                        countdownContainer.innerHTML = "¡La sesión ha comenzado!";
                    }
                }
            }, 1000);
        }

        startCountdown();
    }

    // Inicializar la Sección 1
    initSection1();
});

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
