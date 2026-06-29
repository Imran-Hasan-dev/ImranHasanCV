/* ============================================
   DARK MODE TOGGLE — Flip/Rotate Animation
   ============================================ */
(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  function applyTheme(theme, animate) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    if (animate) {
      // Phase 1: spin out (0 → 180°) while fading out
      btn.classList.add('theme-toggle--spinning-out');

      setTimeout(function () {
        // Swap icon at the halfway point
        btn.innerHTML = theme === 'dark'
          ? '<i class="uil uil-sun"></i>'
          : '<i class="uil uil-moon"></i>';

        btn.classList.remove('theme-toggle--spinning-out');
        // Phase 2: spin in (180° → 360°) while fading in
        btn.classList.add('theme-toggle--spinning-in');

        setTimeout(function () {
          btn.classList.remove('theme-toggle--spinning-in');
        }, 220);
      }, 220);
    } else {
      // No animation on first load
      btn.innerHTML = theme === 'dark'
        ? '<i class="uil uil-sun"></i>'
        : '<i class="uil uil-moon"></i>';
    }
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next, true);
  }

  // Apply saved theme immediately before paint (no animation)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyTheme(saved, false);

  document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem(STORAGE_KEY) || 'light';
    applyTheme(theme, false);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
