---
layout: Post
title: SV Trading
description: A research and trading platform for the Indian stock market, with live market data, screeners and discovery, alerts, portfolios, backtests and order tracking, across a customer app and an admin app.
date: '2026-02-22'
tags:
  - next-js
  - react
  - django
  - timescaledb
  - redis
  - celery
  - websockets
attributes:
  - label: Project Type
    value: Fintech platform (own product)
  - label: Platforms
    value: Web app, admin panel
  - label: Status
    value: In development
  - label: Role
    value: Founder & full stack developer
---

SV Trading is a research and trading platform for the Indian market. It brings together market data, stock discovery, signals, alerts, portfolios, backtests and the order lifecycle, with broker and data provider integrations.

---

### What I built

- A Django REST Framework back end with Channels for live updates over WebSockets and Celery for scheduled jobs
- Market data stored as OHLCV time series in PostgreSQL with TimescaleDB, cached in Redis
- Two Next.js 16 and React 19 apps: one for customers and one for administrators
- Shared packages for the UI, the app shell, charts and the theme, reused by both apps
- Broker and market data provider integrations, with clear separation between paper and live trading
- Accounts, billing and administration
