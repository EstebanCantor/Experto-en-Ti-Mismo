(function() {
    function initMobileCarousel() {
        const slideContainer = document.querySelector('#section-mobile-6-1 .mobile-carousel-slide');
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-mobile-6-1 .mobile-carousel-slide .slide-content');
        let slideIndex = 0;

        function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const scrollPosition = slideIndex * slideWidth;

            slideContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        document.querySelector('#section-mobile-6-1 .nav-arrow.left').addEventListener('click', function() {
            slideIndex--;
            showSlide(slideIndex);
        });

        document.querySelector('#section-mobile-6-1 .nav-arrow.right').addEventListener('click', function() {
            slideIndex++;
            showSlide(slideIndex);
        });

        showSlide(slideIndex);
    }

    document.addEventListener('DOMContentLoaded', initMobileCarousel);
})();
