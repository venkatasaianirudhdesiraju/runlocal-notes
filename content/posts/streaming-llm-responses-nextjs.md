---
title: "Streaming LLM Responses to the Browser with Next.js"
description: "When using Large Language Models (LLMs) in your Next.js application, you might find yourself in a situation where you want to stream the model's response to ..."
date: "2026-11-27"
tags: ["nextjs", "streaming"]
draft: true
---

When using Large Language Models (LLMs) in your Next.js application, you might find yourself in a situation where you want to stream the model's response to the browser, rather than waiting for the entire response to be sent at once. This approach can be beneficial for large responses or real-time applications where efficiency is key.

In this post, we'll go through the process of forwarding a streamed model response from a server API route to a `ReadableStream` that the client can consume incrementally.

### Prerequisites

To follow along, you'll need:

* A basic understanding of Next.js and how to set up a server API route.
* A working knowledge of streaming in Node.js.
* A model (LLM) that can be used for text generation. For this example, we'll assume you have a model that can be used as-is.

### Setting up the Server API Route

First, let's set up a server API route that streams the model's response. We'll use the `@next/server-api-routes` package to create a server route.

```javascript
// pages/api/stream-response.js
import { NextApiRequest, NextApiResponse } from 'next';
import { loki, LOKI } from 'loki-js';

const model = LOKI.createModel('loki-model', {
  // Your model's configuration
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = req.query.prompt as string;
  const response = await model.generate(prompt, {
    maxTokens: 2048,
  });

  // Stream the response
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  res.write(`event: message\n`);
  res.write(`data: ${response}\n\n`);

  // Keep the connection alive for demonstration purposes
  // In a real-world scenario, you'd likely use a library like `loki-js` to manage the connection.
  setInterval(() => {
    res.write(`event: message\n`);
    res.write(`data: \n\n`);
  }, 1000);
}
```

### Creating the ReadableStream in the Client

In your Next.js page, you can create a `ReadableStream` that consumes the streamed response from the server API route.

```javascript
// pages/index.js
import { useEffect, useState } from 'react';

function StreamExample() {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const reader = new ReadableStream({
      pull(controller => {
        fetch('/api/stream-response?prompt=Hello%20World', {
          signal: controller.signal,
        })
          .then(response => response.body)
          .then(body => {
            body.addEventListener('data', event => {
              setResponse(event.data);
            });
            body.addEventListener('error', event => {
              setError(event);
            });
          })
          .catch(error => {
            setError(error);
          });
      }),
    });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <pre>
        <code>{response}</code>
      </pre>
    </div>
  );
}

export default StreamExample;
```

### Conclusion

In this example, we've demonstrated how to stream an LLM response from a server API route to the client using Next.js and `ReadableStream`. This approach allows for efficient consumption of large responses or real-time data, making it suitable for various use cases. By following these steps, you can adapt this example to suit your specific requirements.

Note that, in a real-world scenario, you'd likely want to handle errors, implement backpressure, and possibly use a library like `loki-js` to manage the connection and streaming of responses. This example is intended to illustrate the basic concept of streaming responses from a server API route to the client.