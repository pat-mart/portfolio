import Link from "next/link";
import { ArrowIcon } from "@/app/components/site-icons";

export default function Home() {
  return (
    <article className="page">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>Hi, I’m Patrick.</h1>
      </header>

      <section className="prose-section">
        <h2>About me</h2>
        <p>
          I’m from Long Island, New York, and I currently study computer science at
          the University of Massachusetts Amherst.
        </p>
        <p>
          I recently participated in the Graph Learning and Analytics (GraLNA) REU program at Old Dominion University. I am interested in doing more research as an undergrad and eventually going to graduate school.
        </p>
      </section>

      <section className="focus-grid" aria-label="Current focus">
        {/*<div className="focus-card">*/}
        {/*  <span className="focus-card__number">01</span>*/}
        {/*  <h3>Research</h3>*/}
        {/*  <p>Graph learning, algorithms, and theoretical foundations.</p>*/}
        {/*</div>*/}
        {/*<div className="focus-card">*/}
        {/*  <span className="focus-card__number">02</span>*/}
        {/*  <h3>Engineering</h3>*/}
        {/*  <p>Small, focused tools built with Go, Python, Flutter, and React.</p>*/}
        {/*</div>*/}
      </section>

      <Link className="text-link" href="/projects">
        Projects <ArrowIcon />
      </Link>
    </article>
  );
}
