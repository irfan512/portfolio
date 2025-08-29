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
      className="py-20 bg-white relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career journey in software development and mobile applications
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div ref={workRef} className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
              </div>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {workDetails.map((work, index) => (
                <div key={index} className="experience-item">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
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
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
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
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-green-600 text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {eduDetails.map((edu, index) => (
                <div key={index} className="experience-item">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-200 hover:shadow-md transition-all duration-300">
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
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
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
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
