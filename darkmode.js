/* ============================================
   DARK MODE TOGGLE
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
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = theme === 'dark'
        ? '<i class="uil uil-sun"></i>'
        : '<i class="uil uil-moon"></i>';
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply saved theme immediately (before paint)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyTheme(saved);

  // Wait for DOM then wire up button
  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(STORAGE_KEY) || 'light';
    applyTheme(saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
