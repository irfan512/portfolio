import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef();
  const skillsRef = useRef();
  const techGridRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(skillsRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(techGridRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Animate tech stack items
    const techItems = techGridRef.current?.querySelectorAll('.tech-item');
    if (techItems) {
      gsap.fromTo(techItems,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techCategories = {
    "Frontend Development": {
      icon: "fas fa-globe",
      description: "Creating responsive and interactive web experiences",
      technologies: ["html", "css", "js", "react"]
    },
    "Backend Development": {
      icon: "fas fa-server", 
      description: "Building robust server-side applications and APIs",
      technologies: ["php", "laravel", "mysql"]
    },
    "Mobile Development": {
      icon: "fas fa-mobile-alt",
      description: "Developing cross-platform mobile applications",
      technologies: ["flutter"]
    },
    "Development Tools": {
      icon: "fas fa-tools",
      description: "Essential tools for efficient development workflow",
      technologies: ["git", "github", "vscode", "postman", "figma"]
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-surface-50 via-white to-surface-100 relative overflow-hidden"
    >
      {/* Background Elements - Subtle Material 3 style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-surface-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-surface-100 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={skillsRef}>
          <h2 className="text-display-small md:text-display-medium font-normal text-surface-900 mb-6">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-body-large text-surface-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies to create amazing digital experiences
          </p>
          <div className="w-32 h-1 bg-primary-500 mx-auto rounded-full mt-8 shadow-elevation-2 opacity-80"></div>
        </div>

        {/* Skills Grid - Unified Design */}
        <div ref={techGridRef} className="space-y-8">
          {Object.entries(techCategories).map(([category, data], index) => (
            <div key={category} className="bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300 border border-surface-200 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 border-b border-surface-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-elevation-2">
                    <i className={`${data.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-headline-small font-medium text-surface-900 mb-1">
                      {category}
                    </h3>
                    <p className="text-surface-600 text-body-medium">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Technologies Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {data.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="tech-item group bg-surface-50 rounded-xl hover:bg-primary-50 p-4 text-center transform hover:-translate-y-1 transition-all duration-300 border border-surface-200 hover:border-primary-200 hover:shadow-elevation-1"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 p-2 bg-white rounded-lg group-hover:bg-primary-100 transition-colors duration-300 shadow-elevation-1">
                        <img 
                          src={techStackDetails[tech]} 
                          alt={tech} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-surface-700 group-hover:text-primary-600 transition-colors duration-300 capitalize">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
