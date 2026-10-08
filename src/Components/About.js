import React from "react";
import { about, profile } from "../Details";

function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="page grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div>
          <h2 className="h2">About</h2>
          <div className="mt-6 space-y-5 max-w-prose">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="lg:pt-20">
          <div className="panel p-6">
            <h3 className="text-base">Education</h3>
            <p className="mt-2 text-[15px]">{about.education}</p>
            <h3 className="text-base mt-6">Based in</h3>
            <p className="mt-2 text-[15px]">{profile.location}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
