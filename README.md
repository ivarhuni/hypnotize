# Dáleiðsla Eyrúnar (Hypnotize)

A modern, warm, and cozy dark-themed website for a professional hypnotherapist, built with React, TypeScript, Vite, and Tailwind CSS. The site features sections for About Me, Services, About Hypnosis, and Booking, with support for Icelandic and English languages.

## Features
- Responsive, dark-themed design with a custom warm palette
- Multi-section layout: About Me, Services, About Hypnosis, Book
- Contact info (phone, email) visible in navigation
- Booking via Noona.is and contact form
- Language switcher (Icelandic/English) using i18next
- Framer Motion animations
- Deployed to GitHub Pages

## Project Structure
```
├── public/                # Static assets (if any)
├── src/
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── i18n.ts            # i18next configuration
│   ├── index.css          # Tailwind base styles
│   ├── assets/
│   │   └── images/
│   │       └── about.jpg  # About section image
│   └── types/
│       └── images.d.ts    # Image import types
├── index.html             # HTML template, Google Fonts
├── tailwind.config.js     # Tailwind CSS config (custom colors, fonts)
├── postcss.config.js      # PostCSS config
├── vite.config.ts         # Vite config (base path for GitHub Pages)
├── tsconfig.json          # TypeScript config
├── .eslintrc.json         # ESLint config
├── .prettierrc            # Prettier config
├── .gitignore             # Git ignore rules
├── package.json           # NPM scripts, dependencies
```

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/ivarhuni/hypnotize.git
   cd hypnotize
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Development
- **Start the development server:**
  ```sh
  npm run dev
  ```
  The app will be available at [http://localhost:5173](http://localhost:5173) by default.

- **Lint the code:**
  ```sh
  npm run lint
  ```

- **Format the code:**
  (Prettier is configured; use your editor or run Prettier manually.)

## Building for Production
- **Build the app:**
  ```sh
  npm run build
  ```
  The output will be in the `dist/` directory.

- **Preview the production build:**
  ```sh
  npm run preview
  ```

## Deployment (GitHub Pages)
This project is configured to deploy to GitHub Pages at [https://ivarhuni.github.io/hypnotize](https://ivarhuni.github.io/hypnotize).

1. **Commit and push your changes:**
   ```sh
   git add .
   git commit -m "Your message"
   git push
   ```
2. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```
   This will build the project and publish the `dist/` folder to the `gh-pages` branch.

## Tooling & Configuration
- **React** + **TypeScript** (Vite)
- **Tailwind CSS** (with custom palette, aspect-ratio & typography plugins)
- **Framer Motion** (animations)
- **i18next** (internationalization)
- **ESLint** & **Prettier** (code quality)
- **gh-pages** (deployment)
- **Google Fonts** (Montserrat, Playfair Display)

## License
MIT (or specify your license here) 
