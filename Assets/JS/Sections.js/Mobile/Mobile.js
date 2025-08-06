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
    // Función para inicializar la Sección 1 móvil con temporizador
    function initSectionMobile1() {
        // Manejo del Contador de Cuenta Regresiva
        function startCountdownMobile() {
            const daysElementMobile = document.querySelector('#section-mobile-1 #days-value');
            const hoursElementMobile = document.querySelector('#section-mobile-1 #hours-value');
            const minutesElementMobile = document.querySelector('#section-mobile-1 #minutes-value');
            const secondsElementMobile = document.querySelector('#section-mobile-1 #seconds-value');
            const countdownContainerMobile = document.querySelector('#section-mobile-1 .countdown');

            const countDownDate = new Date("Sep 01, 2025 19:30:00").getTime();
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

    // JavaScript para ocultar/mostrar la etiqueta (logo) al desplazar
    let lastScroll = 0;
    const label = document.querySelector('.label-koete');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scroll hacia abajo
            label.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            label.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
    });

    // Manejo de botones
    const reserveButton = document.querySelector('#buttons-slide-mobile .cta-button-left');
    const whatsappButton = document.querySelector('#buttons-slide-mobile .cta-button-right');

    reserveButton.addEventListener('click', function() {
        alert('Estás siendo redirigido para reservar tu cupo.');
    });

    whatsappButton.addEventListener('click', function() {
        alert('Estás siendo redirigido a WhatsApp para hablar con un asesor.');
    });
});
