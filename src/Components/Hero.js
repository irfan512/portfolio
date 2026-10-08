import React, { useEffect, useState } from "react";
import { profile, hero } from "../Details";
import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons";

const step = (n) => ({ "--step": n });

// Longest entrance (portrait: 180ms delay + 650ms) with a margin.
const ENTRANCE_MS = 1100;

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

// Phones: identity first, a short headline, one primary action.
function MobileHero() {
  const m = hero.mobile;
  const [lead, accent, rest] = m.headline;

  return (
    <div className="page md:hidden">
      <div className="hero-step flex items-center gap-4" style={step(0)}>
        <img
          src={profile.portrait}
          alt={profile.name}
          width="60"
          height="60"
          fetchpriority="high"
          decoding="async"
          className="w-[60px] h-[60px] rounded-full object-cover bg-surface border-2 border-white ring-1 ring-line shadow-[0_6px_16px_-8px_rgba(15,23,42,0.4)] shrink-0"
        />
        <p className="leading-tight">
          <span className="block text-[17px] font-semibold text-ink">{profile.name}</span>
          <span className="block mt-1 text-[15px] text-subtle">{profile.role}</span>
        </p>
      </div>

      {/* Each sentence is an inline-block, so the break falls between them
          when space runs out instead of being forced at every width. */}
      <h1 className="hero-step hero-mobile-title mt-6" style={step(1)}>
        <span className="inline-block">
          {lead} <span className="text-accent">{accent}</span>
        </span>{" "}
        <span className="inline-block">{rest}</span>
      </h1>

      <div className="hero-step" style={step(2)}>
        <p className="mt-4 text-[17px] leading-relaxed text-slate">{m.body}</p>

        <a href={m.primaryCta.href} className="btn-primary w-full min-h-[52px] mt-6">
          {m.primaryCta.label}
          <ArrowRightIcon className="btn-arrow" />
        </a>

        <p className="mt-3 text-center">
          <a href={m.secondaryCta.href} className="link min-h-[44px] no-underline">
            {m.secondaryCta.label}
            <ArrowUpRightIcon className="link-icon" />
          </a>
        </p>

        <p className="mt-3 text-center text-[15px] text-subtle">
          <span className="whitespace-nowrap">{m.support[0]}</span>
          <span aria-hidden="true" className="mx-1.5 text-mist">
            ·
          </span>
          <span className="whitespace-nowrap">{m.support[1]}</span>
        </p>
      </div>
    </div>
  );
}

// Tablet and desktop: unchanged two-column composition.
function WideHero() {
  return (
    <div className="page hidden md:grid md:grid-cols-[minmax(0,1fr)_200px] md:gap-10 md:items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
      <div>
        <p className="hero-step text-[15px] font-semibold text-accent" style={step(0)}>
          {hero.eyebrow}
        </p>

        <h1
          className="hero-step headline mt-3 md:text-[2.375rem] md:leading-[1.14] lg:text-[3rem] xl:text-[3.25rem] lg:leading-[1.1] max-w-[18ch]"
          style={step(1)}
        >
          <Headline text={hero.headline} />
        </h1>

        <p className="hero-step lead mt-5" style={step(2)}>
          {hero.body}
        </p>

        <div className="hero-step mt-7 flex flex-row flex-wrap gap-3" style={step(3)}>
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
            <ArrowRightIcon className="btn-arrow" />
          </a>
          <a href={hero.secondaryCta.href} className="btn-secondary">
            {hero.secondaryCta.label}
          </a>
        </div>

        <p className="hero-step mt-8 text-[15px] text-subtle" style={step(4)}>
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

      <div className="hero-portrait justify-self-end">
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
  );
}

function Hero() {
  // Once the entrance has played, retire it. Otherwise an element that goes
  // display:none and back (resizing across a breakpoint) would replay it.
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), ENTRANCE_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      data-entered={entered ? "" : undefined}
      className="hero pt-7 pb-9 md:pt-14 md:pb-20 lg:pt-20 lg:pb-24"
    >
      <MobileHero />
      <WideHero />
    </section>
  );
}

export default Hero;
