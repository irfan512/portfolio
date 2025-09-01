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
        opacity: 0.95,
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
      y: -3,
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-surface-100 relative overflow-hidden pt-20 md:pt-24 lg:pt-28"
    >
      {/* Background Elements - Subtle Material 3 style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-surface-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-surface-100 rounded-full mix-blend-multiply filter blur-xl opacity-25"></div>
        
        {/* Subtle floating particles */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-primary-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-surface-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-surface-900 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1
                ref={h11}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-surface-900"
              >
                Hi <br className="hidden sm:block" />
                My Name is<br className="hidden sm:block" />
              </h1>
              <h1
                ref={h12}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-600 font-normal leading-tight"
              >
                {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
              </h1>
              <h2
                ref={h13}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-surface-600 font-normal"
              >
                {personalDetails.tagline}
              </h2>
              <p 
                ref={descriptionRef}
                className="text-body-large text-surface-500 max-w-lg mx-auto lg:mx-0"
              >
                Creative Software Engineer transforming ideas into seamless digital solutions across mobile & web platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="btn-primary text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-outlined text-center"
              >
                Get In Touch
              </a>
              <a 
                href="/portfolio/resume.pdf" 
                download="Syed_Irfan_Haider_Resume.pdf"
                className="btn-secondary text-center flex items-center justify-center space-x-2"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 shadow-elevation-4">
                <img 
                  src={personalDetails.img} 
                  alt={personalDetails.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle floating elements around image */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-surface-400 rounded-full animate-bounce opacity-50"></div>
              <div className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary-300 rounded-full animate-pulse opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
