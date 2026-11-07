---
title: "Running Llama 3.1 Locally with Ollama: A Practical Setup Guide"
description: "How to install Ollama, pull Llama 3.1, and get a usable local chat model running on a normal desktop — no GPU cluster required."
date: "2026-11-07"
tags: ["ollama", "local-llm", "setup"]
draft: false
---

Most "run an LLM locally" guides assume you have a workstation GPU sitting around. You don't need
one to get something genuinely useful running — an 8B model on a normal desktop CPU/GPU combo is
enough for chat, drafting, and simple agents.

## 1. Install Ollama

Ollama packages the model runtime, weight downloads, and a local API server into one binary.
Grab it from [ollama.com](https://ollama.com) and install it — on Windows that's a normal `.exe`
installer, on macOS a `.dmg`, on Linux a one-line curl script.

Once installed, it runs as a background service on `http://127.0.0.1:11434`. Nothing leaves your
machine — there's no account, no API key, no network call.

## 2. Pull a model

```bash
ollama pull llama3.1:8b
```

The 8B variant is the sweet spot for a normal desktop: usable response quality, and it fits
comfortably in 16GB of RAM even without a dedicated GPU (it's slower on CPU-only, but workable).
If you have 12GB+ of VRAM, the same pull will run noticeably faster on GPU automatically.

## 3. Talk to it

```bash
ollama run llama3.1:8b
```

That drops you into an interactive prompt. For anything programmatic, Ollama also exposes a REST
API:

```bash
curl http://127.0.0.1:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{ "role": "user", "content": "Explain token buckets in one paragraph." }],
  "stream": false
}'
```

That's the entire integration surface. Any app that can make an HTTP request can use the model —
which is exactly how a website chat widget running on local Llama works: a Next.js API route
proxies to that same `/api/chat` endpoint, server-side, so the browser never talks to Ollama
directly.

## 4. What this is actually good for

- Drafting and rewriting text where you don't want content leaving your machine
- A chat assistant grounded on your own structured data (a resume, a knowledge base, project docs)
- Prototyping agent behavior before deciding whether a hosted model is worth paying for
- Offline development — no API outages, no rate limits, no per-token billing

## What it's not good for (yet)

An 8B local model is not GPT-4-class. It's noticeably weaker at multi-step reasoning, long-context
recall, and anything requiring broad world knowledge. Treat it as a fast, free, private assistant
for narrow, well-scoped tasks — not a drop-in replacement for a frontier hosted model.

## Keeping it running

On Windows/macOS, Ollama installs as a background service and starts on login. On Linux, enable
the systemd unit it ships with. Either way, `ollama serve` is the manual fallback if you ever need
to start it by hand.
