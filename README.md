# jt2.co

Joe Tolerico's personal site. Layout and styles are shared with the
[sim2real](https://github.com/joetol2/sim2real) site (Vite, React, Tailwind).

## Pages

- `/` home: hero, career timeline, selected work, lab, recognition
- `/work` and `/work/:slug`: case studies
- `/lab`: the canvas pieces (`/lab/starfield`, `/lab/physics`, `/lab/blocks`, `/lab/swarm`) and older pages for review
- `/about`, `/contact`

Site copy lives in `src/data/content.ts`; canvas pieces are listed in
`src/data/projects.ts`. Robot frames in `public/media/` come from the sim2real
videos.

## Develop

```sh
npm install
npm run dev
npm run build
```

Pushes to `main` deploy to https://joetol2.github.io/jt2.co/ via
`.github/workflows/static.yml`. The site is built with `base: "/jt2.co/"`
(see `vite.config.ts`); `main` is the only branch.
