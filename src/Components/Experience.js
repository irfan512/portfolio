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
      className="py-24 bg-gradient-to-br from-surface-50 via-white to-surface-100 relative overflow-hidden"
    >
      {/* Background Elements - Subtle Material 3 style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-surface-200 rounded-full mix-blend-multiply filter blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-100 rounded-full mix-blend-multiply filter blur-lg"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-surface-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-display-small md:text-display-medium font-normal text-surface-900 mb-6">
            Professional <span className="text-primary-600">Experience</span>
          </h2>
          <p className="text-body-large text-surface-600 max-w-3xl mx-auto">
            My journey in software development, from mobile apps to web solutions
          </p>
          <div className="w-32 h-1 bg-primary-500 mx-auto rounded-full mt-8 shadow-elevation-2 opacity-80"></div>
        </div>

        {/* Work Experience */}
        <div ref={workRef} className="mb-20">
          <h3 className="text-headline-medium font-normal text-surface-900 mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-6">
            {workDetails.map((work, index) => (
              <div 
                key={index} 
                className="experience-item bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-3 p-6 border border-surface-200 hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-elevation-2">
                        <i className="fas fa-briefcase text-white text-lg"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-title-large font-medium text-surface-900 mb-2">
                          {work.Position}
                        </h4>
                        <div className="space-y-1 text-surface-600">
                          <p className="font-medium text-primary-600">{work.Company}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-2">
                              <i className="fas fa-map-marker-alt text-surface-400"></i>
                              {work.Location}
                            </span>
                            <span className="flex items-center gap-2">
                              <i className="fas fa-clock text-surface-400"></i>
                              {work.Type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg border border-primary-200">
                      {work.Duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef}>
          <h3 className="text-headline-medium font-normal text-surface-900 mb-8 text-center">
            Education
          </h3>
          <div className="space-y-6">
            {eduDetails.map((edu, index) => (
              <div 
                key={index} 
                className="experience-item bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-3 p-6 border border-surface-200 hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-elevation-2">
                        <i className="fas fa-graduation-cap text-white text-lg"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-title-large font-medium text-surface-900 mb-2">
                          {edu.Position}
                        </h4>
                        <div className="space-y-1 text-surface-600">
                          <p className="font-medium text-primary-600">{edu.Company}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-2">
                              <i className="fas fa-map-marker-alt text-surface-400"></i>
                              {edu.Location}
                            </span>
                            <span className="flex items-center gap-2">
                              <i className="fas fa-clock text-surface-400"></i>
                              {edu.Type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg border border-primary-200">
                      {edu.Duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
