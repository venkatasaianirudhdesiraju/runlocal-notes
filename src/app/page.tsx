import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
      <p className="mt-3 max-w-xl text-muted">{site.tagline}</p>

      <div className="mt-10 space-y-8">
        {posts.length === 0 && (
          <p className="text-muted">No posts yet — check back soon.</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
          >
            <div className="font-mono text-xs text-muted">{post.date}</div>
            <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.description}</p>
            <div className="mt-3 flex gap-2">
              {post.tags?.map((t) => (
                <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
