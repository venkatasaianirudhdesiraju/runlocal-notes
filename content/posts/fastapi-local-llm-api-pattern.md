---
title: "Wrapping a Local LLM in a Clean FastAPI Service"
description: "When using a large language model (LLM) like Ollama, it's common to integrate it into other local tools or services. However, hitting the Ollama API directly..."
date: "2026-11-09"
tags: ["fastapi", "ollama", "architecture"]
draft: true
---

When using a large language model (LLM) like Ollama, it's common to integrate it into other local tools or services. However, hitting the Ollama API directly can be unreliable and slow, especially if you're making multiple requests to it. To improve the stability and performance of your integration, you can create a thin FastAPI service that wraps the Ollama API.

## The Problem with Hitting Ollama Directly

Ollama is a powerful language model, but it's not designed to be used as a direct API for other services. Its primary use case is as a standalone tool for generating text, which means it's not optimized for high-throughput requests or concurrent access. When you hit the Ollama API directly, you may experience delays, timeouts, or even rate limiting, especially if you're making multiple requests to it.

## A Simple FastAPI Wrapper

To create a stable and fast API for your other local tools, you can use FastAPI to create a thin wrapper around the Ollama API. This wrapper can cache results, handle concurrent requests, and provide a stable interface for your other tools to interact with.

Here's a basic example of what this wrapper might look like:
```python
from fastapi import FastAPI, Response
import requests
import json

app = FastAPI()

# Cache layer (in-memory for now)
cache = {}

@app.post("/generate")
async def generate_text(prompt: str):
    # Check if result is already cached
    if prompt in cache:
        return cache[prompt]

    # Hit Ollama API and cache result
    response = requests.post("https://ollama-api.com/generate", json={"prompt": prompt})
    result = response.json()
    cache[prompt] = result
    return result

@app.get("/health")
async def health():
    return Response(status_code=200)
```
This example uses a simple in-memory cache to store results, but you could replace this with a more robust caching solution (e.g. Redis) if needed.

## Benefits of the FastAPI Wrapper

By using a FastAPI wrapper around the Ollama API, you can improve the stability and performance of your integration in several ways:

* **Caching**: By caching results in memory (or a more robust cache solution), you can avoid hitting the Ollama API repeatedly for the same prompts.
* **Concurrent requests**: FastAPI can handle concurrent requests to your wrapper API, allowing you to scale your integration more easily.
* **Stable interface**: Your other local tools can interact with your wrapper API using a stable, well-documented interface, rather than relying on the Ollama API directly.

## Next Steps

To take this example further, you may want to consider:

* **Error handling**: Add error handling to your wrapper API to handle cases where the Ollama API is unavailable or returns an error.
* **Authentication**: If your Ollama API requires authentication, you'll need to integrate authentication into your wrapper API.
* **Scalability**: Consider using a more robust caching solution or distributed cache to handle high-throughput requests.

By following this pattern, you can create a stable and fast API for your local tools to interact with Ollama, improving the performance and reliability of your integration.