// ---- Theme toggle ----
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ---- Cycling multilingual greeting (home page only) ----
const greetingEl = document.getElementById('greeting');
if (greetingEl) {
  const greetings = ['Hi there!', '你好！', "G'day!", '¡Hola!', 'こんにちは！'];
  let i = 0;
  function cycle() {
    greetingEl.classList.add('fade-out');
    setTimeout(() => {
      i = (i + 1) % greetings.length;
      greetingEl.textContent = greetings[i];
      setTimeout(() => greetingEl.classList.remove('fade-out'), 50);
    }, 500);
  }
  setTimeout(() => setInterval(cycle, 2500), 1000);
}

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
