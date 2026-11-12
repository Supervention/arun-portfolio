# Portfolio - Arun Verma

## Getting started

```bash
npm install
npm run dev
```

Or with `make` (installs dependencies automatically when needed):

```bash
make          # start the dev server (same as `make dev`)
make help     # list all targets
```

## Build for production

```bash
npm run build
# or
make build
```

## Firebase deployment

```bash
npm install -g firebase-tools
firebase login
firebase init
```

Follow these steps:
- Select "Hosting" (use spacebar to select).
- Choose "Use an existing project" or create a new Firebase project.
- Set the public directory to out/ (since next export generates static files in out).
- Select "No" for single-page app (since it's a static site).
- Skip automatic deploy (optional).

```bash
npm run build && npm run export
firebase deploy
```

```bash
# To logout
firebase logout
```