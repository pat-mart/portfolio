import Link from "next/link";
import { ArrowIcon } from "@/app/components/site-icons";
import { projects } from "@/app/site-data";

export default function Projects() {
  return (
    <article className="page">
      <header className="page-header-bl">
        <h1>Projects</h1>
        <section className={"prose-section"}>
            <h2>Work in progress!</h2>
        </section>
      </header>

      <div className="archive-list">
        {/*{projects.map((project) => (*/}
        {/*  <article className="archive-entry" key={project.title}>*/}
        {/*    <div className="archive-entry__content">*/}
        {/*      <h2>*/}
        {/*        <Link href={project.href} target="_blank" rel="noreferrer">*/}
        {/*          {project.title}*/}
        {/*        </Link>*/}
        {/*      </h2>*/}
        {/*      <p>{project.description}</p>*/}
        {/*      <ul className="tag-list" aria-label={`${project.title} technologies`}>*/}
        {/*        {project.technologies.map((technology) => (*/}
        {/*          <li key={technology}>{technology}</li>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*    <Link*/}
        {/*      className="archive-entry__arrow"*/}
        {/*      href={project.href}*/}
        {/*      target="_blank"*/}
        {/*      rel="noreferrer"*/}
        {/*      aria-label={`View ${project.title} on GitHub`}*/}
        {/*    >*/}
        {/*      <ArrowIcon />*/}
        {/*    </Link>*/}
        {/*  </article>*/}
        {/*))}*/}
      </div>
    </article>
  );
}

