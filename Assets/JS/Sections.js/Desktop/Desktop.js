document.addEventListener('DOMContentLoaded', function () {
    // Encapsular el código dentro de una función para la Sección 1
    function initSection1() {
        // Selección de elementos de la Sección 1 (ajustados a los IDs actuales)
        const daysElement = document.querySelector('#countdown-desktop #days');
        const hoursElement = document.querySelector('#countdown-desktop #hours');
        const minutesElement = document.querySelector('#countdown-desktop #minutes');
        const secondsElement = document.querySelector('#countdown-desktop #seconds');
        const countdownContainer = document.querySelector('#countdown-desktop');

        // Manejo del Contador de Cuenta Regresiva
        function startCountdown() {
            // Fecha objetivo: 1 de septiembre de 2025 a las 19:30:00 -05
            const countDownDate = new Date("September 1, 2025 19:30:00 GMT-0500").getTime();
            const countdownFunction = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                // Calculo de días, horas, minutos y segundos restantes
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Actualizar los elementos de la cuenta regresiva
                if (daysElement) daysElement.textContent = days < 10 ? `0${days}` : days;
                if (hoursElement) hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
                if (minutesElement) minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
                if (secondsElement) secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;

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

// Resto del código (carousel, progress bar, etc.) permanece sin cambios
// ...
