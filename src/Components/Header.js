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
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
              <img 
                className="w-full h-full object-cover" 
                src={personalDetails.img} 
                alt="logo" 
              />
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div onClick={toggleClass} className="cursor-pointer md:hidden">
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-gray-900' : 'bg-white'
            } ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 my-1 transition-all duration-300 ${
              scrolled ? 'bg-gray-900' : 'bg-white'
            } ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-gray-900' : 'bg-white'
            } ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${
          !isOpen ? 'hidden' : 'block'
        } md:block`}>
          <div className="md:flex md:justify-between md:items-center">
            {/* Navigation Links */}
            <ul className={`font-medium md:flex md:items-center md:space-x-8 py-4 md:py-0 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Social Links */}
            <ul className="flex justify-center items-center space-x-4 py-4 md:py-0">
              <li>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    scrolled 
                      ? 'bg-gray-100 text-gray-900 hover:bg-purple-100' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a 
                  href={linkdein} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    scrolled 
                      ? 'bg-gray-100 text-gray-900 hover:bg-purple-100' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a 
                  href={twitter} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    scrolled 
                      ? 'bg-gray-100 text-gray-900 hover:bg-purple-100' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
