// Assets/JS/Label.js
// Oculta el label cuando se hace scroll hacia abajo y lo muestra al subir.
// Requiere las reglas de Global.css con #label-section.is-hidden .label-koete { ... }

(function () {
  const wrapper = document.getElementById('label-section');
  if (!wrapper) return;

  // Limpia estilos inline previos, si los hubo
  const labelEl = wrapper.querySelector('.label-koete');
  if (labelEl) {
    labelEl.style.transform = '';
    labelEl.style.transition = '';
  }

  let lastY = window.scrollY || 0;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY || 0;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Umbral para evitar jitter
        if (y > lastY + 6 && y > 50) {
          // Bajando -> ocultar
          wrapper.classList.add('is-hidden');
        } else if (y < lastY - 6 || y <= 50) {
          // Subiendo o muy arriba -> mostrar
          wrapper.classList.remove('is-hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
