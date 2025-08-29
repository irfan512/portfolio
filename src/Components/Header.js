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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src={personalDetails.img} 
                alt="logo" 
              />
            </div>
            <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-purple-500 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Social Media Icons - Right Side */}
          <div className="flex items-center space-x-3">
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer noopener"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                scrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
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
                  ? 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
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
                  ? 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
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
                scrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-700' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${
          !isOpen ? 'hidden' : 'block'
        } md:hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200/50">
            <button
              onClick={() => scrollToSection('home')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
