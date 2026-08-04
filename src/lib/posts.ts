import "server-only";

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");
const frontMatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

function parseScalar(value: string) {
  const trimmed = value.trim();
  const quoted = trimmed.match(/^(["'])([\s\S]*)\1$/);
  return quoted ? quoted[2] : trimmed;
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
  const source = readFileSync(path.join(postsDirectory, fileName), "utf8");
  const match = source.match(frontMatterPattern);

  if (!match) {
    throw new Error(`Post ${fileName} is missing YAML front matter.`);
  }

  const metadata = Object.fromEntries(
    match[1]
      .split("\n")
      .filter((line) => line.trim() && !line.trimStart().startsWith("#"))
      .map((line) => {
        const separator = line.indexOf(":");
        if (separator < 1) throw new Error(`Invalid front matter in ${fileName}: ${line}`);
        return [line.slice(0, separator).trim(), parseScalar(line.slice(separator + 1))];
      }),
  );

  if (!metadata.title || !metadata.date || !metadata.summary) {
    throw new Error(`Post ${fileName} must define title, date, and summary.`);
  }

  if (Number.isNaN(Date.parse(metadata.date))) {
    throw new Error(`Post ${fileName} has an invalid date.`);
  }

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    summary: metadata.summary,
    content: source.slice(match[0].length).trim(),
  };
}

export function getAllPosts() {
  return readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
