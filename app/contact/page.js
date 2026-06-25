"use client";

import React, { useState } from "react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ChevronDown, Check } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";

export default function ContactPage() {
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
    // Clear validation error when user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Add routing metadata based on subject select
    const recipientEmail =
      formData.subject === "I am already a customer and need help"
        ? "support@karosimple.in"
        : "salessupport@karosimple.in";

    const payload = {
      ...formData,
      routeTo: recipientEmail,
      _subject: `Contact Form: ${formData.subject} [${formData.businessName}]`,
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
      setErrors({ submit: "Failed to send message. Please try again or contact via WhatsApp." });
    }
  };

  return (
    <>
      {/* Navigation */}
      <MarketingNav />

      <main className="bg-[#1B2A4A] text-white">
        {/* ── SECTION 1: CONTACT PAGE HERO ── */}
        <section className="pt-32 pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 space-y-6">
            {/* Eyebrow */}
            <span className="inline-block bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/30 text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full">
              We are here when you need us
            </span>

            {/* H1 */}
            <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
              Ask us anything. We actually reply.
            </h1>

            {/* Subtext */}
            <p className="text-[1.125rem] text-white/75 max-w-[520px] mx-auto leading-relaxed pt-2">
              Whether you have a question before signing up or need help with something in your account, write to us. You will hear back from a real person, not a bot or a template.
            </p>
          </div>
        </section>

        {/* ── SECTION 2: CONTACT GRID ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            
            {/* Sales & Support Email Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 1 — Sales */}
              <div className="bg-[#253559] border border-[#3D4F72] rounded-2xl p-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(61,170,114,0.12)] flex items-center justify-center text-xl shrink-0">
                      💼
                    </div>
                    <div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Before you sign up
                      </span>
                      <h3 className="text-[1.25rem] font-bold text-white mt-1 leading-snug">
                        Questions about plans or pricing
                      </h3>
                    </div>
                  </div>
                  <p className="text-[0.9375rem] text-[#CBD5E1] leading-relaxed mt-4">
                    Wondering which plan fits your business, or want us to walk you through what Karo Simple actually does? Write to us and we will sort it out.
                  </p>
                </div>
                
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:salessupport@karosimple.in"
                    className="inline-block text-[#3DAA72] font-semibold text-[0.95rem] hover:underline"
                  >
                    salessupport@karosimple.in
                  </a>
                  <div>
                    <span className="inline-flex bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 text-[0.75rem] font-medium px-3 py-0.5 rounded-full">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 — Support */}
              <div className="bg-[#253559] border border-[#3D4F72] rounded-2xl p-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(61,170,114,0.12)] flex items-center justify-center text-xl shrink-0">
                      🛠️
                    </div>
                    <div>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#94A3B8]">
                        Already a customer
                      </span>
                      <h3 className="text-[1.25rem] font-bold text-white mt-1 leading-snug">
                        Something not working right
                      </h3>
                    </div>
                  </div>
                  <p className="text-[0.9375rem] text-[#CBD5E1] leading-relaxed mt-4">
                    QR not scanning, dashboard issue, review not posting. Whatever it is, tell us and we will fix it. Include your account email when you write.
                  </p>
                </div>
                
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:support@karosimple.in"
                    className="inline-block text-[#3DAA72] font-semibold text-[0.95rem] hover:underline"
                  >
                    support@karosimple.in
                  </a>
                  <div>
                    <span className="inline-flex bg-[rgba(61,170,114,0.15)] text-[#3DAA72] border border-[#3DAA72]/20 text-[0.75rem] font-medium px-3 py-0.5 rounded-full">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Contact Form (2/3 width) */}
              <div className="lg:col-span-8 bg-[#253559]/40 backdrop-blur-sm border border-[#3D4F72]/50 rounded-[2rem] p-6 md:p-10 text-left">
                <h2 className="text-[1.5rem] font-bold text-white mb-2">Send us a message</h2>
                <p className="text-[0.9375rem] text-[#94A3B8] mb-8">
                  Fill this in and we will reply to your email directly.
                </p>

                {success ? (
                  <div className="bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/30 rounded-xl p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#3DAA72] text-white flex items-center justify-center">
                      <Check size={24} strokeWidth={2.5} />
                    </div>
                    <p className="text-white font-bold text-[1.125rem]">Done. We’ve received your message and will reply within 24 hours.</p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="text-[#3DAA72] font-semibold hover:underline mt-2 text-sm"
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
                          className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
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
                          className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
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
                          className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
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
                          className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
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
                        className="w-full text-center font-semibold text-[0.95rem] py-3.5 rounded-full bg-[#3DAA72] text-white hover:bg-[#2D8A5A] shadow-[0_4px_12px_rgba(61,170,114,0.3)] transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message →"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Info Cards (1/3 width) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* WhatsApp Box - Whole card is a link */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] hover:bg-[#1ebe5d] transition-all duration-300 rounded-[2rem] p-8 text-left text-white shadow-lg cursor-pointer relative group overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      {/* Fast Response Badge */}
                      <span className="inline-block bg-white/20 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                        ⚡ Fast Response
                      </span>
                      {/* Circle arrow */}
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-200">
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-[1.5rem] font-extrabold leading-tight">
                        WhatsApp Us Directly
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Skip the queue and chat with our business consultants in real-time.
                      </p>
                    </div>

                    <div className="border-t border-white/25 pt-4">
                      <p className="text-white/80 text-xs italic">
                        WhatsApp support is only for agency queries
                      </p>
                    </div>
                  </div>
                </a>

                {/* Headquarters Box */}
                <div className="bg-[#253559]/40 backdrop-blur-sm border border-[#3D4F72]/50 rounded-[2rem] p-8 text-left space-y-4 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(61,170,114,0.12)] flex items-center justify-center text-xl shrink-0 text-[#3DAA72]">
                        📍
                      </div>
                      <div>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#94A3B8]">
                          Our Headquarters
                        </span>
                        <h4 className="text-[1.125rem] font-bold text-white mt-1 leading-snug">
                          Raipur, Chhattisgarh, 492001
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect Us On Box */}
                <div className="bg-[#253559]/40 backdrop-blur-sm border border-[#3D4F72]/50 rounded-[2rem] p-8 text-left space-y-4 shadow-lg">
                  <div>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Connect us on
                    </span>
                    <h4 className="text-[1.125rem] font-bold text-white mt-1 leading-snug">
                      Join Our Community
                    </h4>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 hover:bg-[#EF4444]/20 flex items-center justify-center text-[#EF4444] transition-all duration-200"
                    >
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#3B5998]/10 border border-[#3B5998]/20 hover:bg-[#3B5998]/20 flex items-center justify-center text-[#3B5998] transition-all duration-200"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 hover:bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] transition-all duration-200"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] transition-all duration-200"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 hover:bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] transition-all duration-200"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom: Need Quick Answers Banner */}
            <div className="mt-16 bg-[#253559]/30 border border-[#3D4F72]/50 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-2">
                <h3 className="text-[1.5rem] font-bold text-white">Need quick answers?</h3>
                <p className="text-[1rem] text-[#94A3B8]">
                  Browse our documentation and frequently asked questions.
                </p>
              </div>
              <a
                href="/faq"
                className="w-full md:w-auto text-center font-bold text-[0.95rem] px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 text-white transition-all flex items-center justify-center gap-2 shrink-0"
              >
                View FAQ
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MarketingFooter />
    </>
  );
}
