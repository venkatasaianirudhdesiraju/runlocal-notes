---
title: "A Minimal Self-Hosted AI Stack: What You Actually Need"
description: "When it comes to building self-hosted AI tooling, it's easy to get caught up in the idea that you need a complex, multi-component architecture. But in realit..."
date: "2026-11-10"
tags: ["self-hosted", "architecture"]
draft: true
---

When it comes to building self-hosted AI tooling, it's easy to get caught up in the idea that you need a complex, multi-component architecture. But in reality, you can get started with a remarkably simple setup that still provides a lot of value.

## The Bare Minimum

To get started with self-hosting AI tooling, you'll need three main components:

*   A model runner: This is the piece that loads and executes your AI model. It can be as simple as a containerized executable that loads a model and makes predictions.
*   A thin API layer: This provides a simple interface for your users to interact with the model runner. It can be a single endpoint that accepts input, runs it through the model, and returns the result.
*   A UI: This is the interface that your users will interact with to get the results of the model. It can be as simple as a static HTML page with a form that submits to your API.

That's it. With these three components, you can get started with self-hosting AI tooling.

## Model Runner

The model runner is the heart of your self-hosted AI stack. It's the piece that loads and executes your AI model. This can be as simple as a containerized executable that loads a model and makes predictions.

Some options for model runners include:

*   **TensorFlow Serving**: A containerized model runner that supports TensorFlow models.
*   **Gradio**: A simple model runner that supports loading models and making predictions.
*   **A custom executable**: You can write a custom executable in a language like Python or C++ that loads your model and makes predictions.

## Thin API Layer

The thin API layer provides a simple interface for your users to interact with the model runner. It can be a single endpoint that accepts input, runs it through the model, and returns the result.

Some options for thin API layers include:

*   **Flask**: A lightweight web framework that makes it easy to build a simple API.
*   **Express**: A lightweight web framework that makes it easy to build a simple API.
*   **A custom API**: You can write a custom API using a language like Python or Node.js.

## UI

The UI is the interface that your users will interact with to get the results of the model. It can be as simple as a static HTML page with a form that submits to your API.

Some options for UIs include:

*   **Static HTML**: You can write a static HTML page that submits to your API.
*   **Single-page app**: You can write a single-page app using a framework like React or Angular.
*   **Custom UI**: You can write a custom UI using a language like JavaScript or HTML/CSS.

## Example Use Case

Let's say you're building a self-hosted AI tool that uses a TensorFlow model to perform image classification. You can use TensorFlow Serving as your model runner, Flask as your thin API layer, and a static HTML page as your UI.

Here's an example of what this might look like:

*   Your user submits an image to your static HTML page.
*   The page sends a request to your Flask API endpoint.
*   Your Flask API endpoint calls your TensorFlow Serving model runner with the image.
*   The model runner makes a prediction and returns the result to your Flask API endpoint.
*   Your Flask API endpoint returns the result to your user.

This is a remarkably simple setup, but it still provides a lot of value. With this setup, you can get started with self-hosting AI tooling and start providing value to your users.

## Conclusion

When it comes to building self-hosted AI tooling, it's easy to get caught up in the idea that you need a complex, multi-component architecture. But in reality, you can get started with a remarkably simple setup that still provides a lot of value.

By using a model runner, a thin API layer, and a UI, you can build a self-hosted AI stack that is both powerful and simple. Don't be afraid to start small and build up from there. With a little bit of effort, you can get started with self-hosting AI tooling and start providing value to your users.