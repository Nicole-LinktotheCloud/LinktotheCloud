---
title: "Automated Intelligent Document Processing System"
description: "Custom Power Platform AP + PM system with AI Builder document intelligence, pipeline-deployed via Azure DevOps — then rebuilt as an open-source autonomous agent POC."
pubDate: 2026-05-01
draft: false
tags: ["Power Platform", "AI Builder", "Azure DevOps", "Power Automate", "Dataverse", "OpenClaw"]
role: "Project Owner, Developer, Solution Architect"
stack: ["Power Apps", "Power Automate", "AI Builder", "SharePoint", "Dataverse", "Azure DevOps", "OpenClaw", "Twenty CRM", "Docker"]
summary: "A fully automated AP and PM system for a construction contractor — AI document extraction, quote-to-invoice workflow, and CI/CD pipeline deployment. Then rebuilt open-source as an autonomous agent POC to prove the same workflow on contractor-owned infrastructure."
---

## Part A — The Power Platform System

A construction contractor was using off-the-shelf AP software that created more manual work than it eliminated. Quote-to-PO-to-invoice processing lived across disconnected tools. Data had to be re-entered at every step. Errors compounded.

The objective: consolidate accounts payable and project management into a single, automated environment — built for their specific workflows, not adapted from a generic template.

### What was built

**Document intelligence layer**

Four AI Builder processors trained on the client's actual document formats: receipts, vendor quotes, vendor invoices, and a custom document type. Each model handles field extraction automatically on upload. No manual data entry at intake.

**Quote → Purchase Order workflow**

A custom command-bar command on the Quote record generates the PO in one action. The resulting PO includes tax configuration, vendor details, GL cost codes, equipment codes, calculated totals, and an editable line-item grid. No re-keying.

**Invoice processing and approval**

Invoices auto-populate by cross-referencing the associated PO. Approval workflows trigger based on invoice total thresholds. Line-item discounts recalculate in real time as amounts change.

**Accounting export**

A Power Automate flow consolidates approved invoices into a structured Excel file for upload to the accounting system. This was the highest-value elimination point — AP staff had been doing this by hand for every invoice cycle.

**Project management app**

A companion model-driven app tracks projects, cost codes, vendors, PO line items, equipment, employee hours, and tickets. Cost codes integrate with Heavy Job (the client's field operations platform) via a custom connector built from scratch against the Heavy Job API.

**ALM and deployment**

The entire solution is source-controlled in Azure DevOps and deployed via CI/CD pipeline — not manually exported and imported between environments. Proper solution lifecycle management, not an afterthought.

### Stack

Power Apps (model-driven + canvas) · Power Automate · AI Builder · SharePoint · Dataverse · Azure DevOps

---

## Part B — The Open-Source Rebuild (POC)

After delivering the Power Platform system, a question remained: what if the client wants to own their infrastructure — not rent it?

The goal of the POC was to validate that the same core workflow (scan document → extract data → write to a business system) could run entirely on contractor-owned, self-hostable infrastructure.

### What was proved

An OpenClaw agent reads a scanned vendor invoice PDF using vision. It extracts: vendor name, invoice number, date, amount due, PO reference, and bill-to address.

The agent then queries a self-hosted Twenty CRM instance (running in Docker) for match context and writes a new invoice record. On the first attempt, the write failed — the status value didn't match Twenty's expected enum. Rather than failing silently, the agent queried the CRM's metadata endpoint for valid status options, selected the correct value, and retried successfully.

End-to-end: scanned PDF → structured CRM record, in a single unassisted run.

Model: Claude Haiku 4.5 (cost efficiency priority).

### Target production stack

Twenty CRM · OpenClaw · n8n · Postgres — all containerized and client-operated.

### What this is and isn't

This is a tested proof-of-concept. It ran in a controlled environment against a self-hosted CRM with synthetic invoice data.

A production deployment requires human-in-the-loop review before record writes, least-privilege CRM credentials, and audit logging on all agent actions. These are implementation decisions, not technical blockers. The core workflow is validated.

### Source code

[contractor-ops-twin-](https://github.com/Nicole-LinktotheCloud/contractor-ops-twin-) — OpenClaw + Twenty CRM integration, sanitized with synthetic invoice data.

---

## The arc

Built it on Microsoft. Then rebuilt it open-source so the contractor owns their data, their infrastructure, and their independence from any single vendor — including me.
