# Kiran B. Thakkannavar | Portfolio

A responsive React portfolio built with Vite. Project details and resume content are maintained in `src/data/portfolioData.js`.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and preview a production build:

```sh
npm run build
npm run preview
```

## Add a profile photo

Place a portrait image at `public/profile.jpg`. The hero automatically displays it. Until that file exists, a designed initials placeholder is shown. Use a cropped portrait image with a 4:5 aspect ratio for the best fit.

## Add project links

Open `src/data/portfolioData.js` and set the relevant project's `github` or `demo` field to its real URL. Leave the value as `null` when a link is unavailable; the portfolio will not render a false or placeholder link.

## Deploy

- **Vercel:** Import the GitHub repository, use `npm run build` as the build command and `dist` as the output directory.
- **Netlify:** Import the repository, use `npm run build` and set the publish directory to `dist`.
- **GitHub Pages:** Set Vite's `base` option in `vite.config.js` to `/<repository-name>/`, build with `npm run build`, and publish the `dist` directory using GitHub Actions or a Pages deployment action.

The contact form is a frontend-only validation demo. It does not send messages; use the visible email link to contact Kiran.