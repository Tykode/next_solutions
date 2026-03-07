# Next Solutions — CLAUDE.md

## Project Overview

Site vitrine B2B/B2C pour **Next Solutions**, spécialiste des solutions monétiques (point de vente) en Guyane française, basé à Cayenne depuis 2014.

**Stack** : Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI, Lucide Icons, Resend
**Déploiement** : next-solutions.fr
**Langue** : Français (fr_FR)

---

## Design Context

### Users

Audience large et mixte : petits commerçants (épiceries, boulangeries, restaurateurs indépendants) ET gérants multi-sites. Le site doit être accessible aux novices qui découvrent les solutions POS, tout en inspirant confiance aux décideurs avertis. Contexte local : utilisateurs guyanais, familiers avec un environnement tropical, attachés à la proximité et au service humain.

### Brand Personality

**3 mots** : Fiable. Local. Expert.

- Voix : directe, rassurante, sans jargon excessif
- Ton : professionnel mais chaleureux — pas froid comme une multinationale, pas décontracté comme une startup
- Identité locale forte : Cayenne, Guyane, 10+ ans de présence, 500+ commerces équipés

### Aesthetic Direction

- **Dark-first** (fond #09080c) avec light mode complet — on conserve cette direction
- **Accent ambre #f0a050** — couleur principale de marque, chaleur, énergie, authenticité
- **Glassmorphism** subtil + grain texture (opacity ~0.028) — sophistication sans ostentation
- **Glows par catégorie** : Caisses (violet #b07ae0), Logiciels (bleu #4f8ef7), TPE (vert #52c48a), Balances (rose #e8748a)
- **Typographie** : Syne (display, headings — géométrique, moderne) + DM Sans (body — lisible, neutre)
- **Anti-références** : Éviter le look startup Silicon Valley générique, éviter le corporate froid et sans âme

### Emotion Cible

**Confiance & sérieux** — le visiteur doit penser : *"Ces gens connaissent leur métier, je peux leur faire confiance."*
Secondairement : sentiment de proximité locale et de modernité adaptée au contexte guyanais.

### Design Principles

1. **Clarté avant tout** — chaque page a un seul objectif principal ; la hiérarchie visuelle guide vers l'action (rendez-vous / contact)
2. **Confiance par la preuve** — stats, témoignages, présence locale, années d'expérience : rendre les preuves visibles et mémorables
3. **Local d'abord** — le design ancre l'identité guyanaise sans folklorisme ; chaleur de l'ambre, proximité du langage
4. **Sobriété premium** — dark + ambre + espace blanc = élégance sans ostentation ; résister à l'excès de glow ou d'effets
5. **Accessibilité universelle** — WCAG AA minimum, reduced-motion respecté, light mode complet et soigné

---

## Site Structure

| Route | Page |
|---|---|
| `/` | Homepage (Hero, Services, About, CTA) |
| `/about` | Histoire & équipe |
| `/caisses` | Produit : caisses tactiles |
| `/logiciels` | Produit : logiciels de gestion |
| `/tpe` | Produit : terminaux de paiement |
| `/balances` | Produit : balances |
| `/faq` | Questions fréquentes |
| `/contact` | Formulaire de contact |
| `/rendez-vous` | Prise de rendez-vous (Calendly) |
| `/rejoindre` | Recrutement |
| `/cgu` | CGU |
| `/cgv` | CGV |

---

## Execution Plan — Skills Pipeline

Chaque skill est appliqué sur l'ensemble du site, puis commité + poussé sur GitHub avant de passer au suivant.

**Ordre optimal (impact décroissant) :**

| # | Skill | Objectif |
|---|---|---|
| 1 | `/audit` | Base technique — a11y, perf, responsive |
| 2 | `/normalize` | Cohérence design system |
| 3 | `/clarify` | Copy UX clair et direct |
| 4 | `/harden` | Edge cases, i18n, error states |
| 5 | `/adapt` | Multi-device responsive |
| 6 | `/optimize` | Performance (LCP, CLS, INP) |
| 7 | `/animate` | Motion purposeful |
| 8 | `/colorize` | Couleur stratégique |
| 9 | `/bolder` | Impact visuel |
| 10 | `/delight` | Moments de joie |
| 11 | `/extract` | Composants réutilisables |
| 12 | `/distill` | Épurer l'inutile |
| 13 | `/onboard` | Flux onboarding |
| 14 | `/critique` | Revue UX globale |
| 15 | `/polish` | Finition avant ship |

> **Convention de commit** : `skill(<nom>): <description courte>` — ex: `skill(audit): fix contrast ratios and missing ARIA labels`

---

## Key Design Tokens

```css
/* Couleurs */
--c-bg: #09080c          /* fond principal */
--c-surface: #100f13     /* surface élevée */
--c-card: #17151b        /* cartes */
--color-amber: #f0a050   /* accent principal */

/* Catégories produits */
--color-caisses:  #b07ae0  /* violet */
--color-logiciels:#4f8ef7  /* bleu */
--color-tpe:      #52c48a  /* vert */
--color-balances: #e8748a  /* rose */

/* Texte */
--color-text:   #ede9e4
--color-muted:  #6b6270
--color-subtle: #9d95a3
```

```
/* Typographie */
Display/Headings : Syne (700–800)
Body : DM Sans (300–600)
```
