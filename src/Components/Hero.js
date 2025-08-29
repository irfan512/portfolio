import React, { useRef, useEffect } from "react";
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
  const statsRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    // Enterprise-level entrance animations
    const tl = gsap.timeline();
    
    // Sophisticated entrance for text elements
    tl.set([h11.current, h12.current, h13.current], { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    })
    .set(imageRef.current, {
      x: 100,
      opacity: 0,
      scale: 0.8,
      rotationY: 15
    })
    .set(socialRef.current, {
      y: 40,
      opacity: 0,
      scale: 0.9
    })
    .set(statsRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.95
    });

    // Premium text animations with sophisticated timing
    tl.to(h11.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(h12.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(h13.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.8")
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      ease: "power3.out"
    }, "-=0.6")
    .to(statsRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4")
    .to(socialRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3");

    // Advanced background animations
    gsap.to(".floating-shape", {
      y: -20,
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    gsap.to(".pulse-element", {
      scale: 1.1,
      opacity: 0.7,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Sophisticated scroll-triggered effects
    gsap.fromTo(heroRef.current,
      { opacity: 1 },
      {
        opacity: 0.98,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // Continuous premium animations
    gsap.to([h11.current, h12.current], {
      y: -8,
      duration: 6,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-20 md:pt-24 lg:pt-28"
    >
      {/* Enterprise-Level Background */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/3 to-purple-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
        
        {/* Sophisticated geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="floating-shape absolute top-20 left-20 w-32 h-32 border border-blue-500/10 rounded-full"></div>
          <div className="floating-shape absolute top-40 right-32 w-24 h-24 border border-indigo-500/10 rounded-full"></div>
          <div className="floating-shape absolute bottom-32 left-1/4 w-40 h-40 border border-purple-500/10 rounded-full"></div>
          <div className="floating-shape absolute top-1/3 right-1/4 w-28 h-28 border border-blue-500/8 rounded-full"></div>
        </div>

        {/* Advanced grid system */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Premium accent elements */}
        <div className="pulse-element absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="pulse-element absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
        <div className="pulse-element absolute bottom-1/4 left-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
        
        {/* Enterprise-level visual elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enterprise-Level Content */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              {/* Premium greeting */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>

              <h1
                ref={h11}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="text-gray-300 font-light">Senior</span>
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Software Engineer
                </span>
              </h1>
              
              <h2
                ref={h12}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-medium"
              >
                Irfan Haider
              </h2>
              
              <p
                ref={h13}
                className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Architecting scalable solutions and leading development teams with 5+ years of expertise in 
                enterprise applications, cloud infrastructure, and cutting-edge technologies.
              </p>
            </div>

            {/* Enterprise CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 text-center overflow-hidden border border-blue-500/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  View Portfolio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
              
              <a 
                href="#contact" 
                className="group px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-500 text-center text-lg backdrop-blur-sm"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Enterprise Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">5+</div>
                <div className="text-sm text-gray-400 font-medium">Years Experience</div>
                <div className="text-xs text-gray-500 mt-1">Senior Level</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">100+</div>
                <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
                <div className="text-xs text-gray-500 mt-1">Enterprise Scale</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">50+</div>
                <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
                <div className="text-xs text-gray-500 mt-1">Global Reach</div>
              </div>
            </div>
          </div>

          {/* Premium Profile Section */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group">
              {/* Enterprise-level image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 p-2 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl"></div>
                <img 
                  src={personalDetails.img} 
                  alt={personalDetails.name}
                  className="relative z-10 w-full h-full object-cover rounded-2xl"
                />
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Enterprise floating elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-2xl animate-pulse animation-delay-1000"></div>
              
              {/* Senior developer badges */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-blue-500/30 shadow-lg">
                  Senior Dev
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-indigo-500/30 shadow-lg">
                  Team Lead
                </div>
              </div>

              {/* Premium tech stack indicators */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fab fa-react text-white text-xl"></i>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fab fa-flutter text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Social Links */}
        <div ref={socialRef} className="mt-16 md:mt-20 text-center">
          <div className="flex justify-center space-x-6">
            {[
              { url: socialMediaUrl.github, icon: 'fab fa-github', label: 'GitHub', color: 'from-gray-600 to-gray-700' },
              { url: socialMediaUrl.linkdein, icon: 'fab fa-linkedin', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
              { url: socialMediaUrl.twitter, icon: 'fab fa-twitter', label: 'Twitter', color: 'from-sky-500 to-sky-600' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl flex items-center gap-3 text-white hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-500 border border-slate-600/30 hover:border-slate-500/50 shadow-lg hover:shadow-xl"
              >
                <i className={`${social.icon} text-xl`}></i>
                <span className="text-sm font-semibold">{social.label}</span>
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <div className="text-blue-400/60 text-sm font-medium tracking-wider">EXPLORE PORTFOLIO</div>
          <div className="relative">
            <div className="w-8 h-12 border-2 border-blue-500/30 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-blue-400/60 rounded-full mt-3 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 w-8 h-12 border border-blue-400/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
