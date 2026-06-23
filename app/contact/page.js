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

    if (formData.phone.trim()) {
      const digitsOnly = formData.phone.replace(/[^\d]/g, "");
      const targetDigits = digitsOnly.slice(-10);
      const isValidPhone = targetDigits.length === 10 && /^[6-9]/.test(targetDigits);
      if (!isValidPhone) {
        tempErrors.phone = "Please enter a valid 10-digit Indian phone number";
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
            <span className="inline-flex bg-[rgba(61,170,114,0.15)] border border-[#3DAA72]/30 text-[#3DAA72] text-[0.75rem] font-semibold uppercase tracking-[1.5px] px-4 py-1.5 rounded-full">
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

        {/* ── SECTION 2: CONTACT CARDS AND FORM ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            
            {/* Cards Row (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
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

            {/* Contact Form Container */}
            <div className="mt-12 bg-[#253559] border border-[#3D4F72] rounded-2xl p-6 md:p-10 text-left max-w-4xl mx-auto">
              <h3 className="text-[1.5rem] font-bold text-white">Send us a message</h3>
              <p className="text-[0.9375rem] text-[#94A3B8] mt-1 mb-8">
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
                  {/* Row 1: Name and Business Name */}
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
                        placeholder="What should we call you?"
                        className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                      />
                      {errors.name && (
                        <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.name}</span>
                      )}
                    </div>

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
                  </div>

                  {/* Row 2: Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-bold text-[#CBD5E1] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="We will reply here"
                        className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                      />
                      {errors.email && (
                        <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.email}</span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-sm font-bold text-[#CBD5E1] mb-2">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Only if you want a call back"
                        className="bg-[#1B2A4A] border border-[#3D4F72] rounded-xl p-3 h-12 outline-none focus:border-[#3DAA72] focus:ring-2 focus:ring-[#3DAA72]/20 text-sm text-white transition-all placeholder-[#6B7A99]"
                      />
                      {errors.phone && (
                        <span className="text-xs text-[#EF4444] mt-1 font-semibold">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Dropdown */}
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

                  {/* Row 4: Textarea */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-bold text-[#CBD5E1] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what’s on your mind. The more detail the better."
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

          </div>
        </section>

        {/* ── SECTION 3: RESPONSE PROMISE STRIP ── */}
        <section className="bg-[rgba(61,170,114,0.12)] border-y border-[#3DAA72]/25 py-6 text-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-center gap-2.5 text-[#CBD5E1] font-medium text-[0.95rem] md:text-[1rem]">
            <span className="text-[#3DAA72] text-xl">🕒</span>
            <span>We reply to every message within 24 hours, Monday to Saturday. Urgent issues on PRO and AGENCY plans get priority response via WhatsApp.</span>
          </div>
        </section>

        {/* ── SECTION 4: WHATSAPP CTA BLOCK ── */}
        <section className="py-24 bg-[#1B2A4A] border-t border-[#3D4F72]/30">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-[#253559] border border-[#3D4F72] rounded-[24px] p-8 md:p-12 space-y-6 shadow-sm">
              {/* WhatsApp Icon */}
              <div className="flex justify-center">
                <svg
                  className="w-12 h-12 fill-[#25D366]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.466L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.419 1.451 5.617 0 10.185-4.57 10.188-10.191.002-2.723-1.055-5.283-2.977-7.207-1.922-1.924-4.481-2.982-7.202-2.984-5.624 0-10.191 4.568-10.194 10.189-.001 1.92.502 3.796 1.458 5.419l-.988 3.606 3.696-.97zm10.163-5.185c-.277-.139-1.643-.811-1.896-.903-.254-.093-.44-.139-.623.139-.184.278-.714.903-.875 1.088-.162.185-.323.208-.6.069-.278-.139-1.173-.432-2.234-1.378-.825-.736-1.382-1.644-1.544-1.922-.162-.278-.017-.428.122-.566.125-.124.277-.323.416-.485.139-.161.185-.278.277-.463.093-.185.046-.347-.023-.486-.069-.139-.623-1.503-.854-2.057-.225-.54-.473-.466-.647-.475-.167-.008-.358-.01-.549-.01-.191 0-.502.072-.765.358-.263.287-1.004.982-1.004 2.396 0 1.414 1.029 2.78 1.173 2.977.144.195 2.025 3.092 4.905 4.335.685.297 1.22.474 1.636.607.688.219 1.314.188 1.81.114.551-.082 1.643-.671 1.875-1.32.232-.648.232-1.204.162-1.32-.07-.116-.254-.208-.531-.347z" />
                </svg>
              </div>

              <div className="space-y-2">
                <h3 className="text-[1.375rem] font-bold text-white">
                  On PRO or AGENCY? Talk to us directly on WhatsApp.
                </h3>
                <p className="text-[0.9375rem] text-[#94A3B8] max-w-[400px] mx-auto leading-relaxed">
                  Skip the form. If you are on a paid plan and need quick help, message us directly and we will respond fast.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[0.95rem] bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3.5 rounded-full transition-colors duration-200"
                >
                  {/* Small WhatsApp logo */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.466L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.419 1.451 5.617 0 10.185-4.57 10.188-10.191.002-2.723-1.055-5.283-2.977-7.207-1.922-1.924-4.481-2.982-7.202-2.984-5.624 0-10.191 4.568-10.194 10.189-.001 1.92.502 3.796 1.458 5.419l-.988 3.606 3.696-.97zm10.163-5.185c-.277-.139-1.643-.811-1.896-.903-.254-.093-.44-.139-.623.139-.184.278-.714.903-.875 1.088-.162.185-.323.208-.6.069-.278-.139-1.173-.432-2.234-1.378-.825-.736-1.382-1.644-1.544-1.922-.162-.278-.017-.428.122-.566.125-.124.277-.323.416-.485.139-.161.185-.278.277-.463.093-.185.046-.347-.023-.486-.069-.139-.623-1.503-.854-2.057-.225-.54-.473-.466-.647-.475-.167-.008-.358-.01-.549-.01-.191 0-.502.072-.765.358-.263.287-1.004.982-1.004 2.396 0 1.414 1.029 2.78 1.173 2.977.144.195 2.025 3.092 4.905 4.335.685.297 1.22.474 1.636.607.688.219 1.314.188 1.81.114.551-.082 1.643-.671 1.875-1.32.232-.648.232-1.204.162-1.32-.07-.116-.254-.208-.531-.347z" />
                  </svg>
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>

              <span className="text-xs text-[#94A3B8] block">
                WhatsApp support is available on PRO and AGENCY plans
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MarketingFooter />
    </>
  );
}
