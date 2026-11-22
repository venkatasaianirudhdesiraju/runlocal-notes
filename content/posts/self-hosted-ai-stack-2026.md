---
title: "A Minimal Self-Hosted AI Stack: What You Actually Need"
description: "When it comes to self-hosting AI tooling, the temptation is often to build out a complex, multi-component stack that includes everything from model serving t..."
date: "2026-11-22"
tags: ["self-hosted", "architecture"]
draft: true
---

When it comes to self-hosting AI tooling, the temptation is often to build out a complex, multi-component stack that includes everything from model serving to data storage to UI frameworks. However, for many use cases, this can be overkill. In this post, we'll outline a minimal self-hosted AI stack that can get you up and running quickly, while still providing the flexibility and customization you need.

## The Bare Minimum

To host AI tooling, you'll need at least three components:

1. **Model runner**: This is the component that loads and executes your machine learning models. You can use a library like TensorFlow or PyTorch to create a model runner that can serve predictions from your models.
2. **API layer**: This is a thin layer that exposes your model runner to the outside world, handling tasks like request routing, authentication, and error handling. You can use a library like Flask or Express to create a simple API layer.
3. **UI**: This is the user interface component, which can be as simple as a single-page app or as complex as a full-fledged web application. You can use a library like React or Angular to create a UI that interacts with your API layer.

## Why This is Enough

While it's tempting to add more components to your stack, such as a database, message broker, or caching layer, for many use cases, these components are not necessary. By keeping your stack minimal, you'll be able to:

* Reduce complexity: Fewer components means fewer things that can go wrong.
* Improve performance: Less overhead means faster request processing times.
* Lower costs: Fewer components means lower hardware and maintenance costs.

## A Real-World Example

Let's say you want to host a simple text classification tool that takes in text input and returns a predicted category. Here's a minimal self-hosted AI stack that can get you up and running:

* Model runner: Use TensorFlow to create a simple text classification model that loads and executes predictions.
* API layer: Use Flask to create a simple API that exposes the model runner to the outside world. Clients can send text input to the API, which returns the predicted category.
* UI: Use a simple web app like Next.js to create a single-page app that interacts with the API layer. Clients can input text, click a button, and receive the predicted category.

## What About Data Storage and Other Components?

While the above stack is minimal, you may still need to add components like data storage (e.g., a database) or other features (e.g., authentication, authorization). However, these components can be added incrementally, without needing to overhaul your entire stack.

For example, you can start by using a simple in-memory data store for your model runner, and then later add a database to persist model weights and other data. Similarly, you can add authentication and authorization components using libraries like OAuth or JWT.

## Conclusion

Self-hosting AI tooling doesn't need to be complicated. By keeping your stack minimal, you can reduce complexity, improve performance, and lower costs. By using a simple model runner, API layer, and UI, you can get up and running quickly, and then incrementally add components as needed. Remember, less is often more when it comes to self-hosting AI tooling.