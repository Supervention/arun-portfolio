# Portfolio - Arun Verma
#
# Run `make` to start the dev server, or `make help` to list all targets.

NPM ?= npm

.DEFAULT_GOAL := dev

.PHONY: help install dev run build export start lint deploy clean distclean

help: ## Show this help
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install npm dependencies (always runs)
	$(NPM) install
	@touch node_modules

# Other targets depend on this, so they only install when dependencies change.
node_modules: package.json package-lock.json
	@$(MAKE) --no-print-directory install

dev: node_modules ## Start the dev server (default)
	$(NPM) run dev

run: dev ## Alias for dev

build: node_modules ## Production build
	$(NPM) run build

export: build ## Build and export the static site to out/
	$(NPM) run export

start: build ## Serve the production build
	$(NPM) run start

lint: node_modules ## Run ESLint
	$(NPM) run lint

deploy: export ## Build, export and deploy to Firebase Hosting
	firebase deploy

clean: ## Remove build output (.next, out)
	rm -rf .next out

distclean: clean ## Also remove node_modules
	rm -rf node_modules
