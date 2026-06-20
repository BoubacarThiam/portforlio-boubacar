/**
 * form.js — Gestion du formulaire de contact
 * Portfolio Boubacar Thiam
 *
 * Validation côté client + simulation d'envoi.
 * Pour un vrai envoi d'email, connectez ce formulaire
 * à un service comme Formspree (https://formspree.io)
 * ou EmailJS (https://emailjs.com).
 *
 * ----- Intégration Formspree (recommandé) -----
 * 1. Créez un compte gratuit sur formspree.io
 * 2. Créez un formulaire et copiez votre endpoint
 * 3. Remplacez l'URL dans fetch() ci-dessous par :
 *    https://formspree.io/f/VOTRE_ID
 * 4. Décommentez le bloc fetch et supprimez setTimeout
 * -----------------------------------------------
 */

const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  /* --- Validation basique des champs requis --- */
  const fields = form.querySelectorAll('[required]');
  let valid = true;

  fields.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'rgba(255, 80, 80, 0.5)';
      valid = false;
    } else {
      field.style.borderColor = '';
    }
  });

  if (!valid) return;

  /* --- Animation du bouton pendant l'envoi --- */
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'Envoi en cours…';
  btn.disabled = true;

  /* ==============================================
     OPTION A : Simulation (par défaut)
     Remplacez par OPTION B pour un vrai envoi
  ============================================== */
  setTimeout(() => {
    afficherSucces(btn, originalText);
  }, 1200);

  /* ==============================================
     OPTION B : Vrai envoi via Formspree
     Décommentez et remplacez YOUR_FORM_ID

  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      afficherSucces(btn, originalText);
    } else {
      btn.innerHTML = originalText;
      btn.disabled = false;
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  })
  .catch(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
    alert('Erreur réseau. Vérifiez votre connexion.');
  });
  ============================================== */
});

/**
 * Affiche le message de succès et réinitialise le formulaire.
 * @param {HTMLElement} btn - Le bouton de soumission
 * @param {string} originalText - Le HTML original du bouton
 */
function afficherSucces(btn, originalText) {
  success.style.display = 'block';
  form.reset();
  btn.innerHTML = originalText;
  btn.disabled  = false;

  /* Masquer le message après 6 secondes */
  setTimeout(() => {
    success.style.display = 'none';
  }, 6000);
}
