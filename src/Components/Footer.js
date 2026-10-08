import React from "react";
import { profile, navLinks, contactDetails, socialLinks } from "../Details";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="page py-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div>
          <p className="font-bold text-ink">{profile.name}</p>
          <p className="mt-1 text-[15px]">
            {profile.role}. {profile.discipline}.
          </p>
          <p className="mt-3 text-[15px]">
            <a href={`mailto:${contactDetails.email}`} className="link">
              {contactDetails.email}
            </a>
          </p>
        </div>

        <div className="md:text-right">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-flex items-center py-2 text-[15px] hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-3 flex gap-1 md:justify-end">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center justify-center w-11 h-11 -m-1.5 rounded-lg text-slate hover:text-ink hover:bg-canvas transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center w-11 h-11 -m-1.5 rounded-lg text-slate hover:text-ink hover:bg-canvas transition-colors"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="page py-5 text-sm text-subtle">
          &copy; {year} {profile.name}. Based in {profile.location}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
