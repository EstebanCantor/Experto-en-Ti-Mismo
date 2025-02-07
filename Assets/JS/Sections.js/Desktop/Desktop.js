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
            const countDownDate = new Date("Mar 12, 2025 19:30:00").getTime();
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

document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('#testimonials-carousel-section .carousel-slide');
    const leftArrow = document.querySelector('#testimonials-carousel-section .carousel-arrow.left');
    const rightArrow = document.querySelector('#testimonials-carousel-section .carousel-arrow.right');
    const dots = document.querySelectorAll('#testimonials-carousel-section .carousel-dots .dot');
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
        // Si estamos en la primera diapositiva, saltamos a la última
        index = slide.children.length - 1;
      }
      scrollToIndex();
    });
  
    rightArrow.addEventListener('click', () => {
      if (index < slide.children.length - 1) {
        index++;
      } else {
        // Si estamos en la última diapositiva, saltamos a la primera
        index = 0;
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
    let animationTriggered = false;

    function animateProgressBar() {
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const scoreElement = document.querySelector(".rating-score-number");

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        scoreElement.textContent = '0.0';

        let progress = 0;
        let currentScore = 0;
        const targetProgress = 95;
        const targetScore = 4.8;
        const circleSpeed = 2;
        const numberSpeed = 0.02;

        function updateProgress() {
            if (progress <= targetProgress) {
                progress += circleSpeed;
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }

            if (currentScore < targetScore) {
                currentScore += numberSpeed;
                scoreElement.textContent = currentScore.toFixed(1);
            }

            if (progress <= targetProgress || currentScore < targetScore) {
                requestAnimationFrame(updateProgress);
            }
        }

        updateProgress();
    }

    window.addEventListener("scroll", function () {
        const section = document.querySelector(".rating-section");
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && !animationTriggered) {
            animateProgressBar();
            animationTriggered = true;
        }
    });
});

(function() {
    function initCarousel() {
        const slideContainer = document.querySelector('#section-6 .custom-carousel-slide');
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-6 .custom-carousel-slide .slide-content');
        const dots = document.querySelectorAll('#section-6 .custom-dot');
        let customSlideIndex = 0;
        let isScrolling = false;

        function showSlide(index) {
            if (index >= slides.length) customSlideIndex = 0;
            if (index < 0) customSlideIndex = slides.length - 1;

            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const scrollPosition = customSlideIndex * slideWidth;

            slideContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            dots.forEach(dot => dot.classList.remove("active"));
            dots[customSlideIndex].classList.add("active");
        }

        function moveSlide(n) {
            customSlideIndex += n;
            if (customSlideIndex >= slides.length) {
                customSlideIndex = 0;
            } else if (customSlideIndex < 0) {
                customSlideIndex = slides.length - 1;
            }
            showSlide(customSlideIndex);
        }

        showSlide(customSlideIndex);

        document.querySelector('#section-6 .nav-arrow.left').addEventListener('click', () => moveSlide(-1));
        document.querySelector('#section-6 .nav-arrow.right').addEventListener('click', () => moveSlide(1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                customSlideIndex = index;
                showSlide(index);
            });
        });

        slideContainer.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
                    const newIndex = Math.round(slideContainer.scrollLeft / slideWidth);
                    if (customSlideIndex !== newIndex) {
                        customSlideIndex = newIndex;
                        dots.forEach(dot => dot.classList.remove("active"));
                        dots[customSlideIndex].classList.add("active");
                    }
                    isScrolling = false;
                });
            }
            isScrolling = true;
        });
    }

    document.addEventListener('DOMContentLoaded', initCarousel);
})();


let currentImageIndexInteractive = 0;
const totalImages = 2; // Número total de imágenes

function updateImageInteractive() {
    const imageContainer = document.querySelector('#section-interactive .image-container');
    const offset = -currentImageIndexInteractive * 100;
    imageContainer.style.transform = `translateX(${offset}%)`;
}

function showTextInteractive(index) {
    const textsInteractive = document.querySelectorAll('#section-interactive .option-text p');
    const optionsInteractive = document.querySelectorAll('#section-interactive .option');

    textsInteractive.forEach((text, i) => {
        text.style.display = i === index ? 'block' : 'none';
    });

    optionsInteractive.forEach((option, i) => {
        option.classList.toggle('active', i === index);
    });

    currentImageIndexInteractive = index;
    updateImageInteractive();
}

function prevImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive - 1 + totalImages) % totalImages;
    updateImageInteractive();
    showTextInteractive(currentImageIndexInteractive);
}

function nextImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive + 1) % totalImages;
    updateImageInteractive();
    showTextInteractive(currentImageIndexInteractive);
}

document.addEventListener("DOMContentLoaded", function() {
    showTextInteractive(0);
});

(function() {
    const floatingButton = document.querySelector('#section-10 .unique-floating-button');
    const popupMessage = document.querySelector('#section-10 #uniqueFloatingPopupMessage');
    const largePopupMessage = document.querySelector('#section-10 #uniqueFloatingLargePopupMessage');
    const closeLargePopup = document.querySelector('#section-10 #uniqueFloatingCloseLargePopup');

    // Mostrar el mensaje emergente pequeño después de 10 segundos
    setTimeout(() => {
        popupMessage.style.display = 'block';
    }, 10000);

    // Mostrar u ocultar el mensaje grande al hacer clic en el botón flotante
    floatingButton.addEventListener('click', () => {
        if (largePopupMessage.style.display === 'block') {
            largePopupMessage.style.display = 'none';
        } else {
            largePopupMessage.style.display = 'block';
            popupMessage.style.display = 'none';
        }
    });

    // Cerrar el mensaje grande al hacer clic en la "X"
    closeLargePopup.addEventListener('click', () => {
        largePopupMessage.style.display = 'none';
    });

    // Mostrar el mensaje emergente pequeño al pasar el mouse sobre el botón flotante
    floatingButton.addEventListener('mouseover', () => {
        if (largePopupMessage.style.display !== 'block') {
            popupMessage.style.display = 'block';
        }
    });

    // Ocultar el mensaje emergente pequeño cuando el mouse sale del botón flotante
    floatingButton.addEventListener('mouseout', () => {
        popupMessage.style.display = 'none';
    });
})();
    
document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('#buttons-slide-desk .cta-button-left');
    const rightButton = document.querySelector('#buttons-slide-desk .cta-button-right');

    // Ejemplo de funcionalidad
    leftButton.addEventListener('click', function() {
        console.log('Botón izquierdo clicado');
    });

    rightButton.addEventListener('click', function() {
        console.log('Botón derecho clicado');
    });
});
