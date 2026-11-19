---
title: "Why SQLite Is the Right Default for Local-First Apps"
description: "Introduction"
date: "2026-11-19"
tags: ["sqlite", "local-first"]
draft: true
---

## Introduction

When building local-first apps, one of the key decisions is choosing a storage solution for your app's data. Local-first apps are designed to store data locally on the user's machine, which raises questions about data consistency, durability, and backup strategies. In this post, we'll explore why SQLite is a suitable default choice for single-user local tools and when to consider moving to a more robust solution like Postgres.

## Why SQLite?

SQLite is a self-contained, file-based database that can store data in a single file. Its primary advantages are simplicity, ease of use, and low overhead. SQLite is:

* Easy to set up and integrate with your app
* Lightweight and doesn't require a separate process or service
* Highly portable across platforms
* Self-sufficient, with all its necessary libraries included in a single file

For local-first apps, SQLite provides an excellent default choice because it meets the fundamental requirement of storing data locally on the user's machine. Its simplicity and low overhead also make it an attractive option for development and testing.

## Backup Strategies

One concern when using a local storage solution like SQLite is ensuring data backup and recovery. Since SQLite stores data in a single file, backup is straightforward: simply copy the file to an external storage location, such as a cloud storage service or a separate local drive. This approach works well for single-user apps, as each user's data is self-contained and can be backed up independently.

## When to Gradate to Postgres

While SQLite is a suitable default choice for many local-first apps, there may be cases where a more robust solution like Postgres is necessary. Here are some scenarios where you might consider migrating to Postgres:

* **Multi-user support**: If your app needs to support multiple users, you'll need a more sophisticated storage solution that can handle concurrent access and user permissions. Postgres offers more advanced features for handling multiple users, such as role-based access control and concurrent queries.
* **Data size and performance**: As your app grows, the size of your SQLite database may become a concern. Postgres is designed to handle large datasets and can provide better performance for complex queries.
* **Advanced query capabilities**: If your app requires complex queries, joins, or aggregations, Postgres offers more advanced query capabilities and is generally better suited for handling these scenarios.

## Conclusion

SQLite is a suitable default choice for single-user local tools due to its simplicity, ease of use, and low overhead. Its self-contained design makes it an excellent fit for local-first apps, and its backup strategy is straightforward. However, as your app grows and complexity increases, you may need to consider migrating to a more robust solution like Postgres. By choosing the right storage solution for your app's needs, you can ensure that your users' data is safe, recoverable, and easily backed up.