# My Portfolio

Welcome to the source code for my personal portfolio site, built with **Next.js**, **Strapi**, **MDX**, and **Tailwind CSS**. The goal of this project is to showcase my work, blog posts, and provide a platform for dynamic, self-hosted content management.

## Current features to work on in no particular order

- [ ] **Static Site Generation (SSG) & ISR**: Fast, SEO-friendly pages with incremental updates.  
- [ ] **MDX Support**: Write posts in MDX and embed React components (e.g., `<Demo />`, `<Chart />`).  
- [ ] **Headless CMS**: Manage Posts, Tags, Projects, and Pages via Strapi admin UI.  
- [ ] **Responsive UI & Animations**: Tailwind CSS + Framer Motion for polished interactions.  
- [ ] **Tagging & Categories**: Organize content with a robust taxonomy.  
- [ ] **Self-Hosted Analytics**: Integrate Plausible or Umami for privacy-friendly metrics.  
- [ ] **SEO Enhancements**: Meta tags, sitemap generation, JSON-LD structured data.  
- [ ] **Dockerized Deployment**: Next.js, Strapi, PostgreSQL containers + Traefik reverse proxy + Let’s Encrypt.  
- [ ] **CI/CD Pipeline**: GitHub Actions (build & push Docker images → auto-deploy on VPS).  
- [ ] **Live Demo Embeds**: Iframes or MDX-embedded demos to showcase interactive projects.  
- [ ] **Media Optimization**: Efficient image handling via Next.js/Image and CMS media library.

## Current Idea for the Tech Stack

- **Frontend**  
  - Next.js 14+ (App Router)  
  - React + MDX (via `@next/mdx` or `next-mdx-remote`)  
- **Styling & UI**  
  - Tailwind CSS  
  - Framer Motion (animations)  
- **CMS & Content**  
  - Strapi v4 (self-hosted)  
  - PostgreSQL database  
  - MDX/Markdown body fields for Posts and Pages  
- **Deployment**  
  - Docker Compose on VPS (Ubuntu)  
  - Traefik for SSL, routing, and reverse proxy  
  - PostgreSQL container with persistent volume  
- **Analytics & SEO**  
  - Plausible or Umami (self-hosted)  
  - `next-seo`, `next-sitemap`, `robots.txt`  
  - JSON-LD for Person and BlogPosting  
- **CI/CD**  
  - GitHub Actions → build & push images → SSH & `docker-compose up -d`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)  
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [Docker](https://docker.com/) & [Docker Compose](https://docs.docker.com/compose/)  
- [Git](https://git-scm.com/)  
- A Linux VPS (Ubuntu recommended) with SSH access  

### Installation
