/**
 * scroll.js — Animations au scroll (Scroll Reveal)
 * Portfolio Boubacar Thiam
 *
 * Utilise l'IntersectionObserver pour déclencher
 * l'animation .reveal → .reveal.visible avec un délai
 * en cascade pour les éléments frères.
 */

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      /* Délai en cascade selon l'index dans le parent */
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); /* Déclenché une seule fois */
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));
