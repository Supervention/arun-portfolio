name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change to your default branch if needed

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18  # Change to the Node.js version you use

      - name: Install dependencies
        run: npm install

      - name: Build and Export
        run: npm run build && npm run export

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out  # This is the default output folder for `next export`

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4