import React from "react";
import { personalDetails, socialMediaUrl } from "../Details";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-surface-900 via-primary-900 to-surface-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30 shadow-elevation-1">
                <img 
                  className="w-full h-full object-cover" 
                  src={personalDetails.img} 
                  alt="logo" 
                />
              </div>
              <span className="font-medium text-xl">
                {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
              </span>
            </div>
            <p className="text-surface-300 max-w-xs text-body-medium">
              Crafting exceptional digital experiences with passion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-title-large font-medium">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-surface-300 hover:text-primary-400 transition-colors duration-200 text-body-medium">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-surface-300 hover:text-primary-400 transition-colors duration-200 text-body-medium">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-surface-300 hover:text-primary-400 transition-colors duration-200 text-body-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-300 hover:text-primary-400 transition-colors duration-200 text-body-medium">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/portfolio/resume.pdf" 
                  download="Syed_Irfan_Haider_Resume.pdf"
                  className="text-surface-300 hover:text-primary-400 transition-colors duration-200 text-body-medium"
                >
                  📄 Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-title-large font-medium">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href={socialMediaUrl.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-500/20 transform hover:scale-110 transition-all duration-200 shadow-elevation-1 hover:shadow-elevation-2"
                title="GitHub Profile"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a 
                href={socialMediaUrl.linkdein} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary-500/20 transform hover:scale-110 transition-all duration-200 shadow-elevation-1 hover:shadow-elevation-2"
                title="LinkedIn Profile"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a 
                href={socialMediaUrl.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-tertiary-500/20 transform hover:scale-110 transition-all duration-200 shadow-elevation-1 hover:shadow-elevation-2"
                title="Twitter Profile"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-surface-300 text-body-medium">
            © 2024 {personalDetails.name}. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
