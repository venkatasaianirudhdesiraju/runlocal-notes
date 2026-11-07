---
title: "Building a Local AI Chat Widget for Your Own Website (No Cloud API)"
description: "How a streaming chat widget backed by a local Ollama model actually fits together — API route, system prompt, and streaming response."
date: "2026-11-05"
tags: ["ollama", "nextjs", "chat-widget"]
draft: false
---

A chat widget that answers questions about you — your work, your projects, your skills — doesn't
need a hosted model if the questions it needs to answer are narrow and the facts are known ahead
of time. Here's the actual shape of a working version.

## The pieces

1. **A system prompt built from real data.** Pull your facts (experience, projects, skills) from
   a single structured source and render them into a system prompt at request time. This keeps the
   model grounded and stops it from inventing employers or dates.
2. **A server-side API route.** The browser never talks to Ollama directly — it hits your own
   `/api/chat` route, which proxies to `http://127.0.0.1:11434/api/chat` server-side. This keeps
   the integration swappable later (you could point it at a hosted model without changing the
   client) and avoids exposing a local service to the public internet.
3. **A streaming response.** Ollama's API supports streaming tokens back as they're generated.
   Forwarding that stream to the browser via a `ReadableStream` makes the widget feel responsive
   instead of waiting on a full response.
4. **An online/offline status check.** Local models are only available when the host machine is
   running the service. A quick health-check endpoint lets the widget show "offline" gracefully
   instead of erroring, and point visitors to use the static contact info at the bottom of the page
   instead.

## Why this is worth doing over just embedding a hosted chat SDK

- No per-visitor API cost — a widget that gets linked around and gets traffic spikes doesn't turn
  into a bill.
- No conversation data goes to a third party — relevant if the widget is answering personal or
  business-sensitive questions.
- It's honest about its own limits: a narrow, grounded assistant that says "I don't have that
  detail" is more trustworthy than one that confidently guesses.

## The tradeoff to be upfront about

This only works while the host machine is on and the model service is running. For a personal
project or portfolio where "it's a nice feature when I'm demoing it live" is an acceptable
constraint, that's a fine tradeoff. For something that needs 24/7 uptime regardless of whose
machine it's running on, you'd either need a small always-on server running the same model, or a
hosted API as a fallback when the local one is unreachable.
