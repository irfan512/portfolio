import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactCopy, contactDetails, socialLinks } from "../Details";
import { GithubIcon, LinkedinIcon } from "./Icons";

// EmailJS service identifiers. These are publishable client-side values, not secrets.
const EMAILJS = {
  serviceId: "service_3i17ha1",
  templateToMe: "template_irfan_receive",
  templateAutoReply: "template_user_autoreply",
  publicKey: "SmV9LXv6AarUsWaPe",
};

const emptyForm = { name: "", email: "", projectType: "", message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address, for example name@company.com.";
    }
    if (!form.message.trim()) next.message = "Tell me a little about the project.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      if (first) first.focus();
      return;
    }

    setIsSubmitting(true);
    const params = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      subject: form.projectType ? `${form.projectType} enquiry` : "New project enquiry",
      message: form.projectType
        ? `Project type: ${form.projectType}\n\n${form.message.trim()}`
        : form.message.trim(),
    };

    try {
      // Message to me.
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateToMe, params, EMAILJS.publicKey);
      // Acknowledgement to the sender.
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateAutoReply, params, EMAILJS.publicKey);
      setStatus("success");
      setForm(emptyForm); // Cleared only after a confirmed send.
    } catch (error) {
      console.error("Contact form send failed:", error);
      setStatus("error"); // Entered text is deliberately preserved.
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section border-t border-line">
      <div className="page grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 className="h2 max-w-[18ch]">{contactCopy.heading}</h2>
          <p className="lead mt-4">{contactCopy.body}</p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-[15px] text-subtle">Email</dt>
              <dd className="text-lg">
                <a href={`mailto:${contactDetails.email}`} className="link">
                  {contactDetails.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[15px] text-subtle">Phone</dt>
              <dd>
                <a href={`tel:${contactDetails.phoneHref}`} className="link">
                  {contactDetails.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[15px] text-subtle">Location</dt>
              <dd className="text-ink">{contactDetails.location}</dd>
            </div>
          </dl>

          <div className="mt-8 flex gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-lg border border-line bg-surface text-ink text-[15px] font-medium hover:border-slate transition-colors"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-lg border border-line bg-surface text-ink text-[15px] font-medium hover:border-slate transition-colors"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="panel p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="name"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="field"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-700">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="email"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="field"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-700">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="projectType" className="label">
              Project type <span className="font-normal text-subtle">(optional)</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              disabled={isSubmitting}
              className="field"
            >
              <option value="">Select one</option>
              {contactCopy.projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="label">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="field resize-y"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-sm text-red-700">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-70">
            {isSubmitting ? "Sending message" : "Send message"}
          </button>

          <div aria-live="polite" className="empty:hidden">
            {status === "success" && (
              <p className="mt-4 p-3 rounded-lg bg-accent-soft text-ink text-[15px]">
                Message sent. It has reached my inbox and I will get back to you.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 p-3 rounded-lg border border-red-300 bg-red-50 text-red-800 text-[15px]">
                The message could not be sent. Your text is still here, so you can try again, or email me
                directly at{" "}
                <a href={`mailto:${contactDetails.email}`} className="underline font-medium">
                  {contactDetails.email}
                </a>
                .
              </p>
            )}
          </div>

          <p className="mt-5 text-sm text-subtle">{contactCopy.privacy}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
