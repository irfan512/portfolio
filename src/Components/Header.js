import React, { useState, useEffect } from "react";
import { personalDetails, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-elevation-2 border-b border-surface-200/50' 
        : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-primary-500/30 shadow-elevation-1">
              <img 
                className="w-full h-full object-cover" 
                src={personalDetails.img} 
                alt="logo" 
              />
            </div>
            <span className={`font-medium text-lg md:text-xl transition-colors duration-300 ${
              scrolled ? 'text-surface-900' : 'text-surface-900'
            }`}>
              {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary-600 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-surface-700' : 'text-surface-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Resume Download Button */}
          <a 
            href="/portfolio/resume.pdf" 
            download="Syed_Irfan_Haider_Resume.pdf"
            className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
              scrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-elevation-2' 
                : 'bg-primary-600 text-white hover:bg-primary-700 shadow-elevation-2'
            }`}
            title="Download Resume"
          >
            <span>📄</span>
            <span>Resume</span>
          </a>

          {/* Social Media Icons - Right Side */}
          <div className="flex items-center space-x-3">
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer noopener"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                scrolled 
                  ? 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600' 
                  : 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600'
              }`}
              title="GitHub Profile"
            >
              <i className="fab fa-github text-sm"></i>
            </a>
            <a 
              href={linkdein} 
              target="_blank" 
              rel="noreferrer noopener"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                scrolled 
                  ? 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600' 
                  : 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600'
              }`}
              title="LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-sm"></i>
            </a>
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                scrolled 
                  ? 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600' 
                  : 'bg-surface-100 text-surface-700 hover:bg-primary-100 hover:text-primary-600'
              }`}
              title="Twitter Profile"
            >
              <i className="fab fa-twitter text-sm"></i>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleClass} 
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            >
              <div className={`w-5 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-surface-700' : 'bg-surface-700'
              } ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-surface-700' : 'bg-surface-700'
              } ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-surface-700' : 'bg-surface-700'
              } ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${
          !isOpen ? 'hidden' : 'block'
        } md:hidden`}>
          <div className={`py-4 space-y-2 border-t rounded-b-lg transition-all duration-300 ${
            scrolled 
              ? 'border-surface-200/50 bg-white/95 backdrop-blur-md' 
              : 'border-surface-200/50 bg-white/95 backdrop-blur-md shadow-elevation-3'
          }`}>
            <button
              onClick={() => scrollToSection('home')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
            >
              Contact
            </button>
            
            {/* Resume Download in Mobile Menu */}
            <a 
              href="/portfolio/resume.pdf" 
              download="Syed_Irfan_Haider_Resume.pdf"
              className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm ${
                scrolled 
                  ? 'text-surface-700 hover:bg-surface-100 hover:text-primary-600' 
                  : 'text-surface-700 hover:bg-surface-100 hover:text-primary-600'
              }`}
              title="Download Resume"
            >
              📄 Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
