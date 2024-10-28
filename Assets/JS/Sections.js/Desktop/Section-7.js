let currentImageIndexInteractive = 0;
const imagesInteractive = [
    'https://koete.co/wp-content/uploads/2024/08/pexels-matilda-wormwood-4099096.jpg',
    'https://koete.co/wp-content/uploads/2024/08/pexels-rdne-7683825-scaled.jpg',
    'https://koete.co/wp-content/uploads/2024/08/pexels-ekaterina-bolovtsova-4048767.jpg',
    'https://koete.co/wp-content/uploads/2024/08/pexels-karolina-grabowska-8546801.jpg'
];

// Función para mostrar el texto correspondiente y cambiar la imagen
function showTextInteractive(index) {
    const textsInteractive = document.querySelectorAll('.option-text p');
    const imageElementInteractive = document.getElementById('interactiveSliderImage');
    const optionsInteractive = document.querySelectorAll('.option');

    textsInteractive.forEach((text, i) => {
        if (i === index - 1) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });

    optionsInteractive.forEach((option, i) => {
        if (i === index - 1) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    imageElementInteractive.src = imagesInteractive[index - 1];
    currentImageIndexInteractive = index - 1;
}

function prevImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive - 1 + imagesInteractive.length) % imagesInteractive.length;
    document.getElementById('interactiveSliderImage').src = imagesInteractive[currentImageIndexInteractive];
    showTextInteractive(currentImageIndexInteractive + 1);
}

function nextImageInteractive() {
    currentImageIndexInteractive = (currentImageIndexInteractive + 1) % imagesInteractive.length;
    document.getElementById('interactiveSliderImage').src = imagesInteractive[currentImageIndexInteractive];
    showTextInteractive(currentImageIndexInteractive + 1);
}

document.addEventListener("DOMContentLoaded", function() {
    showTextInteractive(1);
});
