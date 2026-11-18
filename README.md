# Portfolio - Arun Verma

## Getting started

Requires Node.js 26 (see `.nvmrc`; `nvm use` picks it up). Vercel reads the same
version from `engines` in `package.json`.

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

## Deployment

Deployed on Vercel from `main` as a Next.js project, with no extra build settings.
See `.env.example` for the environment variables the contact form and newsletter need.