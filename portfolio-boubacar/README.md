# Portfolio — Boubacar Thiam

> Développeur Web Junior · Sénégal  
> Disponible pour stage, freelance ou emploi

Portfolio personnel moderne et responsive présentant mes compétences, mon parcours et mes projets de développement web.

---

## Aperçu

Design **dark mode élégant** avec accents dorés, construit en HTML/CSS/JS vanilla — aucune dépendance, aucun framework.

**Sections :**
- Hero avec badge de disponibilité et statistiques
- À propos avec timeline de parcours et cards résumé
- Compétences avec barres de progression animées
- 4 projets avec mockups SVG personnalisés
- Contact avec formulaire et liens directs
- Footer avec réseaux sociaux

---

## Structure du projet

```
portfolio-boubacar/
├── index.html              # Page principale
├── README.md               # Ce fichier
│
├── css/
│   ├── variables.css       # Tokens de design (couleurs, typographie)
│   ├── reset.css           # Reset CSS
│   ├── base.css            # Utilitaires & composants partagés
│   ├── nav.css             # Navigation + menu mobile
│   ├── hero.css            # Section Hero
│   ├── about.css           # Section À propos
│   ├── skills.css          # Section Compétences
│   ├── projects.css        # Section Projets
│   ├── contact.css         # Section Contact & Formulaire
│   ├── footer.css          # Pied de page
│   └── responsive.css      # Media queries responsive
│
├── js/
│   ├── nav.js              # Sticky nav + burger mobile + lien actif
│   ├── scroll.js           # Scroll reveal (IntersectionObserver)
│   ├── skills.js           # Animation barres de compétences
│   └── form.js             # Validation + envoi formulaire
│
└── assets/
    └── (photo.jpg)         # Remplacez par votre photo de profil
```

---

## Installation & utilisation

### En local
```bash
git clone https://github.com/votre-username/portfolio-boubacar.git
cd portfolio-boubacar
# Ouvrez index.html dans votre navigateur
```

Aucune installation de dépendances nécessaire — c'est du HTML/CSS/JS pur.

### Sur GitHub Pages (hébergement gratuit)
1. Poussez le dossier sur un repository GitHub public
2. Allez dans **Settings → Pages**
3. Source : `main` branch, dossier `/ (root)`
4. Votre portfolio sera en ligne sur `https://votre-username.github.io/portfolio-boubacar`

---

## Personnalisation

### Ajouter votre photo
Remplacez le bloc `.avatar-placeholder` dans `index.html` par :
```html
<img src="assets/photo.jpg" alt="Boubacar Thiam" style="width:100%; height:100%; object-fit:cover;" />
```

### Changer les couleurs
Toutes les couleurs sont dans `css/variables.css` — modifiez `--gold` et `--bg` pour changer tout le thème.

### Activer le vrai envoi du formulaire
Dans `js/form.js`, suivez les instructions pour connecter **Formspree** :
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez votre ID
3. Décommentez le bloc `fetch` dans `form.js`

### Mettre à jour les liens GitHub des projets
Cherchez `href="https://github.com/boubacarthiam005"` dans `index.html` et remplacez par les URLs de vos vrais repos.

---

## Technologies utilisées

- HTML5 sémantique
- CSS3 (Custom Properties, Flexbox, Grid, Animations)
- JavaScript ES6+ (IntersectionObserver, Fetch API)
- Google Fonts (Syne + DM Sans)

---

## Contact

- **Email :** boubacarthiam005@icloud.com
- **LinkedIn :** [linkedin.com/in/boubacar-thiam-4041a0391](http://www.linkedin.com/in/boubacar-thiam-4041a0391)
- **GitHub :** [github.com/boubacarthiam005](https://github.com/boubacarthiam005)

---

*Fait avec passion · Sénégal 🇸🇳*
