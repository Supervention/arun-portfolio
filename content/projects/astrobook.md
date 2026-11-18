---
layout: Post
title: Astrobook
description: A Vedic astrology app for iPhone and Android, with a website and an admin panel in English and Hindi. Users get their Kundali, a daily horoscope, the Panchang, Kundali matching and an AI astrologer, and every statement names the chart fact behind it.
date: '2026-10-01'
tags:
  - swiftui
  - kotlin
  - next-js
  - django
  - celery
  - python
  - docker
attributes:
  - label: Project Type
    value: Consumer app (own product)
  - label: Platforms
    value: iPhone, Android, web, admin panel
  - label: Status
    value: In development
  - label: Role
    value: Founder & full stack developer
---

Astrobook is a Vedic astrology app for Indian adults. A person enters their birth details once and gets their Kundali, a reading that explains it, a daily horoscope, the Panchang, Kundali matching and an AI astrologer, in English or Hindi.

What sets it apart is proof on every line: each statement in a reading names the chart fact behind it, shows how sure that fact is when the birth time is only approximate, and keeps a record of whether the predicted days actually fitted.

---

### What I built

- A calculation engine in pure Python, using NASA JPL ephemeris data through Skyfield
- A Django REST Framework and Celery API for the apps, the website, webhooks and the admin panel
- The iPhone app in SwiftUI and the Android app in Kotlin with Jetpack Compose, both built from one OpenAPI contract
- The public website and the admin panel in Next.js, with review queues, content tools and AI cost tracking
- Shared design tokens so the apps, the website and the admin look the same
- Docker images, Caddy and deploy scripts, with CI checks on every change
