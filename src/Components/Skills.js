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
    "Frontend": ["html", "css", "js", "react",],
    "Backend": ["php", "laravel", "mysql"],
    "Mobile": ["flutter"],
    "Tools": ["git", "github", "vscode", "postman", "figma"]
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={skillsRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies to create amazing digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mobile-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Development</h3>
            <p className="text-gray-600">Flutter apps with beautiful UI/UX</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
            <p className="text-gray-600">React & Laravel full-stack solutions</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-palette text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Beautiful and intuitive interfaces</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cogs text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solving</h3>
            <p className="text-gray-600">Creative solutions to complex challenges</p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div ref={techGridRef} className="space-y-12">
          {Object.entries(techCategories).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">
                {category} <span className="text-purple-600">Technologies</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {techs.map((tech) => (
                  <div 
                    key={tech} 
                    className="tech-item group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-300">
                        <img 
                          src={techStackDetails[tech]} 
                          alt={tech} 
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <h4 className="font-medium text-gray-900 capitalize">
                        {tech === 'js' ? 'JavaScript' : 
                         tech === 'css' ? 'CSS3' : 
                         tech === 'html' ? 'HTML5' : 
                         tech === 'php' ? 'PHP' : 
                         tech === 'mysql' ? 'MySQL' : 
                         tech === 'vscode' ? 'VS Code' : 
                         tech === 'postman' ? 'Postman' : 
                         tech === 'figma' ? 'Figma' : 
                         tech === 'git' ? 'Git' : 
                         tech === 'github' ? 'GitHub' : 
                         tech === 'laravel' ? 'Laravel' : 
                         tech === 'flutter' ? 'Flutter' : 
                         tech === 'react' ? 'React' : 
                         tech}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 max-w-2xl">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of development trends. 
              My passion for learning drives me to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
