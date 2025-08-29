import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails, socialMediaUrl } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef();
  const imageRef = useRef();
  const socialRef = useRef();
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const codeRef = useRef();

  useEffect(() => {
    // Professional entrance animations
    const tl = gsap.timeline();
    
    // Clean entrance for text elements
    tl.set([h11.current, h12.current, h13.current], { 
      y: 30, 
      opacity: 0
    })
    .set(imageRef.current, {
      x: 50,
      opacity: 0,
      scale: 0.95
    })
    .set(socialRef.current, {
      y: 20,
      opacity: 0
    });

    // Smooth text animations
    tl.to(h11.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(h12.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(h13.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3")
    .to(socialRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");

    // Subtle floating animation for code elements
    gsap.to(".code-line", {
      y: -5,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });

    // Scroll-triggered opacity
    gsap.fromTo(heroRef.current,
      { opacity: 1 },
      {
        opacity: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Generate code lines for background
  const codeLines = [
    "const developer = {",
    "  name: 'Irfan Haider',",
    "  role: 'Software Engineer',",
    "  skills: ['Flutter', 'React', 'Laravel'],",
    "  passion: 'Building amazing apps'",
    "};",
    "",
    "function createPortfolio() {",
    "  return <AmazingWebsite />;",
    "}",
    "",
    "// Let's build something great together",
    "developer.contact();"
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20 md:pt-24 lg:pt-28"
    >
      {/* Professional Code Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        {/* Animated code lines */}
        <div ref={codeRef} className="absolute inset-0 font-mono text-blue-400/20 text-sm md:text-base">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`code-line absolute ${
                index < 6 ? 'left-8' : 'right-8'
              }`}
              style={{
                top: `${15 + (index * 4)}%`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Professional accent elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-blue-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Professional Text Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1
                ref={h11}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-300">Hi, I'm</span>
                <br className="hidden sm:block" />
                <span className="text-blue-400">Irfan Haider</span>
              </h1>
              <h2
                ref={h12}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 font-medium"
              >
                Software Engineer
              </h2>
              <p
                ref={h13}
                className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Crafting exceptional digital experiences with clean code and innovative solutions. 
                Specialized in mobile and web development.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center border border-blue-500/20"
              >
                <span className="flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-3 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Professional Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group">
              {/* Main image with professional border */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
                <img 
                  src={personalDetails.img} 
                  alt={personalDetails.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Professional floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
              
              {/* Tech stack badges */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-500/30">
                  Flutter
                </div>
                <div className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-500/30">
                  React
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Social Links */}
        <div ref={socialRef} className="mt-12 md:mt-16 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { url: socialMediaUrl.github, icon: 'fab fa-github', label: 'GitHub' },
              { url: socialMediaUrl.linkdein, icon: 'fab fa-linkedin', label: 'LinkedIn' },
              { url: socialMediaUrl.twitter, icon: 'fab fa-twitter', label: 'Twitter' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg flex items-center gap-2 text-white hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <i className={`${social.icon} text-lg`}></i>
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="text-blue-400/60 text-xs font-medium">Scroll Down</div>
          <div className="w-6 h-10 border border-blue-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
