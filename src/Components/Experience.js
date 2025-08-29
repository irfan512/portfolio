import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workDetails, eduDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef();
  const headerRef = useRef();
  const timelineRef = useRef();

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
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(timelineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Animate timeline items
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    if (timelineItems) {
      gsap.fromTo(timelineItems,
        { x: -100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: timelineRef.current,
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
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            A timeline of my professional growth, from early beginnings to current achievements
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 rounded-full shadow-2xl"></div>

          {/* Work Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
                <i className="fas fa-briefcase text-2xl text-purple-400"></i>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>
            </div>

            <div className="space-y-12">
              {workDetails.map((work, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 shadow-2xl z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Position & Company */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-2xl font-bold text-white leading-tight">
                          {work.Position}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                          <i className="fas fa-building text-purple-400"></i>
                          <span className="text-lg text-purple-300 font-semibold">
                            {work.Company}
                          </span>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <i className="fas fa-map-marker-alt text-blue-400 mb-2"></i>
                          <p className="text-sm text-gray-300">{work.Location}</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <i className="fas fa-clock text-green-400 mb-2"></i>
                          <p className="text-sm text-gray-300">{work.Type}</p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-purple-400/30">
                          <i className="fas fa-calendar-alt text-purple-400"></i>
                          <span className="text-purple-300 font-medium">{work.Duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
                <i className="fas fa-graduation-cap text-2xl text-blue-400"></i>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
            </div>

            <div className="space-y-12">
              {eduDetails.map((edu, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-2xl z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Position & Company */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-2xl font-bold text-white leading-tight">
                          {edu.Position}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                          <i className="fas fa-university text-blue-400"></i>
                          <span className="text-lg text-blue-300 font-semibold">
                            {edu.Company}
                          </span>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <i className="fas fa-map-marker-alt text-blue-400 mb-2"></i>
                          <p className="text-sm text-gray-300">{edu.Location}</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <i className="fas fa-clock text-green-400 mb-2"></i>
                          <p className="text-sm text-gray-300">{edu.Type}</p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                          <i className="fas fa-calendar-alt text-blue-400"></i>
                          <span className="text-blue-300 font-medium">{edu.Duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Our Journey Together? 🚀
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              With years of experience and a passion for innovation, I'm ready to bring your ideas to life. 
              Let's create something amazing together!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              <i className="fas fa-rocket mr-3"></i>
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
