/**
 * spotlight.js — Lueur qui suit le curseur sur la carte 3D
 * Portfolio Boubacar Thiam
 *
 * Adaptation vanilla JS du composant React "Spotlight" :
 * suit la souris au-dessus de la carte et déplace un glow
 * radial via des variables CSS (--spot-x / --spot-y).
 */

const hero = document.getElementById('hero');
const heroVisual = document.getElementById('heroVisual');

if (hero && heroVisual) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroVisual.style.setProperty('--spot-x', `${x}px`);
    heroVisual.style.setProperty('--spot-y', `${y}px`);
  });

  hero.addEventListener('mouseenter', () => {
    heroVisual.classList.add('spotlight-active');
  });

  hero.addEventListener('mouseleave', () => {
    heroVisual.classList.remove('spotlight-active');
  });
}

/* Bascule sur un fond dégradé si la 3D ne peut pas s'afficher
   (WebGL indisponible, script bloqué, scène trop lente à charger) */
const splineViewer = document.querySelector('.hero-spline');
const splineLoader = document.querySelector('.hero-spline-loader');

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch (e) {
    return false;
  }
}

function activateFallback() {
  if (heroVisual) heroVisual.classList.add('fallback');
  if (splineLoader) splineLoader.style.display = 'none';
}

if (!hasWebGL()) {
  activateFallback();
} else if (splineViewer && splineLoader) {
  const fallbackTimer = setTimeout(activateFallback, 8000);

  splineViewer.addEventListener('load', () => {
    clearTimeout(fallbackTimer);
    splineLoader.style.display = 'none';
  });

  splineViewer.addEventListener('error', () => {
    clearTimeout(fallbackTimer);
    activateFallback();
  });
}
