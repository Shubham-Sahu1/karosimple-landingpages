"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";

export function ContactFormSection() {
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    subject: "I have a question before signing up",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation
  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "What should we call you?";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.businessName.trim()) {
      tempErrors.businessName = "Name of your shop, clinic, restaurant, etc.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "We will reply here";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Tell us what’s on your mind. The more detail the better.";
    } else if (formData.message.trim().length < 20) {
      tempErrors.message = "Message must be at least 20 characters";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else {
      const digitsOnly = formData.phone.replace(/[^\d]/g, "");
      if (digitsOnly.length !== 10) {
        tempErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    const recipientEmail =
      formData.subject === "I am already a customer and need help"
        ? "support@karosimple.in"
        : "salessupport@karosimple.in";

    const payload = {
      ...formData,
      routeTo: recipientEmail,
      _subject: `Home Contact Form: ${formData.subject} [${formData.businessName}]`,
    };

    const isOk = await submitToFormspree(payload);
    setIsSubmitting(false);

    if (isOk) {
      setSuccess(true);
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        subject: "I have a question before signing up",
        message: "",
      });
    } else {
      setErrors({ submit: "Failed to send message. Please try again or email us directly." });
    }
  };

  return (
    <section className="relative w-full bg-[#1B2A4A] py-16 lg:py-24 border-b border-[#253559] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[rgba(61,170,114,0.04)] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(239,68,68,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-[16px] h-[2px] bg-[#3DAA72] inline-block" />
            <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
              GET IN TOUCH
            </span>
            <span className="w-[16px] h-[2px] bg-[#3DAA72] inline-block" />
          </div>
          <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.6rem] leading-[1.1] text-white">
            Have Questions? <span className="text-[#3DAA72]">Drop Us a Message</span>
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-[1.05rem] text-[#CBD5E1] leading-relaxed">
            Fill out this form and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card wrapper */}
        <div className="bg-[#253559]/40 backdrop-blur-sm border border-[#3D4F72]/50 rounded-[2rem] p-6 md:p-10 text-left">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 rounded-full flex items-center justify-center text-3xl mx-auto animate-bounce">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-[#CBD5E1] text-[0.95rem] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. We have received your message and will reply to your email shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[#3DAA72] font-semibold hover:underline mt-2 text-sm cursor-pointer bg-transparent border-none outline-none"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-bold text-[#CBD5E1] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl px-4 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                  />
                  {errors.name && (
                    <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.name}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold text-[#CBD5E1] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@business.in"
                    className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl px-4 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                  />
                  {errors.email && (
                    <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Business Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="businessName" className="text-sm font-bold text-[#CBD5E1] mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Name of your shop, clinic, restaurant, etc."
                    className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl px-4 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                  />
                  {errors.businessName && (
                    <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.businessName}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-bold text-[#CBD5E1] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl px-4 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                  />
                  {errors.phone && (
                    <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-sm font-bold text-[#CBD5E1] mb-2">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#1B2A4A] border border-[#3D4F72] rounded-xl px-4 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white cursor-pointer appearance-none transition-all"
                  >
                    <option value="I have a question before signing up">I have a question before signing up</option>
                    <option value="I want to understand the pricing">I want to understand the pricing</option>
                    <option value="I am already a customer and need help">I am already a customer and need help</option>
                    <option value="I want to talk about the Agency plan">I want to talk about the Agency plan</option>
                    <option value="Something else">Something else</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#94A3B8]">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-[#CBD5E1] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs..."
                  className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-4 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all resize-none placeholder-[#6B7A99]"
                />
                {errors.message && (
                  <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.message}</span>
                )}
              </div>

              {errors.submit && (
                <div className="text-xs text-[#EF4444] font-semibold">{errors.submit}</div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-center font-semibold text-[0.95rem] py-3.5 rounded-full bg-[#3DAA72] text-white hover:bg-[#2D8A5A] shadow-[0_4px_12px_rgba(61,170,114,0.3)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
