(function() {
    function initCarousel() {
        const slideContainer = document.querySelector('#section-6 .custom-carousel-slide');
        if (!slideContainer) return;

        const slides = document.querySelectorAll('#section-6 .custom-carousel-slide .slide-content');
        const dots = document.querySelectorAll('#section-6 .custom-dot');
        let customSlideIndex = 0;
        let isScrolling = false;

        function showSlide(index) {
            if (index >= slides.length) customSlideIndex = 0;
            if (index < 0) customSlideIndex = slides.length - 1;

            const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
            const scrollPosition = customSlideIndex * slideWidth;

            slideContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            dots.forEach(dot => dot.classList.remove("active"));
            dots[customSlideIndex].classList.add("active");
        }

        function moveSlide(n) {
            customSlideIndex += n;
            if (customSlideIndex >= slides.length) {
                customSlideIndex = 0;
            } else if (customSlideIndex < 0) {
                customSlideIndex = slides.length - 1;
            }
            showSlide(customSlideIndex);
        }

        showSlide(customSlideIndex);

        document.querySelector('#section-6 .nav-arrow.left').addEventListener('click', () => moveSlide(-1));
        document.querySelector('#section-6 .nav-arrow.right').addEventListener('click', () => moveSlide(1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                customSlideIndex = index;
                showSlide(index);
            });
        });

        slideContainer.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
                    const newIndex = Math.round(slideContainer.scrollLeft / slideWidth);
                    if (customSlideIndex !== newIndex) {
                        customSlideIndex = newIndex;
                        dots.forEach(dot => dot.classList.remove("active"));
                        dots[customSlideIndex].classList.add("active");
                    }
                    isScrolling = false;
                });
            }
            isScrolling = true;
        });
    }

    document.addEventListener('DOMContentLoaded', initCarousel);
})();
