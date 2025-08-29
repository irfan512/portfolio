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
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(workRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(eduRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    // Animate timeline items
    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');
    if (timelineItems) {
      gsap.fromTo(timelineItems,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
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
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #6366f1 25%, transparent 25%), linear-gradient(-45deg, #6366f1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #6366f1 75%), linear-gradient(-45deg, transparent 75%, #6366f1 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional growth and educational achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div ref={workRef} className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Work <span className="text-purple-600">Experience</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {workDetails.map((work, index) => (
                <div key={index} className="timeline-item relative mb-8 ml-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 top-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-briefcase text-white text-sm"></i>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-purple-500">
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">{work.Position}</h4>
                      <div className="flex items-center space-x-2 text-purple-600 font-medium">
                        <i className="fas fa-building text-sm"></i>
                        <span>{work.Company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-map-marker-alt text-sm"></i>
                        <span>{work.Location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {work.Type}
                        </span>
                        <span className="text-gray-500 text-sm font-medium">
                          {work.Duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <span className="text-purple-600">Education</span> & Training
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {eduDetails.map((edu, index) => (
                <div key={index} className="timeline-item relative mb-8 ml-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-graduation-cap text-white text-sm"></i>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-500">
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">{edu.Position}</h4>
                      <div className="flex items-center space-x-2 text-blue-600 font-medium">
                        <i className="fas fa-university text-sm"></i>
                        <span>{edu.Company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <i className="fas fa-map-marker-alt text-sm"></i>
                        <span>{edu.Location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {edu.Type}
                        </span>
                        <span className="text-gray-500 text-sm font-medium">
                          {edu.Duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for the Next Chapter
            </h3>
            <p className="text-gray-600 max-w-2xl mb-6">
              I'm always looking for new opportunities to grow, learn, and contribute to amazing projects. 
              Let's work together to create something extraordinary!
            </p>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
