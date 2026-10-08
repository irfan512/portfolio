import React from "react";
import { process } from "../Details";

function Process() {
  return (
    <section id="process" className="section border-t border-line bg-surface">
      <div className="page">
        <h2 className="h2">How I work</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((step, index) => (
            <li key={step.title}>
              <span className="block text-sm font-semibold text-accent" aria-hidden="true">
                Step {index + 1}
              </span>
              <h3 className="text-lg mt-2">{step.title}</h3>
              <p className="mt-2 text-[15px]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
