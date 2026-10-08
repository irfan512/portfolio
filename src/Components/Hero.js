import React, { useEffect, useState } from "react";
import { profile, hero } from "../Details";
import { ArrowRightIcon } from "./Icons";

const step = (n) => ({ "--step": n });

// Keeps a hyphenated phrase on one line so the headline never breaks at "AI-".
function Headline({ text, keepTogether = "AI-powered" }) {
  const at = text.indexOf(keepTogether);
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <span className="whitespace-nowrap">{keepTogether}</span>
      {text.slice(at + keepTogether.length)}
    </>
  );
}

// Longest entrance (portrait: 180ms delay + 650ms) with a margin.
const ENTRANCE_MS = 1100;

function Hero() {
  // Once the entrance has played, retire it. Otherwise an element that goes
  // display:none and back (resizing across a breakpoint) would replay it.
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), ENTRANCE_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" data-entered={entered ? "" : undefined} className="pt-8 pb-14 sm:pt-10 md:pt-14 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="page grid gap-8 md:grid-cols-[minmax(0,1fr)_200px] md:gap-10 md:items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div>
          <p className="hero-step text-[15px] font-semibold text-accent" style={step(0)}>
            {hero.eyebrow}
          </p>

          <h1
            className="hero-step headline mt-3 text-[2rem] leading-[1.14] xs:text-[2.25rem] sm:text-[2.5rem] md:text-[2.375rem] lg:text-[3rem] xl:text-[3.25rem] lg:leading-[1.1] max-w-[18ch]"
            style={step(1)}
          >
            <Headline text={hero.headline} />
          </h1>

          <p className="hero-step lead mt-5" style={step(2)}>
            {hero.body}
          </p>

          <div className="hero-step mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={step(3)}>
            <a href={hero.primaryCta.href} className="btn-primary w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRightIcon className="btn-arrow" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Phones: experience line and a small portrait close the hero. */}
          <div className="hero-step mt-8 flex items-center gap-4 md:hidden" style={step(4)}>
            <img
              src={profile.portrait}
              alt={`${profile.name}, ${profile.role}`}
              width="64"
              height="64"
              decoding="async"
              className="w-16 h-16 rounded-full object-cover border border-line bg-surface shrink-0"
            />
            <p className="text-[15px] leading-snug">
              <span className="block font-semibold text-ink">{profile.name}</span>
              {hero.support.map((item) => (
                <span key={item} className="block text-subtle">
                  {item}
                </span>
              ))}
            </p>
          </div>

          {/* Tablet and desktop: plain experience line; portrait sits alongside. */}
          <p className="hero-step hidden md:block mt-8 text-[15px] text-subtle" style={step(4)}>
            {hero.support.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && (
                  <span aria-hidden="true" className="mx-2 text-mist">
                    |
                  </span>
                )}
                {item}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="hero-portrait hidden md:block justify-self-end">
          <img
            src={profile.portrait}
            alt={`${profile.name}, ${profile.role}`}
            width="360"
            height="360"
            fetchpriority="high"
            decoding="async"
            className="w-[200px] h-[200px] lg:w-[340px] lg:h-[340px] rounded-full object-cover bg-surface border border-line shadow-[0_24px_48px_-28px_rgba(15,23,42,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
