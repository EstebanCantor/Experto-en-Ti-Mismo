function openVideo() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'flex';
}

function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoModal.style.display = 'none';
    // Pausa el video al cerrar el modal
    videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar la Sección 1 móvil
    function initSectionMobile1() {
        // Selección de elementos de la Sección 1 móvil para la animación
        const darkContainer = document.querySelector('.dark-container');
        const countdownContainerMobile = document.querySelector('.countdown-container-mobile');
        const eventDetails = document.querySelector('.event-details');
        const buttons = document.querySelector('.buttons');
        
        // Agregar clase 'show' a los elementos de manera secuencial
        function fadeInElements() {
            if (darkContainer) {
                darkContainer.classList.add('show');
            }
            setTimeout(() => {
                if (countdownContainerMobile) {
                    countdownContainerMobile.classList.add('show');
                }
            }, 400); // Retardo para el contador

            setTimeout(() => {
                if (eventDetails) {
                    eventDetails.classList.add('show');
                }
                if (buttons) {
                    buttons.classList.add('show');
                }
            }, 800); // Retardo para los detalles y botones
        }

        // Comenzar la animación cuando todo esté listo
        fadeInElements();

        // Manejo del Contador de Cuenta Regresiva
        function startCountdownMobile() {
            const daysElementMobile = document.querySelector('#section-mobile-1 #days-value');
            const hoursElementMobile = document.querySelector('#section-mobile-1 #hours-value');
            const minutesElementMobile = document.querySelector('#section-mobile-1 #minutes-value');
            const secondsElementMobile = document.querySelector('#section-mobile-1 #seconds-value');
            const countdownContainerMobile = document.querySelector('#section-mobile-1 .countdown');

            const countDownDate = new Date("Mar 12, 2025 19:30:00").getTime();
            const countdownFunctionMobile = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                // Calculo de días, horas, minutos y segundos restantes
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Actualizar los elementos de la cuenta regresiva
                if (daysElementMobile) daysElementMobile.textContent = days;
                if (hoursElementMobile) hoursElementMobile.textContent = hours;
                if (minutesElementMobile) minutesElementMobile.textContent = minutes;
                if (secondsElementMobile) secondsElementMobile.textContent = seconds;

                // Si la cuenta regresiva ha terminado
                if (distance < 0) {
                    clearInterval(countdownFunctionMobile);
                    if (countdownContainerMobile) {
                        countdownContainerMobile.innerHTML = "¡La sesión ha comenzado!";
                    }
                }
            }, 1000);
        }

        // Iniciar la cuenta regresiva
        startCountdownMobile();
    }

    // Inicializar la Sección 1 móvil cuando el DOM esté listo
    initSectionMobile1();
});

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

// Desplazamiento automático del carrusel de logos en la sección mobile 3.2
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('#section-mobile-3-2 .carousel-items');
    let currentPosition = 0; // Posición inicial
    const speed = 1; // Velocidad de desplazamiento en píxeles por frame
    let isDragging = false; // Verificar si el usuario está interactuando manualmente
    let startX = 0; // Posición inicial al arrastrar
    let scrollLeft = 0; // Posición de desplazamiento inicial

    // Función de desplazamiento automático
    function startSlider() {
        if (!isDragging) { // Solo mover si no se está arrastrando manualmente
            currentPosition -= speed; // Mover hacia la izquierda
            track.style.transform = `translateX(${currentPosition}px)`;

            // Reiniciar el carrusel si ha alcanzado el final
            if (Math.abs(currentPosition) >= track.scrollWidth / 2) {
                currentPosition = 0; // Reiniciar la posición para hacer el desplazamiento continuo
            }
        }

        requestAnimationFrame(startSlider); // Continuar la animación
    }

    // Iniciar el desplazamiento automático
    startSlider();

    // --- Interacción del usuario ---
    track.addEventListener('mousedown', (e) => {
        isDragging = true; // El usuario comienza a arrastrar
        startX = e.pageX - track.offsetLeft; // Obtener la posición inicial
        scrollLeft = currentPosition; // Guardar la posición actual de desplazamiento
        track.style.cursor = 'grabbing'; // Cambiar el cursor al estilo de "arrastrar"
    });

    track.addEventListener('mouseleave', () => {
        isDragging = false; // Finalizar el arrastre
        track.style.cursor = 'grab'; // Restaurar el cursor
    });

    track.addEventListener('mouseup', () => {
        isDragging = false; // Finalizar el arrastre
        track.style.cursor = 'grab'; // Restaurar el cursor
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Solo mover si se está arrastrando
        e.preventDefault(); // Prevenir la selección de texto accidental
        const x = e.pageX - track.offsetLeft; // Obtener la posición actual del mouse
        const walk = (x - startX) * 2; // Determinar cuánto desplazar (ajustar velocidad)
        currentPosition = scrollLeft + walk; // Actualizar la posición del slider
        track.style.transform = `translateX(${currentPosition}px)`; // Mover el carrusel manualmente
    });

    // --- Soporte para pantallas táctiles (touch events) ---
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = currentPosition;
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        currentPosition = scrollLeft + walk;
        track.style.transform = `translateX(${currentPosition}px)`;
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('#testimonials-carousel-mobile .carousel-slide');
    const leftArrow = document.querySelector('#testimonials-carousel-mobile .carousel-arrow.left');
    const rightArrow = document.querySelector('#testimonials-carousel-mobile .carousel-arrow.right');
    const dots = document.querySelectorAll('#testimonials-carousel-mobile .carousel-dots .dot');
    let index = 0;

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function scrollToIndex() {
        const slideWidth = slide.children[0].offsetWidth;
        slide.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
        updateDots();
    }

    leftArrow.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = slide.children.length - 1; // Salto a la última
        }
        scrollToIndex();
    });

    rightArrow.addEventListener('click', () => {
        if (index < slide.children.length - 1) {
            index++;
        } else {
            index = 0; // Salto a la primera
        }
        scrollToIndex();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            scrollToIndex();
        });
    });

    // Inicializar puntos
    updateDots();
});

