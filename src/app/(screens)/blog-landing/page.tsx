import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/app/components/site-icons";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes about computer science, projects, music, and things Patrick Martin is learning.",
};

export default function BlogLanding() {
  const posts = getAllPosts();

  return (
    <article className="page">
      <header className="page-header">
        <h1>Blog</h1>
        <p className="page-lede">
          Occasional miscellaneous writings.
        </p>
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
          <p className="empty-state">No posts yet. Check back soon.</p>
        )}
      </div>
    </article>
  );
}
