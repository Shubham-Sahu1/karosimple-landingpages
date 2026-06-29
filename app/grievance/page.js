"use client";

import React, { useState } from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    complaint_type: "",
    details: "",
    order_id: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsSuccess(false);

    // Client-side validations
    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      setStatusMessage("Full Name must be between 2 and 100 characters.");
      setIsSubmitting(false);
      return;
    }
    if (formData.subject.trim().length < 5 || formData.subject.trim().length > 200) {
      setStatusMessage("Subject must be between 5 and 200 characters.");
      setIsSubmitting(false);
      return;
    }
    if (formData.details.trim().length < 50 || formData.details.trim().length > 2000) {
      setStatusMessage("Complaint details must be between 50 and 2000 characters.");
      setIsSubmitting(false);
      return;
    }
    if (formData.phone && formData.phone.trim() !== "") {
      const digitsOnly = formData.phone.replace(/[^\d]/g, "");
      if (digitsOnly.length !== 10) {
        setStatusMessage("Please enter a valid 10-digit Indian phone number.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const response = await fetch("/api/public/grievance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setStatusMessage(`Your grievance has been submitted successfully. A reference number (${result.reference}) has been sent to ${formData.email}. You will receive an acknowledgement within 48 hours.`);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          complaint_type: "",
          details: "",
          order_id: "",
        });
      } else {
        setStatusMessage(result.message || "Something went wrong. Please try again or email us directly at grievance@karosimple.in.");
      }
    } catch (error) {
      setStatusMessage("Something went wrong. Please try again or email us directly at grievance@karosimple.in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LegalPageLayout title="Grievance Redressal" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-4">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      <p className="font-semibold text-lg text-ks-navy">
        We take every complaint seriously. Every grievance submitted through this page is acknowledged within 48 hours.
      </p>
      <p>
        Karo Simple is committed to resolving complaints fairly, honestly, and without unnecessary delay. If you have a concern about your data, our content, your account, billing, or how the platform behaves, this is the right place to raise it.
      </p>
      <p>
        As required under the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023, we have appointed a Grievance Officer who personally oversees every complaint received.
      </p>

      {/* 1. Grievance Officer */}
      <h2 id="grievance-officer" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. Grievance Officer</h2>
      <p>
        The following person is appointed as the Grievance Officer for Karo Simple in compliance with IT Act 2000 Rule 5(9) and DPDPA 2023:
      </p>
      <div className="bg-[#F5F7FA] p-6 rounded-xl border border-[#EEF1F5] my-4 text-ks-navy leading-relaxed text-sm">
        <p className="font-bold text-base mb-1">Grievance Officer: Mr. Rajesh Kumar</p>
        <p>
          <strong>Designation:</strong> Grievance Officer, Karo Simple<br />
          <strong>Email:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a><br />
          <strong>Address:</strong> Level 4, Block B, Tech Hub, Sector 62, Noida, Uttar Pradesh, 201301
        </p>
      </div>
      <p>
        You may contact the Grievance Officer directly by email, or use the complaint form on this page.
      </p>

      {/* 2. Our Response Commitment */}
      <h2 id="response-commitment" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Our Response Commitment</h2>
      <div className="bg-[#1B2A4A] text-white p-6 rounded-2xl border border-[#253559] space-y-4 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[#F5A623] font-bold text-sm tracking-wider uppercase">Acknowledgement</p>
            <p className="text-lg font-semibold mt-1">Within 48 hours of receiving it</p>
          </div>
          <div>
            <p className="text-[#F5A623] font-bold text-sm tracking-wider uppercase">Resolution</p>
            <p className="text-lg font-semibold mt-1">Within 30 days of acknowledgement</p>
          </div>
        </div>
        <div className="pt-2 border-t border-[#253559] text-sm text-[#94A3B8]">
          <strong>Direct Contact:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-[#3DAA72] font-semibold hover:underline">{GRIEVANCE_EMAIL}</a>
        </div>
      </div>
      <p>
        These timelines are a legal commitment, not a target. If you do not receive an acknowledgement within 48 hours of submitting through this form or emailing us directly, please check your spam folder and then follow up.
      </p>

      {/* 3. What You Can Raise a Grievance About */}
      <h2 id="what-to-report" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. What You Can Raise a Grievance About</h2>
      <p>
        You may submit a complaint for any of the following:
      </p>
      <ul className="list-disc pl-6 space-y-3 my-4">
        <li><strong>Privacy and Data</strong> — concerns about how your personal data is being collected, stored, processed, or shared. This includes requests to access, correct, or delete your data under DPDPA 2023.</li>
        <li><strong>Content Disputes</strong> — if you believe any content on karosimple.in or app.karosimple.in is unlawful, defamatory, infringes your intellectual property rights, or otherwise violates your legal rights.</li>
        <li><strong>Account Issues</strong> — account suspension without prior notice, inability to access your account, suspected unauthorised access to your account, or any issue with account ownership.</li>
        <li><strong>Billing and Payments</strong> — incorrect charges, a payment deducted but plan not activated, a refund not processed within the committed timeline, or any other subscription-related financial dispute.</li>
        <li><strong>Platform Behaviour</strong> — the platform is not functioning as described on our website, features are inaccessible on your plan, or there is a persistent technical issue that support has not resolved.</li>
        <li><strong>Other</strong> — anything else that concerns you about Karo Simple and does not fall neatly into the above categories.</li>
      </ul>

      {/* 4. Submit Your Complaint */}
      <h2 id="complaint-form" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Submit Your Complaint</h2>
      <p className="mb-6">
        Fill in the form below. All fields marked with an asterisk (*) are required. You will receive an acknowledgement email at the address you provide within 48 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 bg-[#F5F7FA] p-6 md:p-8 rounded-2xl border border-[#EEF1F5] my-6">
        {statusMessage && (
          <div className={`p-4 rounded-xl text-sm font-semibold leading-relaxed border ${
            isSuccess ? "bg-[#E6F4EA] text-[#137333] border-[#A3E1B8]" : "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]"
          }`}>
            {statusMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Agarwal"
              className="bg-white border border-[#EEF1F5] rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@business.com"
              className="bg-white border border-[#EEF1F5] rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col text-left">
            <label htmlFor="phone" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9999999999"
              className="bg-white border border-[#EEF1F5] rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="complaint_type" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Type of Complaint *</label>
            <select
              id="complaint_type"
              name="complaint_type"
              required
              value={formData.complaint_type}
              onChange={handleChange}
              className="bg-white border border-[#EEF1F5] rounded-xl px-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            >
              <option value="" disabled>-- Select Category --</option>
              <option value="Privacy and Data">Privacy and Data</option>
              <option value="Content Dispute">Content Dispute</option>
              <option value="Account Issue">Account Issue</option>
              <option value="Billing and Payment">Billing and Payment</option>
              <option value="Platform Behaviour">Platform Behaviour</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col text-left">
            <label htmlFor="subject" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief summary of the issue"
              className="bg-white border border-[#EEF1F5] rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="order_id" className="text-xs font-bold text-ks-navy uppercase tracking-wider mb-1.5">Order / Transaction ID</label>
            <input
              type="text"
              id="order_id"
              name="order_id"
              value={formData.order_id}
              onChange={handleChange}
              placeholder="e.g. pay_N2h7sLp9s"
              className="bg-white border border-[#EEF1F5] rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm text-ks-navy"
            />
            <span className="text-[11px] text-ks-muted mt-1">If your complaint is about a payment, enter your Order ID here.</span>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <div className="flex justify-between items-baseline mb-1.5">
            <label htmlFor="details" className="text-xs font-bold text-ks-navy uppercase tracking-wider">Complaint Details *</label>
            <span className="text-[11px] text-ks-muted">{formData.details.length} / 2000 chars (Min 50)</span>
          </div>
          <textarea
            id="details"
            name="details"
            required
            rows={6}
            value={formData.details}
            onChange={handleChange}
            placeholder="Please provide details including timestamps, transaction IDs, or platform links where relevant (minimum 50 characters)..."
            className="bg-white border border-[#EEF1F5] rounded-xl p-3 outline-none focus:border-ks-green text-sm text-ks-navy resize-none"
          />
        </div>

        <div className="pt-2 text-left">
          <CTAButton type="submit" disabled={isSubmitting} className="px-8 min-h-[44px]">
            {isSubmitting ? "Submitting..." : "Submit Grievance"}
          </CTAButton>
        </div>
      </form>

      {/* 5. What Happens After You Submit */}
      <h2 id="process" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. What Happens After You Submit</h2>
      <p>
        Once your complaint is received, here is what happens:
      </p>
      <div className="space-y-4 my-6">
        <div className="flex items-start">
          <div className="bg-[#1B2A4A] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">1</div>
          <div>
            <h4 className="font-bold text-ks-navy">Acknowledgement (within 48 hours)</h4>
            <p className="text-sm mt-0.5">You receive a confirmation email with a reference number. Our Grievance Officer reviews the nature of your complaint and categorises it.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#1B2A4A] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">2</div>
          <div>
            <h4 className="font-bold text-ks-navy">Investigation</h4>
            <p className="text-sm mt-0.5">Depending on the type of complaint, we will review the relevant account records, transaction history, data logs, or platform behaviour. We may reach out to you for additional information if needed.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#1B2A4A] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">3</div>
          <div>
            <h4 className="font-bold text-ks-navy">Resolution (within 30 days)</h4>
            <p className="text-sm mt-0.5">We will communicate the outcome to you in writing at the email address you provided. If we need more time due to complexity, we will inform you of the revised timeline before the 30-day period ends.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#1B2A4A] text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">4</div>
          <div>
            <h4 className="font-bold text-ks-navy">Closure</h4>
            <p className="text-sm mt-0.5">Once you confirm the resolution or after 7 days of no response from you following our resolution communication, the complaint is marked closed.</p>
          </div>
        </div>
      </div>

      {/* 6. If You Are Not Satisfied */}
      <h2 id="escalation" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. If You Are Not Satisfied</h2>
      <p>
        If your complaint is not resolved within 30 days, or if you are not satisfied with the resolution, you have the right to escalate the matter to relevant external authorities:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>For data privacy issues:</strong> Adjudicating Officer appointed under DPDPA 2023 or the Ministry of Electronics and Information Technology (MeitY) (Website: <a href="https://meity.gov.in" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline font-semibold">meity.gov.in</a>)
        </li>
        <li>
          <strong>For consumer disputes:</strong> Consumer Protection Act 2019 — National Consumer Helpline: 1800-11-4000 (toll-free) (Online portal: <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline font-semibold">consumerhelpline.gov.in</a>). You may also approach your District Consumer Disputes Redressal Commission.
        </li>
        <li>
          <strong>For payment-related issues:</strong> Your bank's nodal officer or the RBI Banking Ombudsman (RBI portal: <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline font-semibold">cms.rbi.org.in</a>)
        </li>
      </ul>

      {/* 7. Reporting Fake Reviews or Platform Misuse */}
      <h2 id="report-misuse" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Reporting Fake Reviews or Platform Misuse</h2>
      <p>
        If you believe a business is using Karo Simple to generate fake reviews, manipulate ratings, or engage in any activity that violates our Acceptable Use Policy or Indian consumer law, please report it separately at:
      </p>
      <p className="bg-[#F5F7FA] p-4 rounded-xl border border-[#EEF1F5] font-semibold my-3 text-sm">
        Email: <a href="mailto:abuse@karosimple.in" className="text-ks-green hover:underline">abuse@karosimple.in</a><br />
        Subject: Review Misuse Report — [Business Name if known]
      </p>
      <p>
        We treat all misuse reports seriously. Verified violations result in immediate account suspension and, where applicable, reporting to consumer protection authorities.
      </p>
      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/privacy" className="text-ks-green hover:underline font-semibold">Privacy Policy</a> &middot; <a href="/terms" className="text-ks-green hover:underline font-semibold">Terms of Service</a> &middot; <a href="/refund-policy" className="text-ks-green hover:underline font-semibold">Refund &amp; Cancellation Policy</a>
      </p>
    </LegalPageLayout>
  );
}
