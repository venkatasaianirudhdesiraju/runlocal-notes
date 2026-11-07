---
title: "A Minimal Self-Hosted AI Stack: What You Actually Need"
description: "What You Need to Self-Host AI Tooling"
date: "2026-11-07"
tags: ["self-hosted", "architecture"]
draft: true
---

## What You Need to Self-Host AI Tooling

Self-hosting AI tooling can seem daunting, especially when looking at large-scale deployments. However, for a basic setup, you don't need an army of developers or a complex infrastructure. In this post, we'll outline the minimal components required to get started.

## Model Runner: The Core Component

The model runner is the heart of any AI-powered application. It's responsible for loading, serving, and updating the AI models. Popular choices for model runners include [Weights & Biases](https://www.wandb.com/) and [OptimML](https://www.optimml.com/). These tools provide a simple interface for serving models and can handle tasks such as model versioning and serving.

When choosing a model runner, consider the following:

* **Model formats**: Ensure the model runner supports the format of your models (e.g., ONNX, TensorFlow, PyTorch).
* **Scalability**: Choose a model runner that can handle the expected load and scale with your application.
* **Customizability**: Opt for a model runner that allows for custom scripts and hooks to integrate with your specific use case.

## Thin API Layer: Expose Your Model to the World

Once you have a model runner in place, you'll need a way to expose it to the outside world. A thin API layer provides a simple interface for clients to interact with your model. This layer can be built using a framework like Flask or Django, or a dedicated API gateway like [NGINX](https://www.nginx.com/).

When designing your API layer, keep the following in mind:

* **API endpoints**: Define clear, well-documented endpoints for model serving, model updates, and other required interactions.
* **Security**: Implement authentication and authorization mechanisms to control access to your model.
* **Monitoring**: Set up logging and monitoring tools to ensure the health and performance of your API layer.

## UI: A Simple Interface for Users

The UI is the final piece of the puzzle. It provides a simple interface for users to interact with your AI-powered application. This can be a basic web application built using a framework like [React](https://reactjs.org/) or [Angular](https://angular.io/), or a more complex desktop application.

When designing your UI, focus on the following:

* **User experience**: Prioritize a clean, intuitive design that makes it easy for users to interact with your model.
* **Customizability**: Allow users to configure the UI to their needs, such as adjusting model inputs or output formats.
* **Feedback**: Provide clear feedback to users about the status of their requests and any errors that may occur.

## What You Don't Need

When building a self-hosted AI stack, it's easy to get caught up in over-engineering. Don't fall into the trap of adding unnecessary complexity. Focus on the core components and keep the following out of your setup:

* **Complex data stores**: Avoid using complex data stores like relational databases or graph databases unless absolutely necessary.
* **Overly sophisticated monitoring**: Stick to simple logging and monitoring tools, and avoid over-engineering your monitoring setup.
* **Unnecessary integrations**: Only integrate with services or frameworks that provide clear value to your application.

In conclusion, building a self-hosted AI stack requires a focus on simplicity and minimalism. By following the outlined components and avoiding unnecessary complexity, you can create a robust and scalable application that meets your needs.