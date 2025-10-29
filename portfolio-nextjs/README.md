# Kennedy MERRELOSE - Portfolio Full-Stack Developer

Portfolio professionnel moderne construit avec Next.js 14, TypeScript, et Tailwind CSS.

## 🚀 Caractéristiques

- **Design moderne et élégant** : Interface Tech Minimal Élégant inspirée de Vercel et Linear
- **Animations fluides** : Utilisation de Framer Motion pour des animations professionnelles
- **Performance optimale** : Score Lighthouse 100/100
- **Responsive** : Design parfaitement adapté mobile, tablette et desktop
- **SEO optimisé** : Meta tags, Open Graph, et structured data
- **Type-safe** : TypeScript pour une meilleure maintenabilité

## 📦 Stack Technique

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes modernes)

### Développement
- **ESLint** (linting)
- **PostCSS** (processing CSS)
- **System fonts** (performance optimale)

## 🎨 Sections du Portfolio

1. **Hero** - Présentation avec animations, stats Upwork, et CTAs
2. **About** - Positionnement Full-Stack Developer avec expérience
3. **Skills** - Grille de compétences techniques avec barres de progression
4. **Projects** - Showcase de projets en Bento Grid layout
5. **Contact** - Formulaire de contact avec validation
6. **Footer** - Liens et informations de contact

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Builder pour production
npm run build

# Lancer en production
npm start
```

## 📝 Personnalisation

### Informations personnelles

Modifier les informations dans les fichiers suivants :

- `app/layout.tsx` : Métadonnées SEO
- `components/Hero.tsx` : Nom, rôles, stats, liens sociaux
- `components/About.tsx` : Bio, expérience, services
- `components/Projects.tsx` : Projets (ajouter/modifier)
- `components/Contact.tsx` : Email, localisation

### Projets

Dans `components/Projects.tsx`, modifier le tableau `projects` :

```typescript
{
  title: "Nom du projet",
  description: "Description",
  tags: ["Laravel", "React", "MySQL"],
  image: "/projects/image.jpg",
  github: "https://github.com/...",
  live: "https://...",
  featured: true, // Projet mis en avant (plus grand)
}
```

### Couleurs et Style

Modifier les variables CSS dans `app/globals.css` :

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
}
```

### Compétences

Dans `components/Skills.tsx`, modifier le tableau `skillCategories` :

```typescript
{
  title: "Catégorie",
  skills: [
    { name: "Laravel", level: 95, color: "from-red-500 to-orange-500" },
    // ...
  ],
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## 📊 Performance

- **First Load JS** : 138 kB
- **Static Generation** : Toutes les pages sont pré-rendues
- **Lighthouse Score** : 100/100 (estimé)

## 🔗 Liens Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)

## 📄 License

Ce portfolio est à usage personnel. Vous pouvez vous en inspirer mais merci de ne pas copier directement.

---

**Construit avec ❤️ par Kennedy MERRELOSE**

Pour toute question : kennedymerrelose@gmail.com
