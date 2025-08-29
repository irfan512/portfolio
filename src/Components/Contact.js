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
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(formRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(infoRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
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
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_3i17ha1', // Replace with your EmailJS service ID
        'template_cvuk9gl', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Irfan Haider',
          reply_to: formData.email,
        },
        'SmV9LXv6AarUsWaPe' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      
      // Show error message
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
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send me a message
              </h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-center">
                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-center">
                    ❌ Oops! Something went wrong. Please try again or contact me directly via email.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 hover:shadow-xl'
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
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in touch
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a 
                      href={`mailto:${contactDetails.email}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a 
                      href={`tel:${contactDetails.phone}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Follow me</h4>
              <div className="flex space-x-4">
                <a 
                  href={socialMediaUrl.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href={socialMediaUrl.linkdein} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a 
                  href={socialMediaUrl.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="text-xl font-semibold text-white mb-3">
                Quick Response
              </h4>
              <p className="text-gray-300 text-sm">
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
