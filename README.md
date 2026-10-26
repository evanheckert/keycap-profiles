# Keycaps.info

Side-by-side comparison of mechanical keyboard keycap profiles, deployed at [www.keycaps.info](https://www.keycaps.info).

Built with React 19, TypeScript, Vite, TanStack Router, Tailwind CSS 4, jotai, and motion.

## Requirements

- Node.js 26 (see `.nvmrc`)
- pnpm 12 (pinned in `package.json` `packageManager`)

## Commands

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `pnpm install`  | Install dependencies                      |
| `pnpm dev`      | Start the Vite dev server                 |
| `pnpm build`    | Type-check, then build to `dist/`         |
| `pnpm preview`  | Serve the production build from `dist/`   |
| `pnpm check`    | Run Biome lint, format, and import checks |
| `pnpm lint`     | Run the Biome linter (warnings fail)      |
| `pnpm lint-fix` | Run the Biome linter and apply safe fixes |
| `pnpm format`   | Format files with Biome                   |
| `pnpm types`    | Type-check app code and `vite.config.ts`  |

## Routing

Routes are file-based under `src/routes/`. The TanStack Router Vite plugin regenerates `src/routeTree.gen.ts` on `pnpm dev` and `pnpm build`; commit that file so `tsc` works on a fresh clone.

## Deployment

Netlify builds with `pnpm build` and publishes `dist/` (see `netlify.toml`). `public/_redirects` provides the SPA fallback.
