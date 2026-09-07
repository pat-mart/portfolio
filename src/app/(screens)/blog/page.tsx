import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Patrick Martin.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <article className="page">
      <header className="page-header">
        <h1>Blog</h1>
      </header>

      <div className="post-list">
        {posts.length ? (
          posts.map((post) => (
            <article className="post-preview" key={post.slug}>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.summary}</p>
            </article>
          ))
        ) : (
          <p className="empty-state">No posts.</p>
        )}
      </div>
    </article>
  );
}
