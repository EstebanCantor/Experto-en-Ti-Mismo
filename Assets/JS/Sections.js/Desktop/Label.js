// Hide label when scrolling down; show when scrolling up.
// Works on mobile & desktop. Requires Global.css rule for
// #label-section.is-hidden .label-koete { transform: translateY(-120%); opacity:0; }

(function () {
  const wrapper = document.getElementById('label-section');
  if (!wrapper) return;

  // Ensure no inline transforms from old code
  const labelEl = wrapper.querySelector('.label-koete');
  if (labelEl) {
    labelEl.style.transform = '';
    labelEl.style.transition = '';
  }

  let lastY = window.scrollY || 0;
  let ticking = false;

  function update() {
    const y = window.scrollY || 0;

    // Hide when scrolling down past 50px; show when scrolling up
    if (y > lastY && y > 50) {
      wrapper.classList.add('is-hidden');
    } else if (y < lastY || y <= 50) {
      wrapper.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  // Initialize state and listeners
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('touchmove', onScroll, { passive: true }); // iOS
})();
