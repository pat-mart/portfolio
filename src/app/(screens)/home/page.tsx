import Link from "next/link";
import { profile } from "@/app/site-data";

export default function Home() {
  return (
    <article className="page">
      <header className="page-header">
        <h1>Patrick Martin</h1>
      </header>

      <section className="prose-section">
        <p>
          Hello! My name is Patrick and I’m from Long Island, New York. I&apos;m a CS major at UMass Amherst graduating in Dec. 2027.
        </p>
        <p>
          Last summer, I worked on a semantic communicaions project as a participant in the Graph Learning and Analytics (GraLNA) REU at Old Dominion University (mentored by <a href={"https://sites.google.com/view/lusili/"}>Prof. Lusi Li</a>).
          I am broadly interested in theoretical computer science and I'm working on a project related to online multiclass learning with <a href={"https://sites.google.com/site/acmonsterqiao/"}>Prof. Mingda Qiao</a> this semester.
        </p>
      </section>

      <section className="prose-section" aria-labelledby="links-heading">
        <ul className="plain-links">
          <li>
            <Link href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </li>
          <li>
            <Link href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
