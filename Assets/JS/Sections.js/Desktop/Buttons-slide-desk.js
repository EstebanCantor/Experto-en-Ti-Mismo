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
