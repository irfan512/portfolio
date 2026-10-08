import React, { useEffect, useId, useRef, useState } from "react";
import { featuredProjects, moreProjects, workIntro } from "../Details";
import SectionHeading from "./SectionHeading";
import { ChevronIcon, ExternalIcon } from "./Icons";

const INITIAL_MORE = 3;

function Featured({ project, index }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reverse = index % 2 === 1;

  return (
    <article
      data-reveal
      className="project grid gap-5 md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:items-center"
    >
      <div className={`media-frame ${reverse ? "lg:order-2" : ""}`} style={project.ratio ? { aspectRatio: project.ratio } : undefined}>
        <img src={project.image} alt={project.alt} width="1200" height="600" loading="lazy" decoding="async" />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <p className="text-[14px] font-semibold text-accent">{project.category}</p>
        <h3 className="mt-1 text-[1.5rem] sm:text-[1.875rem]">{project.name}</h3>
        <p className="mt-2 md:mt-3 max-w-prose">{project.summary}</p>

        <p className="mt-4 md:mt-6 text-[15px] font-semibold text-ink">What I did</p>
        <ul className="mt-2 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="relative pl-5 text-[16px] leading-relaxed">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.62em] w-2 h-2 rounded-[2px] bg-accent/70"
              />
              {point}
            </li>
          ))}
        </ul>

        <ul className="trim-tags mt-4 md:mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>

        {(project.link || project.details) && (
          <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-x-6 gap-y-1">
            {project.link && (
              <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="link">
                {project.link.label}
                <ExternalIcon className="link-icon" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            {project.details && (
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-[16px] font-medium text-ink hover:text-accent transition-colors"
              >
                Project details
                <ChevronIcon className="chevron" />
              </button>
            )}
          </div>
        )}

        {project.details && (
          <div id={panelId} hidden={!open} className={open ? "appear" : undefined}>
            <p className="mt-2 pl-4 border-l-2 border-accent/40 text-[16px] leading-relaxed max-w-prose">
              {project.details}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

function MoreProjects() {
  const [showAll, setShowAll] = useState(false);
  const firstNewRef = useRef(null);
  const expandedByUser = useRef(false);
  const hiddenCount = moreProjects.length - INITIAL_MORE;
  const visible = showAll ? moreProjects : moreProjects.slice(0, INITIAL_MORE);

  // After expanding, move focus to the first newly shown project.
  useEffect(() => {
    if (showAll && expandedByUser.current) {
      firstNewRef.current?.focus();
      expandedByUser.current = false;
    }
  }, [showAll]);

  const toggle = () => {
    expandedByUser.current = !showAll;
    setShowAll((v) => !v);
  };

  return (
    <div className="mt-16 pt-10 md:mt-24 md:pt-12 border-t border-line">
      <div data-reveal>
        <h3 className="text-[1.375rem] sm:text-2xl">More projects</h3>
        <p className="mt-2 text-[16px] max-w-prose">Other apps I have worked on, most of them live on the app stores.</p>
      </div>

      <ul id="more-projects" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => {
          const isNew = i >= INITIAL_MORE;
          return (
            <li key={project.name} className={`project panel overflow-hidden flex flex-col ${isNew ? "appear" : ""}`}>
              <div className="media-frame flush">
                <img src={project.image} alt={project.alt} width="640" height="320" loading="lazy" decoding="async" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[14px] font-semibold text-accent">{project.category}</p>
                <h4
                  ref={i === INITIAL_MORE ? firstNewRef : undefined}
                  tabIndex={i === INITIAL_MORE ? -1 : undefined}
                  className="text-lg mt-1"
                >
                  {project.name}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed flex-1">{project.line}</p>
                {project.link && (
                  <p className="mt-2">
                    <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="link text-[15px]">
                      {project.link.label}
                      <ExternalIcon className="link-icon" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={showAll}
            aria-controls="more-projects"
            className="btn-secondary w-full xs:w-auto"
          >
            {showAll ? "Show fewer projects" : `Show ${hiddenCount} more projects`}
            <ChevronIcon className="chevron" />
          </button>
        </div>
      )}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="section bg-surface border-y border-line">
      <div className="page">
        <SectionHeading
          title="Selected work"
          intro={workIntro}
          titleClassName="lg:text-[2.75rem]"
        />

        <div className="mt-7 md:mt-16 space-y-12 md:space-y-24">
          {featuredProjects.map((project, index) => (
            <Featured key={project.name} project={project} index={index} />
          ))}
        </div>

        <MoreProjects />
      </div>
    </section>
  );
}

export default Work;
