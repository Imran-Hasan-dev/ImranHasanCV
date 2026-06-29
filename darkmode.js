/* ============================================
   DARK MODE — Switch Toggle
   ============================================ */
(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    // Sync the checkbox state
    const checkbox = document.getElementById('theme-switch-input');
    if (checkbox) checkbox.checked = (theme === 'dark');
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply before paint
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyTheme(saved);

  document.addEventListener('DOMContentLoaded', function () {
    const theme = localStorage.getItem(STORAGE_KEY) || 'light';
    applyTheme(theme);
    const checkbox = document.getElementById('theme-switch-input');
    if (checkbox) checkbox.addEventListener('change', toggleTheme);
  });
})();
