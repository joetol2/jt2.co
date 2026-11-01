# jt2.co

Joe Tolerico's personal site. Layout and styles are shared with the
[sim2real](https://github.com/joetol2/sim2real) site (Vite, React, Tailwind).

## Pages

- `/` home: hero, proof bar, featured work, videos, lab, contact
- `/experience`: career of record by employer; prints as a resume
- `/work`: featured work, then a section per employer
- `/work/at/:employer`: employer hub with results, projects and roles
- `/work/:slug`: case studies; `/work/videos`: every Vimeo video
- `/lab`: research, interactive canvas pieces and prototypes
- `/about`, `/contact`

Roles and employers live in `src/data/experience.ts` (with claims held for confirmation in `held`); case study copy lives in `src/data/content.ts`; canvas pieces are listed in
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
