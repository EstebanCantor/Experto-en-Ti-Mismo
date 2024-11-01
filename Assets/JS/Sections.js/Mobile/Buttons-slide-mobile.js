document.addEventListener('DOMContentLoaded', function() {
    const reserveButton = document.querySelector('#buttons-slide-mobile .cta-button-left');
    const whatsappButton = document.querySelector('#buttons-slide-mobile .cta-button-right');

    reserveButton.addEventListener('click', function() {
        alert('Estás siendo redirigido para reservar tu cupo.');
    });

    whatsappButton.addEventListener('click', function() {
        alert('Estás siendo redirigido a WhatsApp para hablar con un asesor.');
    });
});
