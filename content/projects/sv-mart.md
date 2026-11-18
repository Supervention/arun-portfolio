---
layout: Post
title: SV Mart
description: An India-first multi-vendor marketplace with a buyer website, a seller panel and an admin panel on one Go back end, covering seller onboarding, catalogue, search, checkout, shipping, returns and refunds.
date: '2026-10-01'
tags:
  - go
  - next-js
  - react
  - postgresql
  - typesense
  - docker
attributes:
  - label: Project Type
    value: E-commerce marketplace (own product)
  - label: Platforms
    value: Buyer website, seller panel, admin panel
  - label: Status
    value: In development
  - label: Role
    value: Founder & full stack developer
---

SV Mart is a multi-vendor marketplace built for India. Sellers sign up with their GST and bank details, list products, pack orders and book couriers. Buyers search, check out, track and return orders, with refunds handled automatically.

---

### What I built

- A Go API built against an OpenAPI contract, with a double-entry ledger for payments, commissions, GST and refunds
- Sign-in with a one-time code sent to an Indian mobile number, with secure sessions
- Seller onboarding with GSTIN and PAN checks, listings with the details the law requires, and stock per size that never oversells
- Typo-tolerant search on Typesense that understands Hinglish spellings, with filters and counts
- Checkout with stock held for 15 minutes, courier booking and labels, signed courier webhooks, cancellations and returns
- The buyer website, the seller panel and the admin panel in Next.js 16 and React 19
