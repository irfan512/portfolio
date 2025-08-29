import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workDetails, eduDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef();
  const headerRef = useRef();
  const workRef = useRef();
  const eduRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(headerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(workRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(eduRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    // Animate experience items
    const experienceItems = sectionRef.current?.querySelectorAll('.experience-item');
    if (experienceItems) {
      gsap.fromTo(experienceItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce animation-delay-1500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career journey in software development and mobile applications
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div ref={workRef} className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-briefcase text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full shadow-md"></div>
            </div>

            <div className="space-y-6">
              {workDetails.map((work, index) => (
                <div key={index} className="experience-item">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/60 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:bg-white/90">
                    {/* Position & Company */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {work.Position}
                      </h4>
                      <div className="flex items-center space-x-2 text-blue-600 font-medium">
                        <i className="fas fa-building text-sm"></i>
                        <span>{work.Company}</span>
                      </div>
                    </div>

                    {/* Details Row */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-map-marker-alt text-sm text-gray-500"></i>
                        <span className="text-sm">{work.Location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-clock text-sm text-gray-500"></i>
                        <span className="text-sm">{work.Type}</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                        {work.Duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-graduation-cap text-green-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full shadow-md"></div>
            </div>

            <div className="space-y-6">
              {eduDetails.map((edu, index) => (
                <div key={index} className="experience-item">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/60 hover:border-green-200 hover:shadow-lg transition-all duration-300 hover:bg-white/90">
                    {/* Position & Company */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.Position}
                      </h4>
                      <div className="flex items-center space-x-2 text-green-600 font-medium">
                        <i className="fas fa-university text-sm"></i>
                        <span>{edu.Company}</span>
                      </div>
                    </div>

                    {/* Details Row */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-map-marker-alt text-sm text-gray-500"></i>
                        <span className="text-sm">{edu.Location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-clock text-sm text-gray-500"></i>
                        <span className="text-sm">{edu.Type}</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-sm font-medium shadow-sm">
                        {edu.Duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-white/60 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
