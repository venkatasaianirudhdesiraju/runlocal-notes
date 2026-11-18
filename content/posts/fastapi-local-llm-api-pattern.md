---
title: "Wrapping a Local LLM in a Clean FastAPI Service"
description: "Introduction"
date: "2026-11-18"
tags: ["fastapi", "ollama", "architecture"]
draft: true
---

## Introduction

When working with large language models (LLMs) like Ollama, it's often beneficial to have a stable and consistent interface for interacting with the model. However, Ollama's direct API may not always be the most convenient or reliable choice for local development workflows. In this post, we'll explore a simple pattern for wrapping a local LLM in a clean FastAPI service, making it easier to integrate with other local tools.

## Motivation

Using Ollama directly can be cumbersome, especially when working with multiple local tools. The model's API may be unstable, and changes to the underlying implementation can break existing integrations. By introducing a small FastAPI layer in front of Ollama, we can create a stable and consistent internal API that other local tools can rely on.

## Setting up the FastAPI Service

To get started, create a new FastAPI project using your preferred method. For this example, we'll assume you're using Poetry for dependency management and a basic `main.py` file.
```python
# main.py
from fastapi import FastAPI
from ollama import OllamaAPI

app = FastAPI()
ollama_api = OllamaAPI()

@app.get("/text/generate")
def generate_text(prompt: str):
    return ollama_api.generate_text(prompt)
```
This example defines a simple FastAPI service with a single endpoint for generating text. The `OllamaAPI` instance is used to interact with the underlying LLM.

## Implementing the Ollama Integration

In a real-world scenario, you'd want to handle errors, implement caching, and possibly add more endpoints to suit your needs. For now, let's keep it simple and focus on the basic integration.

## Registering the FastAPI Service

To make the FastAPI service accessible from other local tools, you'll need to expose it on a network interface. This can be done using a simple web server or a more robust reverse proxy. For this example, we'll use a basic `uvicorn` setup.
```bash
# install uvicorn and ollama using Poetry
poetry add uvicorn ollama

# start the FastAPI service
uvicorn main:app --host 0.0.0.0 --port 8000
```
This will start the FastAPI service on `http://localhost:8000`. Other local tools can now interact with the service using the exposed endpoints.

## Benefits and Future Improvements

By wrapping Ollama in a FastAPI service, you've created a stable and consistent internal API for local development workflows. This approach offers several benefits:

* **Stability**: Changes to the underlying LLM implementation won't break existing integrations.
* **Consistency**: Other local tools can rely on a predictable API for interacting with the model.
* **Scalability**: The FastAPI service can be easily scaled to handle increased traffic.

As you continue to develop your local tooling ecosystem, consider adding more features to the FastAPI service, such as:

* **Caching**: Implement caching mechanisms to improve performance and reduce the load on the underlying LLM.
* **Error handling**: Add robust error handling and logging to ensure reliable operation.
* **Additional endpoints**: Expose more endpoints to support specific use cases or features.

By following this simple pattern, you can create a stable and consistent internal API for interacting with large language models like Ollama, making it easier to integrate with other local tools and improve your development workflows.