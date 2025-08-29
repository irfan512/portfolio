import React from "react";
import { personalDetails, socialMediaUrl } from "../Details";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
                <img 
                  className="w-full h-full object-cover" 
                  src={personalDetails.img} 
                  alt="logo" 
                />
              </div>
              <span className="font-bold text-xl">
                {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
              </span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Crafting exceptional digital experiences with passion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href={socialMediaUrl.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href={socialMediaUrl.linkdein} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href={socialMediaUrl.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 {personalDetails.name}. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
