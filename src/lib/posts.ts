import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft?: boolean;
};

export type Post = PostMeta & { content: string };

function readSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as Omit<PostMeta, "slug">) };
}

export function getAllSlugs(): string[] {
  return readSlugs();
}
