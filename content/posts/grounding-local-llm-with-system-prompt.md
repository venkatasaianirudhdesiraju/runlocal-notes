---
title: "Grounding a Local LLM So It Stops Making Things Up"
description: "When working with a small local language model, one of the biggest challenges is keeping it from making things up. This is particularly important for tasks w..."
date: "2026-11-21"
tags: ["prompting", "local-llm"]
draft: true
---

When working with a small local language model, one of the biggest challenges is keeping it from making things up. This is particularly important for tasks where accuracy is crucial, such as summarizing complex data or generating text for official communications.

## Structured System Prompts from Real Data

One effective way to keep a local LLM grounded in reality is to use structured system prompts built from real data. This involves using the model to perform tasks that involve querying or manipulating actual data, rather than generating entirely new content.

For example, let's say we're using a local LLM to generate summaries of financial reports. Instead of simply asking the model to "summarize this report," we would use a prompt like: "Extract the key financial metrics from this report and present them in a table format."

This approach has several benefits. First, it keeps the model focused on working with actual data, rather than trying to create something entirely new. Second, it gives the model a clear set of instructions to follow, reducing the likelihood of it making things up.

## "Say You Don't Know" Instructions

Another technique for keeping a local LLM grounded is to use explicit "say you don't know" instructions. This involves setting up the model to clearly indicate when it's unsure or lacks sufficient information to provide an answer.

For example, if we're using the local LLM to answer technical questions, we might set up a prompt like: "If you're not sure of the answer to this question, please say 'I'm not sure' and don't attempt to make something up."

This approach can help prevent the model from generating incorrect or misleading information, and can also provide valuable feedback to the user about the limits of the model's knowledge.

## Keeping Scope Narrow

Finally, one of the most effective ways to keep a local LLM grounded is to keep its scope narrow. This involves limiting the model's focus to a specific domain or task, rather than trying to have it generalize to a wide range of topics.

For example, if we're using a local LLM to generate text for a specific industry, we might limit its scope to that industry alone. This can help the model develop a deeper understanding of the specific terminology, concepts, and data relevant to that industry, and reduce the likelihood of it making things up.

## Conclusion

Keeping a local LLM grounded in reality can be a challenge, but it's essential for many applications. By using structured system prompts built from real data, explicit "say you don't know" instructions, and keeping scope narrow, we can help prevent the model from making things up and ensure that it provides accurate and reliable results.

In practice, this means being intentional about how we design and use our local LLMs, and taking a thoughtful approach to how we prompt and guide them. By doing so, we can unlock the full potential of these powerful tools and use them to drive real value in our applications.