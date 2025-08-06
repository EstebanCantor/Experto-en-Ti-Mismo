function openVideo() {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) videoModal.style.display = 'flex';
}

function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    if (videoModal) videoModal.style.display = 'none';
    if (videoFrame) videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
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

            // Verificar si los elementos existen
            if (!daysElementMobile || !hoursElementMobile || !minutesElementMobile || !secondsElementMobile || !countdownContainerMobile) {
                console.error('Uno o más elementos del temporizador no se encontraron en el DOM.');
                return;
            }

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
                daysElementMobile.textContent = days < 10 ? `0${days}` : days;
                hoursElementMobile.textContent = hours < 10 ? `0${hours}` : hours;
                minutesElementMobile.textContent = minutes < 10 ? `0${minutes}` : minutes;
                secondsElementMobile.textContent = seconds < 10 ? `0${seconds}` : seconds;

                // Si la cuenta regresiva ha terminado
                if (distance < 0) {
                    clearInterval(countdownFunctionMobile);
                    countdownContainerMobile.innerHTML = "¡La sesión ha comenzado!";
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

    if (label) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 50) { // Ocultar solo si se desplaza más de 50px
                label.style.transform = 'translateY(-100%)';
                label.style.transition = 'transform 0.3s ease'; // Suavizar la transición
            } else {
                label.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll <= 0 ? 0 : currentScroll;
        });
    } else {
        console.error('El elemento .label-koete no se encontró en el DOM.');
    }

    // Manejo de botones
    const reserveButton = document.querySelector('#buttons-slide-mobile .cta-button-left');
    const whatsappButton = document.querySelector('#buttons-slide-mobile .cta-button-right');

    if (reserveButton) {
        reserveButton.addEventListener('click', function() {
            alert('Estás siendo redirigido para reservar tu cupo.');
        });
    } else {
        console.error('El botón de reserva no se encontró en el DOM.');
    }

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            alert('Estás siendo redirigido a WhatsApp para hablar con un asesor.');
        });
    } else {
        console.error('El botón de WhatsApp no se encontró en el DOM.');
    }
});
