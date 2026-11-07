import { site } from "@/lib/site";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">About</h1>
      <p className="mt-4 leading-relaxed text-muted">
        {site.name} is written by {site.author}, a backend/Python engineer who runs AI tooling
        entirely on his own hardware. Most posts come from things actually set up and tested on a
        real desktop — Ollama, local agents, self-hosted dashboards — not cloud demos.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Draft posts are generated with a local LLM from a running backlog of topics, then reviewed
        and edited by hand before publishing. Some links on this site are affiliate links or
        support ads — they don&apos;t change what gets recommended.
      </p>
    </div>
  );
}
