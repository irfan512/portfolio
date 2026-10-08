import React from "react";
import { workDetails, capabilities, capabilitiesNote } from "../Details";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" className="section bg-canvas border-t border-line">
      <div className="page">
        <SectionHeading title="Experience" />

        <ol data-reveal className="mt-8 md:mt-10 border-l border-line ml-1 space-y-8 md:space-y-10">
          {workDetails.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-6 md:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-canvas"
              />
              <p className="text-[14px] font-semibold text-accent">{job.period}</p>
              <h3 className="mt-1 text-[1.125rem]">{job.role}</h3>
              <p className="text-[15px] text-subtle">
                {job.company}, {job.location}
              </p>
              <ul className="trim-list mt-2 md:mt-3 space-y-1.5 max-w-prose">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-[16px] leading-relaxed before:absolute before:left-0 before:top-[0.75em] before:w-1.5 before:h-px before:bg-subtle"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 md:mt-16">
          <h3 className="text-[1.375rem]">Capabilities</h3>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {capabilities.map((group) => (
              <div key={group.group} className="grid gap-1 py-4 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-10">
                <dt className="font-semibold text-ink text-[15px]">{group.group}</dt>
                <dd className="text-[16px]">{group.items}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[15px] text-subtle max-w-prose">{capabilitiesNote}</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
