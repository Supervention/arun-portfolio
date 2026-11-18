---
layout: Post
title: SV Finance
description: A money and tax copilot for people in India. It reads bank statements, card statements, payslips and tax documents, reconciles them into one picture of your money, and keeps you ready for tax season.
date: '2026-08-30'
tags:
  - python
  - fastapi
  - postgresql
  - typescript
  - kotlin
attributes:
  - label: Project Type
    value: Fintech app (own product)
  - label: Platforms
    value: Web, Android
  - label: Status
    value: Early development
  - label: Role
    value: Founder & full stack developer
---

SV Finance helps residents of India understand their money each month and stay ready for tax season. It brings together bank and card statements, Account Aggregator data, payslips, salary certificates and tax statements, and turns overlapping sources into one checked set of facts.

---

### What I'm building

- A deterministic tax engine in pure Python, with the rules for each tax period
- A reconciliation core that matches, classifies and checks transactions from many sources
- Parsers for bank and card statements, Account Aggregator data, payslips, salary certificates, AIS, CAS and broker statements
- An API in FastAPI on PostgreSQL with row-level security, so each person only ever sees their own data
- Shared TypeScript packages and design tokens for the web apps and the Android app
- A synthetic data generator, so every test runs without real personal data
