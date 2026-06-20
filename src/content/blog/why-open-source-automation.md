---
title: "Why I'm Rebuilding Client Systems on Open-Source Infrastructure"
description: "The case for self-hosted, contractor-owned automation stacks — and what I learned building the same AP system twice."
pubDate: 2026-06-20
draft: false
tags: ["open-source", "automation", "AI agents", "vendor lock-in"]
---

Every Power Automate flow I've built for a client works until it doesn't. A connector stops responding. A license tier changes. Microsoft restructures a feature or adjusts pricing. The client calls. I fix it. The dependency persists.

This isn't a Microsoft-specific problem. It's the baseline cost of building on any vendor-hosted platform — and one that small businesses often don't fully account for until they're absorbing it.

## The structural issue

When you build on Power Platform, your data lives in Dataverse (which Microsoft hosts), your automations run in Power Automate (which Microsoft operates), and your AI models train in AI Builder (which Microsoft prices). For large enterprises with IT departments and long-term Microsoft agreements, this tradeoff is manageable. For a small contractor or independent operator, it creates dependencies that look invisible until they're not.

The deeper problem: the client ends up dependent on the platform, the pricing model, and often the consultant who knows how to navigate it. Three points of failure they're paying to maintain.

The principle I've started designing around: a client should be able to fire me on a Thursday and have everything still running on Friday. That means the infrastructure needs to belong to them.

## What this looks like in practice

The AP automation system I built for a construction contractor runs on Power Platform — Power Apps, Power Automate, AI Builder, Dataverse, deployed via Azure DevOps CI/CD. It works well. The AI Builder models are trained on their actual document formats. The workflows match their specific cost codes and vendor relationships. The deployment is pipeline-managed, not manually pushed.

But their data lives in Microsoft Dataverse. Their flows depend on Microsoft's connector ecosystem. The AI models are in AI Builder. If any of those change in ways that break the solution, they're calling me.

The proof-of-concept I built tests a different architecture: the same core workflow — scan invoice, extract fields, write to a business system — running on infrastructure the contractor controls.

The stack: Twenty CRM in Docker, OpenClaw as the agent layer running on Claude Haiku 4.5 for cost efficiency, n8n for orchestration, Postgres as the database. All self-hosted. All open-source.

The POC result: an OpenClaw agent read a scanned vendor invoice PDF, extracted the key fields, hit a schema mismatch when writing to the CRM, queried the CRM's own metadata endpoint for valid field values, and retried successfully — without any human intervention.

It's a proof-of-concept. A production deployment needs human-in-the-loop approval before any record writes, proper credential scoping to a least-privilege service account, and audit logging on every agent action. Those are implementation decisions, not technical blockers. The core workflow is validated.

## What I'm not saying

This is not an argument against Microsoft. Power Platform is effective at what it does. Azure DevOps is still where I'd put CI/CD for a Microsoft-stack client. The Dataverse data model is genuinely well-designed for relational business data.

The point isn't to avoid specific vendors. It's to be deliberate about which dependencies clients are taking on — and to design systems where the client owns the pieces that matter: their data, their infrastructure, and their operational continuity after the engagement ends.

Some clients want full ownership. Some want Microsoft to manage the infrastructure and are comfortable with that tradeoff. Both are reasonable choices. The difference is making it a deliberate decision rather than a default one.

## Where this is going

The target stack for open-source business automation: Twenty CRM + OpenClaw + n8n + Postgres. All containerized. All self-hostable. All open-source.

The goal isn't to replace every enterprise tool with a self-hosted alternative. It's to give clients who want ownership a credible path to it — with automation that's as capable as what they'd get from a vendor-locked solution.

That's what I'm building toward.
