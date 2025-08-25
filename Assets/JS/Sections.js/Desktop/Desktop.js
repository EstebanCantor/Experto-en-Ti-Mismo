document.addEventListener('DOMContentLoaded', function () {
  // Encapsular el código dentro de una función para la Sección 1
  function initSection1() {
    // Selección de elementos de la Sección 1 (ajustados a los IDs actuales)
    const daysElement    = document.querySelector('#countdown-desktop #days');
    const hoursElement   = document.querySelector('#countdown-desktop #hours');
    const minutesElement = document.querySelector('#countdown-desktop #minutes');
    const secondsElement = document.querySelector('#countdown-desktop #seconds');
    const countdownContainer = document.querySelector('#countdown-desktop');

    // Manejo del Contador de Cuenta Regresiva
    function startCountdown() {
      // 24 de septiembre de 2025 a las 7:30 pm hora Colombia (UTC-05:00)
      const TARGET_MS = new Date('2025-09-24T19:30:00-05:00').getTime();

      function tick() {
        const now = Date.now();
        const distance = TARGET_MS - now;

        if (distance <= 0) {
          if (countdownContainer) countdownContainer.innerHTML = '¡La sesión ha comenzado!';
          clearInterval(timer);
          return;
        }

        // Cálculo de días, horas, minutos y segundos restantes
        const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar los elementos de la cuenta regresiva (con cero a la izquierda)
        if (daysElement)    daysElement.textContent    = String(days).padStart(2, '0');
        if (hoursElement)   hoursElement.textContent   = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
      }

      tick(); // pintar inmediatamente
      const timer = setInterval(tick, 1000);
    }

    startCountdown();
  }

  // Inicializar la Sección 1
  initSection1();
});
