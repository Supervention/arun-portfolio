---
layout: Post
title: Tessera and Reveles Tech
description: A multi-tenant SaaS platform for EcorRouge covering insurance policies and claims, agent performance, ClickHouse analytics dashboards and an AI research platform, plus a document pipeline that extracts filing data from PDFs with local language models.
date: '2025-06-05'
tags:
  - flask
  - vue 3
  - clickhouse
  - langgraph
  - ollama
  - rabbitmq
  - docker
attributes:
  - label: Project Type
    value: SaaS platform (client work)
  - label: Client
    value: EcorRouge
  - label: Status
    value: Ongoing
  - label: Role
    value: Full stack developer
---

Tessera is EcorRouge's multi-tenant platform for organisations in insurance. It covers sign-up and roles, policies and claims, agent performance, business intelligence dashboards and an AI-powered research platform. Reveles Tech Services (RTS) is the back-end service layer that connects Tessera to document processing.

I've worked on both the back end and the front end since mid-2025.

---

### What I built

- Flask REST APIs on PostgreSQL with JWT sign-in, organisations and role-based access
- Policy, claims and agent management, and KPI dashboards served from ClickHouse
- AI research features built with LangChain and LangGraph
- Email and background work through RabbitMQ message queues
- The Tessera web app in Vue 3, Quasar and Pinia, with Auth0 sign-in
- A filing processor that reads PDFs with Docling and an Ollama language model, recovers broken tables and returns structured data to RTS
- Docker set-ups for every service, with automated tests
