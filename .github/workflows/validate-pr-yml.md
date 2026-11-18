name: Validate Pull Request

on:
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc

      - name: Install dependencies
        run: npm install

      - name: Run lint
        run: npm run lint

      - name: Build and Export
        run: npm run build && npm run export