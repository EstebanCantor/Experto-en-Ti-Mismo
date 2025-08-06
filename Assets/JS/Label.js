// Assets/JS/Label.js
// Hide on scroll down; keep hidden below the video; avoid bottom "bounce";
// show (slow, via CSS) on scroll up. Works on desktop & mobile.

(function () {
  const wrapper = document.getElementById('label-section');
  if (!wrapper) return;

  // Clear any old inline styles
  const labelEl = wrapper.querySelector('.label-koete');
  if (labelEl) {
    labelEl.style.transform = '';
    labelEl.style.transition = '';
  }

  // Helper: is element visible (not display:none and in layout)?
  function isVisible(el) {
    if (!el) return false;
    if (el.offsetParent === null) return false;
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden';
  }

  // Find the Y position (document coords) of the visible video (mobile or desktop)
  function computeTriggerY() {
    const mobileVideo = document.querySelector('#section-mobile-1 .video-embed-mobile');
    const desktopVideo = document.querySelector('#section-desktop-1 .video-embed');
    const target = isVisible(mobileVideo) ? mobileVideo : (isVisible(desktopVideo) ? desktopVideo : null);

    if (!target) {
      // No video visible (rare) -> never force-hide by trigger
      return Number.POSITIVE_INFINITY;
    }
    const r = target.getBoundingClientRect();
    // Hide slightly before reaching the video
    return r.top + window.scrollY - 4;
  }

  let triggerY = computeTriggerY();
  let lastY = window.scrollY || 0;
  let ticking = false;

  function update() {
    const y = window.scrollY || 0;
    const doc = document.documentElement;
    const contentScrollable = doc.scrollHeight - window.innerHeight > 8;

    // Always visible very near the top
    if (y <= 50) {
      wrapper.classList.remove('is-hidden');
      lastY = y; ticking = false; return;
    }

    // Keep hidden once we are below the video region
    if (y >= triggerY) {
      wrapper.classList.add('is-hidden');
      lastY = y; ticking = false; return;
    }

    // Avoid bounce at the bottom (only if the page actually scrolls)
    const atBottom = contentScrollable && (y + window.innerHeight >= doc.scrollHeight - 2);
    if (atBottom) {
      wrapper.classList.add('is-hidden');
      lastY = y; ticking = false; return;
    }

    // Direction-based: down -> hide, up -> show
    if (y > lastY) {
      wrapper.classList.add('is-hidden');
    } else if (y < lastY) {
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
    update();
  }

  // Initialize
  triggerY = computeTriggerY();
  update();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('touchmove', onScroll, { passive: true }); // iOS
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
})();
