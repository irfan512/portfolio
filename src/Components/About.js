import React from "react";
import { about, profile } from "../Details";

function About() {
  return (
    <section id="about" className="section bg-surface border-t border-line">
      <div className="page grid gap-6 md:gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div data-reveal>
          <h2 className="h2">About</h2>
          <p className="md:hidden mt-4">{about.short}</p>
          <div className="hidden md:block mt-6 space-y-5 max-w-prose">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside data-reveal className="lg:pt-16">
          <dl className="space-y-3 md:space-y-5 md:rounded-xl md:bg-tint md:p-6 border-t border-line pt-5 md:border-0 md:pt-6">
            <div>
              <dt className="text-[14px] font-semibold text-accent">Education</dt>
              <dd className="mt-1 text-[16px] text-ink">{about.education}</dd>
            </div>
            <div>
              <dt className="text-[14px] font-semibold text-accent">Based in</dt>
              <dd className="mt-1 text-[16px] text-ink">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-[14px] font-semibold text-accent">Experience</dt>
              <dd className="mt-1 text-[16px] text-ink">{profile.experience}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

export default About;
