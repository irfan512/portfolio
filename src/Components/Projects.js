import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef();
  const headerRef = useRef();
  const projectsRef = useRef();

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
    .fromTo(projectsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Animate project cards
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    if (projectCards) {
      gsap.fromTo(projectCards,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projectsRef.current,
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
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-surface-50 via-white to-surface-100 relative overflow-hidden"
    >
      {/* Background Elements - Subtle Material 3 style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-surface-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-surface-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-display-small md:text-display-medium font-normal text-surface-900 mb-6">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-body-large text-surface-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A showcase of my recent work and creative solutions across various industries
          </p>
          <div className="w-32 h-1.5 bg-primary-500 mx-auto rounded-full shadow-elevation-2 opacity-80"></div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectDetails.map((project, index) => (
            <div 
              key={index} 
              className="project-card group bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-4 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-surface-200 hover:border-primary-200"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-surface-100 to-surface-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay with Tech Stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {project.techstack}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-title-large font-medium text-surface-900 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-surface-600 leading-relaxed line-clamp-3 text-body-medium">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techstack.split(', ').slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techstack.split(', ').length > 3 && (
                    <span className="px-3 py-1 bg-surface-100 text-surface-600 text-xs font-medium rounded-full">
                      +{project.techstack.split(', ').length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="pt-4">
                  <a 
                    href={project.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center text-sm py-2 block"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
