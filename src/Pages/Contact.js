import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section py-8 px-4 md:px-0">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mt-4">
        For any questions, please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`} className="hover:underline">{email}</a>
      </h3>
      <span className="text-center text-content text-lg font-light block">or</span>
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
      </h3>
      <div className="text-center pt-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium">Follow us on</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="www.linkedin.com/in/syed-irfan-haider-248109263" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Syedfani99" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/irfan512" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl lg:text-4xl hover:text-gray-700">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </main>
  );
}


export default Contact;
