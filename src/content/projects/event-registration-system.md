---
title: "Event Registration & Payment System"
description: "Replaced paper-based retreat registration with a QR-code form, PayPal/Stripe payment integration, and automated confirmation and waiver workflows."
pubDate: 2023-06-01
draft: false
tags: ["Power Automate", "SharePoint", "PayPal", "Stripe", "Web Development"]
role: "Developer"
stack: ["Power Automate", "SharePoint", "PayPal", "Stripe"]
summary: "Replaced paper-based event registration with a QR-code form, payment processing, and automated confirmation flows — eliminating manual tracking for each event cycle."
---

## Overview

A community organization (Women's Spiritual Retreat) was running event registration on paper forms and spreadsheets. Staff collected registrations manually, chased payments by email, and sent confirmations by hand. The process required significant staff time per event and was error-prone at each step.

## What was built

A QR-code accessible, password-protected registration form connected to PayPal and Stripe for payment processing. On submission, Power Automate flows:

- Verify payment status before confirming registration
- Update the registration record in SharePoint
- Send automated waiver documents and confirmation emails to registrants

Staff went from manually tracking each registration to monitoring a live SharePoint list. The per-event administrative workload dropped significantly.

## Stack

Power Automate · SharePoint · PayPal · Stripe integration · Web Development
