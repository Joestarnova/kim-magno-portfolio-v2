# Kim Magno — Portfolio

React + TypeScript + Vite rebuild of the original static portfolio (see `original-html/kim-magno.html` for the source it was converted from).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/data.ts` — project, certification, and skill data.
- `src/components/` — page sections (hero, work carousel, skills, contact) and shared UI (tilt cards, modals, project tags).
- `src/hooks/` — theme toggle (with View Transitions circular reveal), nav scroll-spy.
- `src/lib/style.ts` — tiny inline-CSS-string → React style object helper.
