import React from "react";
import { workDetails, capabilities, capabilitiesNote } from "../Details";

function Experience() {
  return (
    <section id="experience" className="section border-t border-line bg-surface">
      <div className="page">
        <h2 className="h2">Experience</h2>

        <ol className="mt-12 space-y-10">
          {workDetails.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-2 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-10"
            >
              <p className="text-[15px] text-subtle md:pt-1">{job.period}</p>
              <div>
                <h3 className="text-lg">{job.role}</h3>
                <p className="text-[15px] text-subtle">
                  {job.company}, {job.location}
                </p>
                <ul className="mt-3 space-y-2 max-w-prose">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 text-[15px] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-subtle"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="text-xl mt-16 pt-10 border-t border-line">Capabilities</h3>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {capabilities.map((group) => (
            <div key={group.group} className="grid gap-1 py-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-10">
              <dt className="font-semibold text-ink text-[15px]">{group.group}</dt>
              <dd className="text-[15px]">{group.items}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[15px] text-subtle max-w-prose">{capabilitiesNote}</p>
      </div>
    </section>
  );
}

export default Experience;
