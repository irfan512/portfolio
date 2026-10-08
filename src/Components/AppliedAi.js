import React from "react";
import { appliedAi } from "../Details";
import SectionHeading from "./SectionHeading";

function AppliedAi() {
  return (
    <section id="ai" className="section bg-surface">
      <div className="page grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <SectionHeading title={appliedAi.heading} intro={appliedAi.intro} titleClassName="max-w-[16ch]" />

        <ol data-reveal className="grid gap-x-10 gap-y-6 md:gap-y-8 sm:grid-cols-2 lg:pt-2">
          {appliedAi.items.map((item) => (
            <li key={item.title} className="border-t-2 border-accent pt-3 md:pt-4">
              <h3 className="text-[1.125rem]">{item.title}</h3>
              <p className="mt-1.5 md:mt-2 text-[16px] leading-relaxed">
                <span className="md:hidden">{item.short}</span>
                <span className="hidden md:inline">{item.body}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AppliedAi;
