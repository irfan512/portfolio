import React, { useState, useEffect } from "react";
import { profile, navLinks } from "../Details";
import { MenuIcon, CloseIcon } from "./Icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-canvas/90 backdrop-blur-sm border-b transition-colors ${
        scrolled || isOpen ? "border-line" : "border-transparent"
      }`}
    >
      <div className="page flex items-center justify-between h-16">
        <a href="#top" className="inline-flex items-center py-2 font-bold text-ink text-[17px] tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[15px] font-medium text-slate hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary h-10 min-h-0 px-4">
            Discuss a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden -mr-2 w-11 h-11 inline-flex items-center justify-center rounded-lg text-ink hover:bg-accent-soft"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="md:hidden border-t border-line bg-canvas" aria-label="Mobile">
          <div className="page py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[15px] font-medium text-ink border-b border-line"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full my-4"
            >
              Discuss a project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
