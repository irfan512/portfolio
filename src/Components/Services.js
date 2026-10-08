import React from "react";
import { services } from "../Details";
import SectionHeading from "./SectionHeading";
import { PhoneDeviceIcon, BrowserIcon, ChipIcon, WrenchIcon } from "./Icons";

const ICONS = { mobile: PhoneDeviceIcon, web: BrowserIcon, ai: ChipIcon, improve: WrenchIcon };

function Services() {
  return (
    <section id="services" className="section bg-tint">
      <div className="page">
        <SectionHeading
          title="Services"
          intro="How I usually work with clients, and the projects on this page that show each one."
        />

        <div data-reveal className="mt-8 md:mt-12 grid gap-x-12 gap-y-7 md:gap-y-10 md:grid-cols-2">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article key={service.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="shrink-0 w-11 h-11 rounded-xl bg-surface border border-line text-accent inline-flex items-center justify-center"
                >
                  {Icon && <Icon />}
                </span>
                <div>
                  <h3 className="text-[1.125rem] md:text-[1.25rem]">{service.title}</h3>
                  <p className="md:hidden mt-1.5 text-[16px] leading-relaxed">{service.summary}</p>
                  <div className="hidden md:block">
                    <p className="mt-1 text-[15px] text-subtle">{service.audience}</p>
                    <p className="mt-3 text-[16px] leading-relaxed">{service.delivers}</p>
                  </div>
                  <p className="mt-2 md:mt-3 text-[15px]">
                    <span className="font-semibold text-ink">Shown in: </span>
                    {service.proof}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
