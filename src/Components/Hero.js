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
  const particlesRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move effect for interactive particles
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Advanced GSAP Timeline
    const tl = gsap.timeline();
    
    // Initial entrance animations with advanced easing
    tl.set([h11.current, h12.current, h13.current], { 
      y: 100, 
      opacity: 0,
      rotationX: 45,
      transformOrigin: "50% 50% -100px"
    })
    .set(imageRef.current, {
      x: 200,
      opacity: 0,
      scale: 0.5,
      rotationY: 45
    })
    .set(socialRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.8
    });

    // Staggered text animations with 3D effects
    tl.to(h11.current, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      clearProps: "all"
    })
    .to(h12.current, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "-=0.8")
    .to(h13.current, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "-=0.8")
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      clearProps: "all"
    }, "-=0.5")
    .to(socialRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "-=0.3");

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Rotating animation for tech icons
    gsap.to(".tech-icon", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // Parallax effect for particles
    gsap.to(".particle", {
      x: (i, target) => mousePosition.x * 100,
      y: (i, target) => mousePosition.y * 100,
      duration: 1,
      ease: "power2.out"
    });

    // Scroll-triggered animations
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

    // Continuous floating animation for main elements
    gsap.to([h11.current, h12.current, h13.current], {
      y: -10,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  // Generate tech stack icons for floating animation
  const techIcons = ['react', 'flutter', 'js', 'php', 'laravel', 'mysql'];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20 md:pt-24 lg:pt-28"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 animate-pulse"></div>
        
        {/* Floating tech icons */}
        {techIcons.map((tech, index) => (
          <div
            key={tech}
            className={`tech-icon absolute w-16 h-16 opacity-10 ${
              index % 2 === 0 ? 'text-purple-400' : 'text-pink-400'
            }`}
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <i className={`fab fa-${tech === 'js' ? 'js-square' : tech === 'php' ? 'php' : tech} text-4xl`}></i>
          </div>
        ))}

        {/* Advanced floating blobs with different animations */}
        <div className="floating-element absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="floating-element absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="floating-element absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Additional floating elements */}
        <div className="floating-element absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-blob animation-delay-1000"></div>
        <div className="floating-element absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-lg opacity-15 animate-blob animation-delay-3000"></div>
      </div>

      {/* Interactive Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1
                ref={h11}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="inline-block transform hover:scale-110 transition-transform duration-300">
                  Hi,👋
                </span>
                <br className="hidden sm:block" />
                <span className="inline-block transform hover:scale-110 transition-transform duration-300">
                  My Name is
                </span>
                <br className="hidden sm:block" />
              </h1>
              <h1
                ref={h12}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text bg-gradient text-transparent font-bold leading-tight"
              >
                <span className="inline-block transform hover:scale-110 transition-transform duration-300 hover:rotate-1">
                  {personalDetails.name.split(" ")[1] + " " + personalDetails.name.split(" ")[2]}
                </span>
              </h1>
              <h2
                ref={h13}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium"
              >
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  {personalDetails.tagline}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  Passionate software engineer crafting exceptional digital experiences for mobile and web platforms.
                </span>
              </p>
            </div>

            {/* Enhanced CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a 
                href="#contact" 
                className="group relative px-6 sm:px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image with advanced effects */}
          <div ref={imageRef} className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group">
              {/* Main image with enhanced border */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img 
                  src={personalDetails.img} 
                  alt={personalDetails.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Enhanced floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce animation-delay-1000 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -left-6 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce animation-delay-2000 shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
              <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce animation-delay-3000 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Links with hover animations */}
        <div ref={socialRef} className="mt-12 md:mt-16 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { url: socialMediaUrl.github, icon: 'fab fa-github', color: 'from-gray-400 to-gray-600' },
              { url: socialMediaUrl.linkdein, icon: 'fab fa-linkedin', color: 'from-blue-400 to-blue-600' },
              { url: socialMediaUrl.twitter, icon: 'fab fa-twitter', color: 'from-sky-400 to-sky-600' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <span className="relative z-10">
                  <i className={`${social.icon} text-lg sm:text-xl`}></i>
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          {/* Glowing effect */}
          <div className="absolute inset-0 w-6 h-10 border-2 border-purple-400/50 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
