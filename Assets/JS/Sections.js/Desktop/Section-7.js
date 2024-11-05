let currentImageIndexInteractive = 0;
const totalImages = 2; // Número total de imágenes

function updateImageInteractive() {
    const imageContainer = document.querySelector('#section-interactive .image-container');
    const offset = -currentImageIndexInteractive * 100;
    imageContainer.style.transform = `translateX(${offset}%)`;
}

function showTextInteractive(index) {
    const textsInteractive = document.querySelectorAll('#section-interactive .option-text p');
    const optionsInteractive = document.querySelectorAll('#section-interactive .option');

    textsInteractive.forEach((text, i) => {
        text.style.display = i === index ? 'block' : 'none';
    });

    optionsInteractive.forEach((option, i) => {
        option.classList.toggle('active', i === index);
    });

    currentImageIndexInteractive = index;
    updateImageInteractive();
}

function prevImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive - 1 + totalImages) % totalImages;
    updateImageInteractive();
    showTextInteractive(currentImageIndexInteractive);
}

function nextImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive + 1) % totalImages;
    updateImageInteractive();
    showTextInteractive(currentImageIndexInteractive);
}

document.addEventListener("DOMContentLoaded", function() {
    showTextInteractive(0);
});
