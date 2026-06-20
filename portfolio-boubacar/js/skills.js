/**
 * skills.js — Animation des barres de compétences
 * Portfolio Boubacar Thiam
 *
 * Déclenche l'animation de largeur sur chaque .skill-fill
 * quand la barre entre dans le viewport.
 * La valeur cible est lue depuis l'attribut data-width.
 */

const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      skillObserver.unobserve(fill); /* Animation unique */
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));
