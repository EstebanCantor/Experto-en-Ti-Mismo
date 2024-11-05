(function() {
    const floatingButton = document.querySelector('#section-10 .unique-floating-button');
    const popupMessage = document.querySelector('#section-10 #uniqueFloatingPopupMessage');
    const largePopupMessage = document.querySelector('#section-10 #uniqueFloatingLargePopupMessage');
    const closeLargePopup = document.querySelector('#section-10 #uniqueFloatingCloseLargePopup');

    // Mostrar el mensaje emergente pequeño después de 10 segundos
    setTimeout(() => {
        popupMessage.style.display = 'block';
    }, 10000);

    // Mostrar u ocultar el mensaje grande al hacer clic en el botón flotante
    floatingButton.addEventListener('click', () => {
        if (largePopupMessage.style.display === 'block') {
            largePopupMessage.style.display = 'none';
        } else {
            largePopupMessage.style.display = 'block';
            popupMessage.style.display = 'none';
        }
    });

    // Cerrar el mensaje grande al hacer clic en la "X"
    closeLargePopup.addEventListener('click', () => {
        largePopupMessage.style.display = 'none';
    });

    // Mostrar el mensaje emergente pequeño al pasar el mouse sobre el botón flotante
    floatingButton.addEventListener('mouseover', () => {
        if (largePopupMessage.style.display !== 'block') {
            popupMessage.style.display = 'block';
        }
    });

    // Ocultar el mensaje emergente pequeño cuando el mouse sale del botón flotante
    floatingButton.addEventListener('mouseout', () => {
        popupMessage.style.display = 'none';
    });
})();
    
