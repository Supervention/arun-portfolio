---
layout: Post
title: Palmbook
description: An AI palm reading app for iPhone, iPad and Android. Users scan their palm with the camera, and the app finds the major lines and explains them in the Western, Vedic or Chinese tradition, in English or Hindi.
date: '2026-09-26'
tags:
  - swiftui
  - kotlin
  - pytorch
  - computer vision
  - django
  - next-js
  - claude api
attributes:
  - label: Project Type
    value: Consumer app (own product)
  - label: Platforms
    value: iPhone, iPad, Android, web, admin panel
  - label: Status
    value: Built, preparing for launch
  - label: Role
    value: Founder & full stack developer
---

Palmbook turns a photo of your palm into a reading. The user scans their palm with the phone camera, and the app finds the major lines and explains them in the Western, Vedic or Chinese palmistry tradition, in English or Hindi. A free scan shows a preview, and Premium unlocks the full report.

Readings are for entertainment and self-reflection: the app never predicts health, lifespan or death.

---

### What I built

- Native apps for iPhone and iPad (SwiftUI) and Android (Kotlin with Jetpack Compose)
- A computer vision pipeline that finds palm lines, trained with PyTorch, segmentation models, OpenCV and MediaPipe, and exported to ONNX
- AI-written readings using the Claude API, grounded in a palmistry knowledge base
- A Django REST Framework API with Celery and Redis for background jobs
- The website and the admin panel in Next.js and React
- Accuracy testing against labelled palm images, and release checks before launch
