import React from "react";
import { profile, hero } from "../Details";
import { ArrowRightIcon } from "./Icons";

function Hero() {
  return (
    <section id="top" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">{hero.eyebrow}</p>
          <h1 className="text-[2.1rem] leading-[1.15] sm:text-[2.75rem] lg:text-[3.25rem]">
            {hero.headline}
          </h1>
          <p className="lead mt-6">{hero.body}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowRightIcon />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-8 text-[15px] text-subtle">
            {hero.support.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span aria-hidden="true" className="mx-2 text-line">|</span>}
                {item}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="order-first lg:order-none justify-self-start lg:justify-self-end">
          <img
            src={profile.portrait}
            alt={`${profile.name}, ${profile.role}`}
            width="400"
            height="400"
            fetchpriority="high"
            decoding="async"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-[360px] lg:h-[360px] rounded-2xl object-cover bg-surface border border-line"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
