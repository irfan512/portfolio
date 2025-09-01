import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef();
  const contentRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(contentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(statsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-surface-50 relative overflow-hidden"
    >
      {/* Material 3 Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Material 3 Typography */}
        <div className="text-center mb-20">
          <h2 className="text-display-small md:text-display-medium font-normal text-surface-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-headline-medium font-normal text-surface-900">
                Who I Am
              </h3>
              <p className="text-body-large text-surface-700 leading-relaxed">
                {personalDetails.about}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-headline-medium font-normal text-surface-900">
                What I Do
              </h3>
              <p className="text-body-large text-surface-700 leading-relaxed">
                I specialize in creating user-friendly, high-performance applications using modern technologies. 
                From mobile apps to web platforms, I bring ideas to life with clean code and intuitive design.
              </p>
            </div>

            {/* Key Points - Material 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                <span className="text-body-medium text-surface-700 font-medium">Mobile Development</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                <span className="text-body-medium text-surface-700 font-medium">Web Development</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                <div className="w-4 h-4 bg-primary-700 rounded-full"></div>
                <span className="text-body-medium text-surface-700 font-medium">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                <div className="w-4 h-4 bg-primary-800 rounded-full"></div>
                <span className="text-body-medium text-surface-700 font-medium">Problem Solving</span>
              </div>
            </div>

            {/* Resume Download Button - Material 3 Filled Button */}
            <div className="mt-10">
              <a 
                href="/portfolio/resume.pdf" 
                download="Syed_Irfan_Haider_Resume.pdf"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-elevation-2 hover:shadow-elevation-3 focus:outline-none focus:ring-4 focus:ring-primary-200"
              >
                <span className="text-xl">📄</span>
                <span className="text-body-large">Download My Resume</span>
              </a>
            </div>
          </div>

          {/* Stats & Skills Preview - Material 3 Cards */}
          <div ref={statsRef} className="space-y-8">
            {/* Experience Stats */}
            <div className="bg-white p-8 rounded-2xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200 border border-surface-100">
              <h3 className="text-title-large font-medium text-surface-900 mb-8">Experience Highlights</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                  <div className="text-body-medium text-surface-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
                  <div className="text-body-medium text-surface-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-body-medium text-surface-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-body-medium text-surface-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Quick Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200 border border-surface-100">
              <h3 className="text-title-large font-medium text-surface-900 mb-8">Core Skills</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-body-medium">
                    <span className="text-surface-700">Flutter Development</span>
                    <span className="text-primary-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-body-medium">
                    <span className="text-surface-700">React Development</span>
                    <span className="text-primary-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-body-medium">
                    <span className="text-surface-700">PHP/Laravel</span>
                    <span className="text-primary-600 font-medium">80%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-500" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
