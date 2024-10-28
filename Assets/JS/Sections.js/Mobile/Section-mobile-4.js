document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('#testimonials-carousel-mobile .carousel-slide');
    const leftArrow = document.querySelector('#testimonials-carousel-mobile .carousel-arrow.left');
    const rightArrow = document.querySelector('#testimonials-carousel-mobile .carousel-arrow.right');
    const dots = document.querySelectorAll('#testimonials-carousel-mobile .carousel-dots .dot');
    let index = 0;

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function scrollToIndex() {
        const slideWidth = slide.children[0].offsetWidth;
        slide.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
        updateDots();
    }

    leftArrow.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = slide.children.length - 1; // Salto a la última
        }
        scrollToIndex();
    });

    rightArrow.addEventListener('click', () => {
        if (index < slide.children.length - 1) {
            index++;
        } else {
            index = 0; // Salto a la primera
        }
        scrollToIndex();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            scrollToIndex();
        });
    });

    // Inicializar puntos
    updateDots();
});
