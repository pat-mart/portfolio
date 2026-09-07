import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="page article-page">
      <header className="page-header article-header">
        <h1>{post.title}</h1>
        <div className="article-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </div>
      </header>
      <div className="article-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
