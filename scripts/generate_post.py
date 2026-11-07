"""Draft one blog post from the topic backlog using a local Ollama model.

Writes content/posts/<slug>.md with draft: true, marks the topic as drafted in
data/topics.json, then commits the result to a new branch and opens a PR for
human review before it goes live. Never pushes straight to main.

Run manually, or on a schedule (e.g. Windows Task Scheduler) via:
    python scripts/generate_post.py
"""

import json
import re
import subprocess
import sys
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOPICS_FILE = ROOT / "data" / "topics.json"
POSTS_DIR = ROOT / "content" / "posts"
OLLAMA_URL = "http://127.0.0.1:11434/api/chat"
MODEL = "llama3.1:8b"

SYSTEM_PROMPT = """You are writing a blog post for RunLocal Notes, a site about self-hosted AI \
and local-first developer tooling, written in a direct, practical, no-hype voice. \
Write in Markdown. Do not include a title heading (the frontmatter already has the title) \
or any frontmatter yourself. Use ## for section headings. Be concrete and technically accurate; \
never invent statistics, benchmarks, or named products you are not sure exist. If you are unsure \
of a specific fact, phrase it as general guidance instead of a precise claim. Aim for 500-800 words.
"""


def next_topic(topics):
    for t in topics:
        if t["status"] == "pending":
            return t
    return None


def call_ollama(topic):
    user_prompt = (
        f"Write the post \"{topic['title']}\".\n"
        f"Angle: {topic['angle']}\n"
        f"Tags: {', '.join(topic['tags'])}"
    )
    payload = json.dumps(
        {
            "model": MODEL,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            "stream": False,
        }
    ).encode("utf-8")

    req = urllib.request.Request(
        OLLAMA_URL, data=payload, headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = json.loads(resp.read())
    return data["message"]["content"].strip()


def write_description(body: str) -> str:
    first_para = next((p for p in body.split("\n\n") if p.strip()), "")
    text = re.sub(r"[#*`]", "", first_para).strip()
    return (text[:157] + "...") if len(text) > 160 else text


def run(cmd):
    subprocess.run(cmd, cwd=ROOT, check=True)


def main():
    topics = json.loads(TOPICS_FILE.read_text())
    topic = next_topic(topics)
    if topic is None:
        print("No pending topics left in data/topics.json")
        return 0

    print(f"Drafting: {topic['title']}")
    body = call_ollama(topic)
    description = write_description(body)

    frontmatter = (
        "---\n"
        f"title: \"{topic['title']}\"\n"
        f"description: \"{description}\"\n"
        f"date: \"{date.today().isoformat()}\"\n"
        f"tags: {json.dumps(topic['tags'])}\n"
        "draft: true\n"
        "---\n\n"
    )

    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    post_path = POSTS_DIR / f"{topic['slug']}.md"
    post_path.write_text(frontmatter + body, encoding="utf-8")

    topic["status"] = "drafted"
    TOPICS_FILE.write_text(json.dumps(topics, indent=2) + "\n")

    branch = f"draft/{topic['slug']}"
    run(["git", "checkout", "-B", branch])
    run(["git", "add", str(post_path.relative_to(ROOT)), str(TOPICS_FILE.relative_to(ROOT))])
    run(
        [
            "git",
            "commit",
            "-m",
            f"Draft post: {topic['title']}\n\nGenerated locally with {MODEL} via Ollama. Needs human review before publishing.",
        ]
    )
    run(["git", "push", "-u", "origin", branch])

    pr_body = (
        f"Auto-drafted with {MODEL} from the topic backlog. Marked `draft: true` so it won't "
        "deploy even if merged accidentally without review. Read it, fix anything wrong, flip "
        "`draft: false`, then merge to publish."
    )
    try:
        run(
            [
                "gh",
                "pr",
                "create",
                "--title",
                f"Draft: {topic['title']}",
                "--body",
                pr_body,
            ]
        )
    except subprocess.CalledProcessError:
        print("Pushed branch but could not open a PR automatically (gh not available?).")
        print(f"Branch: {branch}")

    run(["git", "checkout", "main"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
