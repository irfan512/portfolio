import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { profile, navLinks } from "../Details";
import { MenuIcon, CloseIcon } from "./Icons";

// Page sections mapped to the navigation item they belong under.
const SECTION_TO_NAV = {
  work: "work",
  services: "services",
  ai: "services",
  experience: "about",
  about: "about",
  process: "about",
  contact: "contact",
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [indicator, setIndicator] = useState({ x: 0, y: 0, w: 0, visible: false });

  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const desktopNavRef = useRef(null);
  const linkRefs = useRef({});

  // Header elevation after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section: whichever section crosses a band just below the header.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const sections = Object.keys(SECTION_TO_NAV)
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const hero = document.getElementById("top");

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            setActive(entry.target.id === "top" ? null : SECTION_TO_NAV[entry.target.id] || null);
          });
        },
        { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
      );
      sections.forEach((s) => observer.observe(s));
      if (hero) observer.observe(hero);
    } catch (error) {
      // The active indicator is an enhancement; navigation works without it.
      return undefined;
    }
    return () => observer.disconnect();
  }, []);

  // Position the sliding underline under the active desktop link.
  const placeIndicator = useCallback(() => {
    const link = active && linkRefs.current[active];
    if (!link || !desktopNavRef.current) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    setIndicator({
      x: link.offsetLeft,
      y: link.offsetTop + link.offsetHeight + 4,
      w: link.offsetWidth,
      visible: true,
    });
  }, [active]);

  useLayoutEffect(() => {
    placeIndicator();
  }, [placeIndicator]);

  useEffect(() => {
    window.addEventListener("resize", placeIndicator);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeIndicator);
    return () => window.removeEventListener("resize", placeIndicator);
  }, [placeIndicator]);

  // Mobile menu: focus the first link on open; Escape, outside clicks and
  // tabbing away all close it; widening to desktop closes it.
  useEffect(() => {
    if (!isOpen) return undefined;
    const frame = requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  const onHeaderBlur = (e) => {
    if (isOpen && headerRef.current && !headerRef.current.contains(e.relatedTarget)) setIsOpen(false);
  };

  // Choosing a destination closes the menu and moves focus to that section,
  // so keyboard and screen-reader users continue from where they landed.
  const goTo = (e, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setIsOpen(false);
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <header
      ref={headerRef}
      onBlur={onHeaderBlur}
      data-scrolled={scrolled || isOpen ? "true" : "false"}
      className="site-header sticky top-0 z-50 bg-canvas/90 backdrop-blur-sm"
    >
      <div className="page flex items-center justify-between h-16">
        <a href="#top" className="inline-flex items-center py-2 font-bold text-ink text-[17px] tracking-tight">
          {profile.name}
        </a>

        <nav ref={desktopNavRef} className="relative hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              ref={(el) => {
                linkRefs.current[link.id] = el;
              }}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`py-1 text-[15px] font-medium transition-colors ${
                active === link.id ? "text-ink" : "text-slate hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className="nav-indicator pointer-events-none absolute left-0 top-0 h-[2px] rounded-full bg-accent"
            style={{
              width: indicator.w,
              transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
          <a href="#contact" className="btn-primary min-h-[40px] h-10 px-4 text-[15px]">
            Discuss a project
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="menu-toggle md:hidden -mr-2 w-12 h-12 inline-flex items-center justify-center rounded-lg text-ink"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        data-open={isOpen ? "true" : "false"}
        className="menu-panel md:hidden absolute inset-x-0 top-full border-b border-line bg-canvas shadow-[0_16px_32px_-20px_rgba(15,23,42,0.35)]"
      >
        <div className="page py-2">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              ref={i === 0 ? firstMobileLinkRef : undefined}
              href={`#${link.id}`}
              onClick={(e) => goTo(e, link.id)}
              aria-current={active === link.id ? "true" : undefined}
              className="flex items-center justify-between min-h-[52px] text-[17px] font-medium text-ink border-b border-line"
            >
              {link.label}
              {active === link.id && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />}
            </a>
          ))}
          <a href="#contact" onClick={(e) => goTo(e, "contact")} className="btn-primary w-full my-4">
            Discuss a project
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
