# jt2.co

Portfolio site featuring interactive canvas pieces. Layout and styles are shared
with the [sim2real](https://github.com/joetol2/sim2real) site (Vite, React, Tailwind).

## Pages

- `/` home: starfield hero and selected work
- `/work`: all projects
- `/work/starfield`, `/work/physics`, `/work/blocks`, `/work/swarm`: the canvas pieces
- `/about`, `/contact`

Projects are listed in `src/data/projects.ts`; card screenshots live in `public/work/`.

## Develop

```sh
npm install
npm run dev
npm run build
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/static.yml`.
`public/CNAME` points the site at jt2.co.
