document.addEventListener("DOMContentLoaded", function () {
    // Prevenir que la página se desplace automáticamente a la sección
    window.history.scrollRestoration = 'manual';

    let animationTriggeredMobile = false;

    function animateProgressBarMobile() {
        const circle = document.querySelector('.progress-ring__circle-mobile');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const scoreElement = document.querySelector(".rating-score-number-mobile");

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        scoreElement.textContent = '0.0';

        let progress = 0;
        let currentScore = 0;
        const targetProgress = 95; // Target for progress bar
        const targetScore = 4.9; // Target score number
        const circleSpeed = 2; // Speed of the circle filling
        const numberSpeed = 0.02; // Speed of the number incrementing

        function updateProgressMobile() {
            // Update the circular progress bar
            if (progress <= targetProgress) {
                progress += circleSpeed;
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }

            // Update the score number
            if (currentScore < targetScore) {
                currentScore += numberSpeed;
                scoreElement.textContent = currentScore.toFixed(1);
            }

            // Keep updating if not finished
            if (progress <= targetProgress || currentScore < targetScore) {
                requestAnimationFrame(updateProgressMobile);
            }
        }

        updateProgressMobile();
    }

    window.addEventListener("scroll", function () {
        const sectionMobile = document.querySelector("#section-mobile-5");
        const sectionPositionMobile = sectionMobile.getBoundingClientRect().top;
        const screenPositionMobile = window.innerHeight / 1.3;

        // Trigger animation only once when section is in view
        if (sectionPositionMobile < screenPositionMobile && !animationTriggeredMobile) {
            animateProgressBarMobile();
            animationTriggeredMobile = true;
        }
    });
});
