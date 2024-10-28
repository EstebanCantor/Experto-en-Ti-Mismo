document.addEventListener("DOMContentLoaded", function () {
    let animationTriggered = false;

    function animateProgressBar() {
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const scoreElement = document.querySelector(".rating-score-number");

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        scoreElement.textContent = '0.0';

        let progress = 0;
        let currentScore = 0;
        const targetProgress = 95;
        const targetScore = 4.9;
        const circleSpeed = 2;
        const numberSpeed = 0.02;

        function updateProgress() {
            if (progress <= targetProgress) {
                progress += circleSpeed;
                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;
            }

            if (currentScore < targetScore) {
                currentScore += numberSpeed;
                scoreElement.textContent = currentScore.toFixed(1);
            }

            if (progress <= targetProgress || currentScore < targetScore) {
                requestAnimationFrame(updateProgress);
            }
        }

        updateProgress();
    }

    window.addEventListener("scroll", function () {
        const section = document.querySelector(".rating-section");
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && !animationTriggered) {
            animateProgressBar();
            animationTriggered = true;
        }
    });
});
