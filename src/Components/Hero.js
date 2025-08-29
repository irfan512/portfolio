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
  const descriptionRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Professional and clean initial animations
    tl.fromTo(h11.current,
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: "power2.out" 
      }
    )
    .fromTo(h12.current,
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.4"
    )
    .fromTo(h13.current,
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.95
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.3"
    )
    .fromTo(imageRef.current,
      { 
        x: 50, 
        opacity: 0, 
        scale: 0.9
      },
      { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { 
        y: 30, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6, 
        ease: "power2.out" 
      },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { 
        y: 40, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6, 
        ease: "power2.out" 
      },
      "-=0.3"
    );

    // Scroll animations
    gsap.fromTo(heroRef.current,
      { opacity: 1 },
      {
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // Add subtle floating animation for the main heading only
    gsap.to(h11.current, {
      y: -5,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20 md:pt-24 lg:pt-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Subtle floating particles */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1
                ref={h11}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Hi <br className="hidden sm:block" />
                My Name is<br className="hidden sm:block" />
              </h1>
              <h1
                ref={h12}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient text-transparent font-bold leading-tight"
              >
                {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
              </h1>
              <h2
                ref={h13}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium"
              >
                {personalDetails.tagline}
              </h2>
              <p 
                ref={descriptionRef}
                className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0"
              >
                Creative Software Engineer transforming ideas into seamless digital solutions across mobile & web platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a 
                href="/portfolio/resume.pdf" 
                download="Syed_Irfan_Haider_Resume.pdf"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <img 
                  src={personalDetails.img} 
                  alt={personalDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Social Links */}
          {/* <div ref={socialRef} className="mt-12 md:mt-16 text-center">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a 
                href={socialMediaUrl.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a 
                href={socialMediaUrl.linkdein} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
              <a 
                href={socialMediaUrl.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <i className="fab fa-twitter text-lg sm:text-xl"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
