
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function setActiveNav() {
  const currentPath = window.location.pathname;
  const filename = currentPath.split('/').pop();
  const navLinks = document.querySelectorAll('.nav a:not(.nav-cta)');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('active');

    if ((filename === '' || filename === 'index.html') && href === 'index.html') {
      link.classList.add('active');
    } else if (filename === href) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
setActiveNav();
