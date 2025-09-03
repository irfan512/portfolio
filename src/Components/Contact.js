import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactDetails, socialMediaUrl } from "../Details";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef();
  const headerRef = useRef();
  const formRef = useRef();
  const infoRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    .fromTo(formRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(infoRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // Email to Irfan (with user's message) - Template 1
      const emailToYou = await emailjs.send(
        'service_3i17ha1',
        'template_irfan_receive',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'SmV9LXv6AarUsWaPe' 
      );

      // Auto-reply to user - Template 2
      const emailToUser = await emailjs.send(
        'service_3i17ha1', 
        'template_user_autoreply',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'SmV9LXv6AarUsWaPe' 
      );

      console.log('Emails sent successfully:', { emailToYou, emailToUser });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-surface-50 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-primary-200 to-tertiary-200 rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full mix-blend-multiply filter blur-lg animate-pulse animation-delay-2000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <h2 className="text-display-small md:text-display-medium font-normal text-surface-900 mb-6">
            Let's <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-body-large text-surface-600 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-8 rounded-full opacity-80"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-surface-200 shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300">
              <h3 className="text-headline-medium font-normal text-surface-900 mb-8">
                Send me a message
              </h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success-100 border border-success-300 rounded-xl">
                  <p className="text-success-700 text-center font-medium">
                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error-100 border border-error-300 rounded-xl">
                  <p className="text-error-700 text-center font-medium">
                    ❌ Oops! Something went wrong. Please try again or contact me directly via email.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-surface-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-surface-300 rounded-xl text-surface-900 placeholder-surface-500 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all duration-200"
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-surface-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-surface-300 rounded-xl text-surface-900 placeholder-surface-500 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all duration-200"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-surface-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-surface-300 rounded-xl text-surface-900 placeholder-surface-500 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all duration-200"
                    placeholder="Project Inquiry"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-surface-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border border-surface-300 rounded-xl text-surface-900 placeholder-surface-500 focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 font-medium rounded-xl transition-all duration-200 shadow-elevation-2 hover:shadow-elevation-3 focus:outline-none focus:ring-4 focus:ring-primary-200 ${
                    isSubmitting 
                      ? 'bg-surface-400 text-surface-600 cursor-not-allowed' 
                      : 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-headline-medium font-normal text-surface-900 mb-8">
                Get in touch
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-elevation-2">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-surface-900 font-medium">Email</h4>
                    <a 
                      href={`mailto:${contactDetails.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-elevation-2">
                    <i className="fas fa-phone text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-surface-900 font-medium">Phone</h4>
                    <a 
                      href={`tel:${contactDetails.phone}`}
                      className="text-secondary-600 hover:text-secondary-700 transition-colors duration-200 font-medium"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-tertiary-500 to-tertiary-600 rounded-xl flex items-center justify-center shadow-elevation-2">
                    <i className="fas fa-map-marker-alt text-white text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-surface-900 font-medium">Location</h4>
                    <p className="text-tertiary-600 font-medium">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-title-large font-medium text-surface-900">Follow me</h4>
              <div className="flex space-x-4">
                <a 
                  href={socialMediaUrl.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-100 rounded-xl flex items-center justify-center text-surface-700 hover:bg-primary-100 hover:text-primary-600 transform hover:scale-110 transition-all duration-200 border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2"
                  title="GitHub Profile"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href={socialMediaUrl.linkdein} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-100 rounded-xl flex items-center justify-center text-surface-700 hover:bg-secondary-100 hover:text-secondary-600 transform hover:scale-110 transition-all duration-200 border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2"
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a 
                  href={socialMediaUrl.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface-100 rounded-xl flex items-center justify-center text-surface-700 hover:bg-tertiary-100 hover:text-tertiary-600 transform hover:scale-110 transition-all duration-200 border border-surface-200 shadow-elevation-1 hover:shadow-elevation-2"
                  title="Twitter Profile"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="space-y-4">
              <h4 className="text-title-large font-medium text-surface-900">Download Resume</h4>
              <a 
                href="/portfolio/resume.pdf" 
                download="Syed_Irfan_Haider_Resume.pdf"
                className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transform hover:scale-[1.02] transition-all duration-200 shadow-elevation-2 hover:shadow-elevation-3 focus:outline-none focus:ring-4 focus:ring-primary-200"
                title="Download Resume"
              >
                <span>📄</span>
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Response */}
            <div className="bg-white p-6 rounded-2xl border border-surface-200 shadow-elevation-1">
              <h4 className="text-title-large font-medium text-surface-900 mb-3">
                Quick Response
              </h4>
              <p className="text-surface-600 text-body-medium">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to call me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
