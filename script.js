// ---- Tabbed single-page navigation ----
const DEFAULT_SECTION = 'about';
const panels = document.querySelectorAll('.panel');
const navLinks = document.querySelectorAll('.nav-links a');   // highlighted links
const hashLinks = document.querySelectorAll('[data-nav]');    // brand + nav (clickable)
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');

const validIds = new Set([...panels].map((p) => p.id));

const titles = {
  about: 'About', research: 'Research', publications: 'Publications',
  talks: 'Talks', blog: 'Blog', contact: 'Contact',
};

function showSection(id) {
  if (!validIds.has(id)) id = DEFAULT_SECTION;

  panels.forEach((p) => p.classList.toggle('active', p.id === id));
  navLinks.forEach((a) => {
    const active = a.getAttribute('href') === '#' + id;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  document.title = 'Yanjun Sheng — ' + (titles[id] || 'PhD Student in Astrophysics');
  window.scrollTo(0, 0);
  return id;
}

function closeMenu() {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

// Intercept clicks so switching is instant and the URL stays a shareable #hash
hashLinks.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const shown = showSection(id);
    history.pushState({ id: shown }, '', '#' + shown);
    closeMenu();
  });
});

// Back/forward buttons
window.addEventListener('popstate', () => {
  showSection((location.hash || '#' + DEFAULT_SECTION).slice(1));
});

// Initial load — honour an incoming #hash, else default to About
(function init() {
  const id = showSection((location.hash || '').slice(1));
  history.replaceState({ id }, '', '#' + id);
})();

// ---- Mobile menu ----
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();
