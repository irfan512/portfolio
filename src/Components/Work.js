import React from "react";
import { featuredProjects, moreProjects } from "../Details";
import { ExternalIcon } from "./Icons";

function Featured({ project, index }) {
  const imageFirst = index % 2 === 0;
  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:gap-14 items-center">
      <img
        src={project.image}
        alt={project.alt}
        width="1200"
        height="675"
        loading="lazy"
        decoding="async"
        className={`w-full aspect-[16/9] object-cover rounded-xl border border-line bg-surface ${
          imageFirst ? "" : "lg:order-2"
        }`}
      />
      <div className={imageFirst ? "" : "lg:order-1"}>
        <p className="text-[15px] text-subtle">{project.category}</p>
        <h3 className="text-2xl mt-1">{project.name}</h3>
        <p className="mt-4">{project.summary}</p>

        <p className="mt-5 text-[15px] font-semibold text-accent">What I did</p>
        <p className="mt-1.5">{project.contribution}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>

        {project.link && (
          <p className="mt-4">
            <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="link">
              {project.link.label}
              <ExternalIcon />
            </a>
          </p>
        )}
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section border-t border-line">
      <div className="page">
        <h2 className="h2">Selected work</h2>
        <p className="lead mt-4">
          Products I have built or led development on, with what I was responsible for on each one.
        </p>

        <div className="mt-14 space-y-16 md:space-y-24">
          {featuredProjects.map((project, index) => (
            <Featured key={project.name} project={project} index={index} />
          ))}
        </div>

        <h3 className="text-xl mt-20 pt-10 border-t border-line">More projects</h3>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => (
            <li key={project.name} className="panel overflow-hidden flex flex-col">
              <img
                src={project.image}
                alt={project.alt}
                width="640"
                height="350"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/9] object-cover border-b border-line"
              />
              <div className="p-5 flex flex-col flex-1">
                <p className="text-sm text-subtle">{project.category}</p>
                <h4 className="text-lg mt-0.5">{project.name}</h4>
                <p className="mt-2 text-[15px] flex-1">{project.line}</p>
                {project.link && (
                  <p className="mt-2">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-[15px]"
                    >
                      {project.link.label}
                      <ExternalIcon />
                    </a>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Work;
