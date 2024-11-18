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
