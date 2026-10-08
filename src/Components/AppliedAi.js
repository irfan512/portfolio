import React from "react";
import { appliedAi } from "../Details";

function AppliedAi() {
  return (
    <section id="ai" className="section border-t border-line">
      <div className="page">
        <h2 className="h2 max-w-[20ch]">{appliedAi.heading}</h2>
        <p className="lead mt-4">{appliedAi.intro}</p>

        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {appliedAi.items.map((item) => (
            <div key={item.title} className="border-t-2 border-accent pt-4">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-2 text-[15px]">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 p-5 bg-accent-soft rounded-xl text-[15px] text-ink max-w-prose">
          {appliedAi.scope}
        </p>
      </div>
    </section>
  );
}

export default AppliedAi;
