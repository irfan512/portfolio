import React from "react";
import { profile, navLinks, contactDetails, socialLinks } from "../Details";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink text-haze border-t border-white/10">
      <div className="page py-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <p className="font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-[15px]">
            {profile.role}. {profile.discipline}.
          </p>
          <p className="mt-2 text-[15px] wrap-anywhere">
            <a
              href={`mailto:${contactDetails.email}`}
              className="link text-mist decoration-white/30 hover:text-white hover:decoration-white"
            >
              {contactDetails.email}
            </a>
          </p>
        </div>

        <div className="md:text-right">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-flex items-center min-h-[44px] text-[15px] text-mist hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-1 flex gap-1 -ml-2.5 md:ml-0 md:-mr-2.5 md:justify-end">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-mist hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-mist hover:text-white hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="page py-5 text-sm">
          &copy; {year} {profile.name}. Based in {profile.location}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
