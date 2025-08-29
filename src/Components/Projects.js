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
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A showcase of my recent work and creative solutions across various industries
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectDetails.map((project, index) => (
            <div 
              key={index} 
              className="project-card group bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-700 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay with Tech Stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techstack.split(', ').slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techstack.split(', ').length > 3 && (
                        <span className="px-3 py-1.5 bg-purple-500/90 text-white text-xs font-semibold rounded-full shadow-lg">
                          +{project.techstack.split(', ').length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  {/* <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {project.techstack.includes('Flutter') ? 'Flutter' : 'Mobile'}
                  </div> */}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-6">
                {/* Project Title */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techstack.split(', ').slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="pt-6">
                  <a 
                    href={project.previewLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group-hover:shadow-2xl"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                    <span>View Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300/50 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-12 rounded-3xl shadow-2xl border border-purple-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Have a Project in Mind? 🚀
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your innovative ideas to life with cutting-edge technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              >
                <i className="fas fa-rocket mr-3"></i>
                Start a Project
              </a>
              <a 
                href="/portfolio/resume.pdf" 
                download="Syed_Irfan_Haider_Resume.pdf"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
              >
                <span className="mr-3">📄</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
