// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close menu after clicking a link (mobile)
links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the nav item for the section currently in view
const sections = document.querySelectorAll('section[id], article[id], footer[id]');
const navMap = {};
document.querySelectorAll('.nav-links a').forEach((a) => {
  navMap[a.getAttribute('href').slice(1)] = a;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Object.values(navMap).forEach((a) => a.classList.remove('active'));
        const link = navMap[entry.target.id];
        if (link) link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => observer.observe(s));

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
