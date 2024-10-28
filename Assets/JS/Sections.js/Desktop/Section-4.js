document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('#testimonials-carousel-section .carousel-slide');
    const leftArrow = document.querySelector('#testimonials-carousel-section .carousel-arrow.left');
    const rightArrow = document.querySelector('#testimonials-carousel-section .carousel-arrow.right');
    const dots = document.querySelectorAll('#testimonials-carousel-section .carousel-dots .dot');
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
        // Si estamos en la primera diapositiva, saltamos a la última
        index = slide.children.length - 1;
      }
      scrollToIndex();
    });
  
    rightArrow.addEventListener('click', () => {
      if (index < slide.children.length - 1) {
        index++;
      } else {
        // Si estamos en la última diapositiva, saltamos a la primera
        index = 0;
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
  