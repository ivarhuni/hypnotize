# Project Context

## Repository Status
- Git repository is already initialized
- Repository has been pushed to GitHub
- Current branch: main

## Project Setup
- React + TypeScript project using Vite
- TailwindCSS for styling
- Framer Motion for animations
- i18next for internationalization (Icelandic and English)

## Recent Changes
- Migrated from custom language context to react-i18next
- Implemented dark theme with warm colors
- Added responsive design
- Added language switcher (Icelandic/English)

## Important Notes
- Do not reinitialize Git repository
- Do not create new GitHub repository
- Project is already connected to GitHub remote

## Dependencies
- react
- react-dom
- react-i18next
- i18next
- i18next-browser-languagedetector
- framer-motion
- tailwindcss
- @tailwindcss/aspect-ratio
- @tailwindcss/typography

## Development
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Deploy to GitHub Pages: `npm run deploy`

## Deployment
- The project is configured for GitHub Pages deployment
- Deployment URL: https://ivarhuni.github.io/hypnotize
- To deploy:
  1. Make your changes
  2. Commit and push to GitHub: `git push`
  3. Run `npm run deploy` to deploy to GitHub Pages
- The `deploy` script will:
  1. Build the project (`npm run build`)
  2. Deploy the `dist` directory to the `gh-pages` branch
  3. GitHub Pages will automatically serve the content from the `gh-pages` branch 