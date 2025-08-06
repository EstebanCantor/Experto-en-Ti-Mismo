// Assets/JS/Sections.js/Mobile/Mobile.js

function openVideo() {
  const videoModal = document.getElementById('videoModal');
  if (videoModal) videoModal.style.display = 'flex';
}

function closeVideo() {
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  if (videoModal) videoModal.style.display = 'none';
  if (videoFrame) {
    videoFrame.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*'
    );
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // ====== Sección 1 Móvil: temporizador ======
  function initSectionMobile1() {
    function startCountdownMobile() {
      // Elementos del contador (IDs exactos del index móvil)
      const daysEl = document.querySelector('#section-mobile-1 #days-value');
      const hoursEl = document.querySelector('#section-mobile-1 #hours-value');
      const minutesEl = document.querySelector('#section-mobile-1 #minutes-value');
      const secondsEl = document.querySelector('#section-mobile-1 #seconds-value');
      const containerEl = document.getElementById('countdown-mobile');

      // Verificación
      if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !containerEl) {
        console.error('[Countdown Mobile] No se encontraron los elementos del contador.');
        return;
      }

      // 01 de septiembre de 2025 a las 7:30 pm hora Colombia (UTC-05:00)
      const TARGET_MS = new Date('2025-09-01T19:30:00-05:00').getTime();

      const interval = setInterval(function () {
        const now = Date.now();
        const distance = TARGET_MS - now;

        if (distance <= 0) {
          clearInterval(interval);
          containerEl.textContent = '¡La sesión ha comenzado!';
          return;
        }

        // Cálculos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualiza con cero a la izquierda
        daysEl.textContent = days < 10 ? `0${days}` : String(days);
        hoursEl.textContent = hours < 10 ? `0${hours}` : String(hours);
        minutesEl.textContent = minutes < 10 ? `0${minutes}` : String(minutes);
        secondsEl.textContent = seconds < 10 ? `0${seconds}` : String(seconds);
      }, 1000);
    }

    startCountdownMobile();
  }

  initSectionMobile1();

  // ====== (Nota) La lógica del label está en Assets/JS/Label.js ======

  // ====== Botones (si existen) ======
  const reserveButton = document.querySelector('#buttons-slide-mobile .cta-button-left');
  if (reserveButton) {
    reserveButton.addEventListener('click', function () {
      alert('Estás siendo redirigido para reservar tu cupo.');
    });
  }

  const whatsappButton = document.querySelector('#buttons-slide-mobile .cta-button-right');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function () {
      alert('Estás siendo redirigido a WhatsApp para hablar con un asesor.');
    });
  }
});
