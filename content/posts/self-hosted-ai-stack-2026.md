---
title: "A Minimal Self-Hosted AI Stack: What You Actually Need"
description: "When it comes to self-hosting AI tooling, it's easy to get swept up in the hype and complexity of various frameworks and architectures. However, for many use..."
date: "2026-11-08"
tags: ["self-hosted", "architecture"]
draft: true
---

When it comes to self-hosting AI tooling, it's easy to get swept up in the hype and complexity of various frameworks and architectures. However, for many use cases, a minimal approach can be more than sufficient. In this post, we'll outline the absolute bare minimum you need to get started with self-hosting AI tooling.

## The Model Runner

At the heart of any AI application is the model itself. This is the core of the system, where the actual computation is performed. For a self-hosted AI stack, you'll need a model runner that can execute your AI models in a way that's both efficient and scalable.

Popular model runners include [TensorFlow Serving](https://www.tensorflow.org/serving), [Model Server](https://github.com/vmware/model-server), and [Seldon Core](https://seldon.io/). These tools provide a lightweight way to serve your models over a network, making it easy to integrate them with other applications.

## A Thin API Layer

While the model runner takes care of executing the model, you'll also need a way to interact with it from your applications. This is where a thin API layer comes in. An API layer provides a simple, standardized interface for clients to interact with your AI models.

You can use a library like [FastAPI](https://fastapi.tiangolo.com/) or [Express](https://expressjs.com/) to create a lightweight API that sits in front of your model runner. This API can handle tasks like model selection, input validation, and result formatting.

## A UI (Optional)

For many use cases, a simple command-line interface (CLI) is enough to interact with your AI models. However, if you need a more user-friendly interface, you can use a web framework like [React](https://reactjs.org/) or [Angular](https://angular.io/) to build a UI that wraps your API layer.

Keep in mind that a UI is not strictly necessary for a self-hosted AI stack. In fact, many AI tooling use cases, such as image classification or natural language processing, can be handled entirely through a CLI or API.

## What You Don't Need

When it comes to self-hosting AI tooling, it's easy to get caught up in the complexity of various frameworks and architectures. However, for many use cases, a minimal approach can be more than sufficient.

Here are a few things you probably don't need:

* A full-featured GUI with drag-and-drop interfaces and fancy visualizations. These are often overkill for most AI tooling use cases.
* A built-in data storage system. Instead, use an existing database or storage solution, like MySQL or S3.
* A complex workflow management system. Instead, use a simple job scheduler like [Cron](https://en.wikipedia.org/wiki/Cron).

## Conclusion

Building a self-hosted AI stack doesn't have to be complicated. By focusing on the bare minimum – a model runner, a thin API layer, and a UI (if needed) – you can get started with self-hosting AI tooling quickly and easily.

Remember, the goal of self-hosting AI tooling is to have control over your data and workflows. By keeping things simple, you can ensure that your AI stack is both efficient and scalable.