document.addEventListener("DOMContentLoaded", function () {
    // Prevenir que la página se desplace automáticamente a la sección
    window.history.scrollRestoration = 'manual';

    let animationTriggeredMobile = false;

    function animateProgressBarMobile() {
        const circle = document.querySelector('.progress-ring__circle-mobile');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const scoreElement = document.querySelector(".rating-score-number-mobile");

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        scoreElement.textContent = '0.0';

        let progress = 0;
        let currentScore = 0;
        const targetProgress = 95; // Target for progress bar
        const targetScore = 4.8; // Target score number
        const circleSpeed = 2; // Speed of the circle filling
        const numberSpeed = 0.02; // Speed of the number incrementing

        function updateProgressMobile() {
            // Update the circular progress bar
            if (progress <= targetProgress) {
                progress += circleSpeed;
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }

            // Update the score number
            if (currentScore < targetScore) {
                currentScore += numberSpeed;
                scoreElement.textContent = currentScore.toFixed(1);
            }

            // Keep updating if not finished
            if (progress <= targetProgress || currentScore < targetScore) {
                requestAnimationFrame(updateProgressMobile);
            }
        }

        updateProgressMobile();
    }

    window.addEventListener("scroll", function () {
        const sectionMobile = document.querySelector("#section-mobile-5");
        const sectionPositionMobile = sectionMobile.getBoundingClientRect().top;
        const screenPositionMobile = window.innerHeight / 1.3;

        // Trigger animation only once when section is in view
        if (sectionPositionMobile < screenPositionMobile && !animationTriggeredMobile) {
            animateProgressBarMobile();
            animationTriggeredMobile = true;
        }
    });
});

(function() {
    function initMobileCarousel() {
        const slideContainer = document.querySelector('#section-mobile-6-1 .mobile-carousel-slide');
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-mobile-6-1 .mobile-carousel-slide .slide-content');
        let slideIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const scrollPosition = slideIndex * slideWidth;

            slideContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        document.querySelector('#section-mobile-6-1 .nav-arrow.left').addEventListener('click', function() {
            slideIndex--;
            showSlide(slideIndex);
        });

        document.querySelector('#section-mobile-6-1 .nav-arrow.right').addEventListener('click', function() {
            slideIndex++;
            showSlide(slideIndex);
        });

        showSlide(slideIndex);
    }

    document.addEventListener('DOMContentLoaded', initMobileCarousel);
})();

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

document.addEventListener('DOMContentLoaded', function() {
    const reserveButton = document.querySelector('#buttons-slide-mobile .cta-button-left');
    const whatsappButton = document.querySelector('#buttons-slide-mobile .cta-button-right');

    reserveButton.addEventListener('click', function() {
        alert('Estás siendo redirigido para reservar tu cupo.');
    });

    whatsappButton.addEventListener('click', function() {
        alert('Estás siendo redirigido a WhatsApp para hablar con un asesor.');
    });
});
