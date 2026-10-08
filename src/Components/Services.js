import React from "react";
import { services } from "../Details";

function Services() {
  return (
    <section id="services" className="section border-t border-line bg-surface">
      <div className="page">
        <h2 className="h2">Services</h2>
        <p className="lead mt-4">
          How I usually work with clients, and the projects on this page that show each one.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-line rounded-xl p-6 bg-canvas">
              <h3 className="text-xl">{service.title}</h3>
              <dl className="mt-4 space-y-3 text-[15px]">
                <div>
                  <dt className="font-semibold text-ink">Useful for</dt>
                  <dd>{service.audience}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">What I deliver</dt>
                  <dd>{service.delivers}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Shown in</dt>
                  <dd>{service.proof}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
