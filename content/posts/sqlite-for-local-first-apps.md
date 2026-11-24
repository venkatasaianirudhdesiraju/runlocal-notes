---
title: "Why SQLite Is the Right Default for Local-First Apps"
description: "Why SQLite Is the Right Default for Local-First Apps"
date: "2026-11-24"
tags: ["sqlite", "local-first"]
draft: true
---

## Why SQLite Is the Right Default for Local-First Apps

When building a local-first app, one of the most important decisions is how to store data. For single-user applications, the default choice is often a relational database like SQLite. In this post, we'll explore why SQLite is a good fit for many local-first apps and when to consider upgrading to a more powerful database like Postgres.

### Why SQLite?

SQLite is a self-contained, file-based relational database that's easy to integrate into your application. It's a great default choice for several reasons:

*   **Easy to use**: SQLite has a simple and intuitive API that makes it easy to use, even for developers who are new to databases.
*   **Self-contained**: SQLite stores all data in a single file, making it easy to back up and migrate between environments.
*   **Lightweight**: SQLite requires minimal resources, making it a great choice for applications with limited storage or computational resources.
*   **Cross-platform**: SQLite is available on most platforms, including Windows, macOS, and Linux.

### Backup and Migration

One of the biggest advantages of using SQLite is its ease of backup and migration. Since all data is stored in a single file, you can simply copy the file to back up your data. This makes it easy to:

*   **Backup**: Regularly copy the SQLite file to an offsite location to ensure your data is safe in case of a disaster.
*   **Migrate**: Easily migrate your application to a new environment by copying the SQLite file.

### When to Upgrade to Postgres

While SQLite is a great default choice, there may be times when you need to upgrade to a more powerful database like Postgres. Here are some scenarios where you might consider upgrading:

*   **Multiple users**: If you're building an application that needs to support multiple users, you'll need a database that can handle concurrent connections and locking. Postgres is a better choice in this scenario.
*   **High-performance requirements**: If your application requires high-performance querying or complex transactions, Postgres is a better choice due to its support for concurrent transactions and indexing.
*   **Scalability**: If you expect your application to grow significantly in the future, Postgres is a better choice due to its ability to scale horizontally and handle large datasets.

### Conclusion

SQLite is a great default choice for single-user local-first apps due to its ease of use, self-containment, and lightweight nature. While it may not be the best choice for applications with multiple users or high-performance requirements, it's a great starting point for many local-first applications. By understanding when to upgrade to Postgres, you can ensure that your application is well-suited to its needs and can scale as it grows.

In our next post, we'll explore how to integrate SQLite into your application and provide some best practices for working with the database. Stay tuned!