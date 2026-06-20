/**
 * nav.js — Navigation sticky + menu burger mobile
 * Portfolio Boubacar Thiam
 */

const nav        = document.getElementById('mainNav');
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

/* ---- Navbar sticky au scroll ---- */
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---- Burger : ouvrir / fermer le menu mobile ---- */
burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* ---- Fermer le menu mobile (appelé par onclick dans le HTML) ---- */
function closeMobile() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ---- Lien actif dans la nav selon la section visible ---- */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => (a.style.color = ''));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active && !active.classList.contains('nav-cta')) {
        active.style.color = 'var(--gold)';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
