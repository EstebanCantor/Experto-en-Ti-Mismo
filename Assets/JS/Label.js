// Hide the label when scrolling down, keep it hidden below the video,
// and show it smoothly only when scrolling up ABOVE the video.
// Also hide near the bottom to avoid iOS rubber-band "bounce".

(function () {
  const wrapper = document.getElementById('label-section');
  if (!wrapper) return;

  // Clean any old inline transforms from previous scripts
  const labelEl = wrapper.querySelector('.label-koete');
  if (labelEl) {
    labelEl.style.transform = '';
    labelEl.style.transition = '';
  }

  // Compute the Y position (document coordinates) at which the label
  // must remain hidden. We use the top of the video currently visible.
  function computeTriggerY() {
    const candidates = [
      document.querySelector('#section-mobile-1 .video-embed-mobile'),
      document.querySelector('#section-desktop-1 .video-embed'),
    ];

    const ys = [];

    candidates.forEach((el) => {
      if (!el) return;
      const cs = window.getComputedStyle(el);
      // Ignore hidden elements (display:none) from the non-active layout
      if (cs.display === 'none' || el.offsetParent === null) return;
      const rect = el.getBoundingClientRect();
      ys.push(rect.top + window.scrollY);
    });

    // Fallback if we didn't find a visible video
    if (ys.length === 0) return 500;

    // Small buffer so the label hides slightly before the video
    return Math.max(0, Math.min(...ys) - 4);
  }

  let triggerY = computeTriggerY();
  let lastY = window.scrollY || 0;
  let ticking = false;

  function update() {
    const y = window.scrollY || 0;

    // 1) Hide when we're past the trigger (below the video area)
    if (y >= triggerY) {
      wrapper.classList.add('is-hidden');
      lastY = y;
      ticking = false;
      return;
    }

    // 2) Hide when near the bottom (prevents "bounce" reappearing)
    const doc = document.documentElement;
    const atBottom = y + window.innerHeight >= doc.scrollHeight - 2;
    if (atBottom) {
      wrapper.classList.add('is-hidden');
      lastY = y;
      ticking = false;
      return;
    }

    // 3) Direction-based behavior above the video:
    // down = hide (quick), up = show (slow, handled in CSS)
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

  function onResize() {
    triggerY = computeTriggerY();
    // Re-evaluate immediately to sync state
    update();
  }

  // Init
  triggerY = computeTriggerY();
  update();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('touchmove', onScroll, { passive: true }); // iOS
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
})();
