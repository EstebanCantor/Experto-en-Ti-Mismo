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
