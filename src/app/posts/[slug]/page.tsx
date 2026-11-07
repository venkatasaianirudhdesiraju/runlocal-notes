import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return { title: post.title, description: post.description };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <article>
      <div className="font-mono text-xs text-muted">{post.date}</div>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">{post.title}</h1>
      <div className="prose-post mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
