# Jhon Paul Villasanta's Portfolio

**Live:** https://villasantas-portfolio-in-vercel.vercel.app/

A modern, fully responsive portfolio website showcasing my full-stack development work across frontend and backend technologies. Built with React, Vite, and deployed on Vercel.

## Features

- **Scroll reveal animations** — Smooth fade-in effects as sections come into view
- **Accessible design** — Semantic HTML, ARIA labels, keyboard navigation, skip links
- **Mobile-first responsive** — Optimized for mobile, tablet, and desktop screens
- **Dark mode theme** — Purple accents with a polished dark interface
- **Live demo links** — Direct access to deployed projects
- **Fast & lightweight** — Vite for instant HMR and optimized builds

## Sections

- **Hero** — Animated introduction with tagline and quick links
- **Profile** — Photo and brief bio
- **Education** — Academic background with timeline
- **About** — Context on my journey and interests
- **Projects** — Featured work with roles, contributions, and tech stacks
- **Skills** — Frontend, backend, programming languages, and tools
- **Contact** — Email options and call-to-action

## Tech Stack

**Frontend:** React 19, Vite, CSS Grid/Flexbox  
**Styling:** Custom CSS with CSS variables for theming  
**Tools:** ESLint, npm, Git  
**Deployment:** Vercel (auto-deploys from GitHub main branch)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to view the site with hot module replacement (HMR).

### Build for Production

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── data/             # Portfolio data (projects, skills)
├── hooks/            # Custom hooks (useScrollReveal)
├── assets/           # Images and media
└── App.jsx          # Main app component
```
