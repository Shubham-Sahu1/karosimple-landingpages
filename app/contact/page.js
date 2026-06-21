"use client";

import React from "react";
import { MessageCircle, Mail, MapPin, Check } from "lucide-react";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { useContactForm } from "@/hooks/useContactForm";
import { WHATSAPP_LINK, CONTACT_EMAIL } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

export default function ContactPage() {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <div className="min-h-screen flex flex-col bg-ks-off-white">
      {/* Navigation */}
      <MarketingNav />

      {/* Main Form Area */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          
          {/* Header titles */}
          <div className="max-w-3xl text-left space-y-4 mb-12">
            <span className="type-label text-ks-green font-bold block">
              Get in Touch
            </span>
            <h1 className="type-h1 text-ks-navy md:text-5xl font-extrabold tracking-tight">
              Connect With Our Team
            </h1>
            <p className="type-body-lg text-ks-muted leading-relaxed">
              Have questions about QR codes, pricing, or custom integrations? Drop us a message, or chat with us directly on WhatsApp.
            </p>
          </div>

          {/* WhatsApp top alert bar on mobile only (hidden on desktop) */}
          <div className="block lg:hidden bg-ks-green-light border border-ks-green/20 rounded-2xl p-6 text-left mb-8 space-y-4">
            <div className="flex items-center space-x-3 text-ks-green">
              <MessageCircle className="w-6 h-6 fill-current" />
              <span className="font-extrabold text-sm uppercase tracking-wide">Prefer WhatsApp?</span>
            </div>
            <p className="type-body-sm text-ks-muted">
              Skip the email form entirely and chat with our team directly. We usually reply in under 2 hours.
            </p>
            <CTAButton href={WHATSAPP_LINK} variant="whatsapp" className="w-full text-sm">
              Chat on WhatsApp Now
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Form Column (60%) */}
            <div className="lg:col-span-7 bg-ks-white rounded-2xl p-6 md:p-10 border border-ks-border shadow-sm text-left">
              <h3 className="type-h3 text-ks-navy font-bold mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-bold text-ks-navy mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Priyesh Shah"
                      className="bg-ks-off-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy transition-colors"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-xs text-ks-red mt-1 font-semibold">{errors.name.message}</span>
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-bold text-ks-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@business.com"
                      className="bg-ks-off-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy transition-colors"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-xs text-ks-red mt-1 font-semibold">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-bold text-ks-navy mb-1.5">
                      Phone Number (Indian format)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. 98765 43210"
                      className="bg-ks-off-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy transition-colors"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className="text-xs text-ks-red mt-1 font-semibold">{errors.phone.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="businessType" className="text-sm font-bold text-ks-navy mb-1.5">
                      Business Category *
                    </label>
                    <select
                      id="businessType"
                      className="bg-ks-off-white border border-ks-border rounded-xl px-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy cursor-pointer transition-colors"
                      {...register("businessType")}
                    >
                      <option value="Restaurant">Restaurant / Diner</option>
                      <option value="Salon">Salon & Wellness</option>
                      <option value="Clinic">Medical Clinic / Dentist</option>
                      <option value="Medical Store">Medical / Chemist Store</option>
                      <option value="Kirana">Local Kirana Store</option>
                      <option value="CA/Lawyer">CA / Lawyer Practice</option>
                      <option value="Other">Other Business</option>
                    </select>
                    {errors.businessType && (
                      <span className="text-xs text-ks-red mt-1 font-semibold">{errors.businessType.message}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-bold text-ks-navy mb-1.5">
                    Your Message * (Min 20 characters)
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your business locations, how many QR stands you need, or ask any pricing questions..."
                    className="bg-ks-off-white border border-ks-border rounded-xl p-3 outline-none focus:border-ks-green text-sm text-ks-navy transition-colors resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <span className="text-xs text-ks-red mt-1 font-semibold">{errors.message.message}</span>
                  )}
                </div>

                <div className="pt-2">
                  <CTAButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </CTAButton>
                </div>
              </form>
            </div>

            {/* Right: Info Column (40%) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* WhatsApp desktop block (hidden on mobile) */}
              <div className="hidden lg:block bg-ks-green-light border border-ks-green/20 rounded-2xl p-8 space-y-4">
                <div className="flex items-center space-x-3 text-ks-green">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span className="font-extrabold text-sm uppercase tracking-wider">Fast Support via WhatsApp</span>
                </div>
                <p className="type-body-sm text-ks-navy leading-relaxed">
                  Skip standard email forms and connect instantly. Our customer agents are online to resolve dashboard issues or set up custom QR domains.
                </p>
                <div>
                  <CTAButton href={WHATSAPP_LINK} variant="whatsapp" className="w-full">
                    Chat on WhatsApp
                  </CTAButton>
                </div>
                <span className="text-[10px] text-ks-green-dark font-extrabold uppercase block text-center tracking-wider">
                  Typically replies within 2 hours
                </span>
              </div>

              {/* Direct Contacts Card */}
              <div className="bg-ks-navy text-ks-white rounded-2xl p-8 space-y-6 shadow-sm border border-ks-navy-mid">
                <h4 className="type-h3 text-ks-green font-extrabold">Office Details</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-ks-green shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-ks-white/60 block font-semibold">Email Support</span>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="type-body-sm font-bold text-ks-white hover:text-ks-green transition-colors">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-ks-green shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-ks-white/60 block font-semibold">Corporate Address</span>
                      <p className="type-body-sm text-ks-white/90 leading-relaxed">
                        Karo Simple Tech Solutions Pvt Ltd<br />
                        Level 4, Block B, Tech Hub, Sector 62,<br />
                        Noida, Uttar Pradesh, 201301
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <MarketingFooter />
    </div>
  );
}
