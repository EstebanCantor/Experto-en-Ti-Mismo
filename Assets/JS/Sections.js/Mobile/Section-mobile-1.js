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

            const countDownDate = new Date("Nov 30, 2024 19:00:00").getTime();
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
