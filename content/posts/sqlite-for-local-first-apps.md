---
title: "Why SQLite Is the Right Default for Local-First Apps"
description: "Introduction"
date: "2026-11-15"
tags: ["sqlite", "local-first"]
draft: true
---

## Introduction

When building local-first apps, one of the most important decisions is how to store data. For single-user applications, the choice is often between SQLite and a client-server database like PostgreSQL. In this post, we'll make the case for SQLite as the default storage for single-user local tools and provide guidance on when to graduate to Postgres.

## The Benefits of SQLite

SQLite is a self-contained, file-based database that doesn't require a separate server process. This makes it an excellent choice for single-user applications, as it:

*   Doesn't require a network connection to function
*   Can be easily embedded in the application's codebase
*   Has a low overhead in terms of system resources
*   Supports concurrent access, making it suitable for applications that need to store and retrieve data quickly

## Backup and Recovery

One of the primary concerns when using SQLite is data loss due to hardware failure or user error. However, SQLite's design makes it easy to backup and recover data:

*   Data is stored in a single file, which can be easily copied to a safe location
*   SQLite supports point-in-time recovery, allowing you to roll back to a previous version of the database if needed
*   Regular backups can be automated using tools like `sqlite3` command-line utility or third-party libraries

## Performance and Scalability

While SQLite is designed for single-user applications, it's not limited to small datasets. With the right indexing and query optimization, SQLite can handle large datasets and perform complex queries efficiently:

*   SQLite supports various indexing techniques, including B-tree, hash, and GiST
*   The database can be optimized for specific use cases using techniques like query reordering and caching
*   For larger datasets, consider using a separate storage engine like SQLite's built-in FTS5 or third-party extensions

## When to Graduate to Postgres

While SQLite is an excellent choice for single-user applications, there may be cases where Postgres is a better fit:

*   **Multi-user support**: If you anticipate multiple users accessing the same database, Postgres's support for concurrent connections and transactions is a better choice.
*   **Complex querying**: If your application requires complex queries or real-time analytics, Postgres's more extensive set of SQL features and optimization capabilities may be beneficial.
*   **Scalability**: If your application is expected to grow significantly and requires horizontal scaling, Postgres's support for distributed databases and sharding may be necessary.

## Conclusion

SQLite is an excellent default choice for single-user local tools due to its self-contained design, ease of backup and recovery, and scalability. While Postgres offers more advanced features and support for multi-user and complex querying scenarios, it's overkill for most single-user applications. By choosing SQLite as the default storage, developers can focus on building robust, efficient, and user-friendly applications without the overhead of a full-fledged database server.