# Patrick Martin's portfolio

A personal portfolio and Markdown-based blog built with Next.js.

## Writing a post

Create a Markdown file in `src/content/posts` using a date-prefixed filename:

```text
2026-08-03-example-post.md
```

Every post begins with three front-matter fields:

```markdown
---
title: "Example post"
date: "2026-08-03"
summary: "A short description shown on the writing index."
---

Write the post in Markdown here.
```

The filename after the date becomes the URL, such as `/blog/example-post`. Posts are sorted newest first and generated during `npm run build`.
