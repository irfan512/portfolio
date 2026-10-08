import React from "react";
import { process } from "../Details";
import SectionHeading from "./SectionHeading";

function Process() {
  return (
    <section id="process" className="section bg-tint">
      <div className="page">
        <SectionHeading title="How I work" />
        <ol data-reveal className="mt-8 md:mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((step, index) => (
            <li key={step.title} className="relative pt-4 md:pt-5 border-t border-mist">
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 w-10 h-[3px] rounded-full bg-accent"
              />
              <span className="block text-[14px] font-semibold text-accent">Step {index + 1}</span>
              <h3 className="mt-1.5 text-[1.125rem]">{step.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
