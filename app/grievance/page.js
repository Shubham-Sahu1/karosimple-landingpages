"use client";

import React, { useState } from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { GRIEVANCE_EMAIL } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";
import toast from "react-hot-toast";

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketNumber: "",
    natureOfGrievance: "Data Privacy",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Grievance registered! Acknowledgment reference sent to email.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      ticketNumber: "",
      natureOfGrievance: "Data Privacy",
      details: "",
    });
    setIsSubmitting(false);
  };

  return (
    <LegalPageLayout title="Grievance Redressal" lastUpdated="June 20, 2026">
      <p>
        In accordance with the <strong>Information Technology (IT) Act 2000</strong> and India&apos;s <strong>Digital Personal Data Protection (DPDPA) Act 2023</strong>, we have appointed a dedicated Grievance Officer to address any complaints, inquiries, or data protection disputes.
      </p>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">Grievance Officer Contact Details</h2>
      <div className="bg-ks-off-white p-6 rounded-xl border border-ks-border space-y-2">
        <p className="font-bold text-ks-navy">Officer: Mr. Rajesh Kumar</p>
        <p className="text-sm text-ks-navy-light font-semibold">Designation: Data Protection & Grievance Lead</p>
        <p className="text-sm text-ks-muted leading-relaxed">
          Address: Karo Simple Tech Solutions Pvt Ltd, Level 4, Block B, Tech Hub, Sector 62, Noida, UP, 201301.
        </p>
        <p className="text-sm pt-2">
          Email: <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green font-bold hover:underline">{GRIEVANCE_EMAIL}</a>
        </p>
      </div>

      <h2 className="text-xl font-bold text-ks-navy mt-8 mb-4">Commitment Timeline</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Acknowledgment:</strong> We commit to acknowledging receipt of your grievance within <strong>48 hours</strong>.</li>
        <li><strong>Resolution:</strong> All valid complaints will be investigated and resolved within a maximum period of <strong>30 days</strong> from the receipt date.</li>
      </ul>

      <hr className="border-[#EEF1F5] my-8" />

      <h2 className="text-xl font-bold text-ks-navy mb-4">Submit a Grievance Ticket</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#F5F7FA] p-6 rounded-2xl border border-ks-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="text-sm font-bold text-ks-navy mb-1">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Agarwal"
              className="bg-ks-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-sm font-bold text-ks-navy mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@business.com"
              className="bg-ks-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-left">
            <label htmlFor="phone" className="text-sm font-bold text-ks-navy mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 99999 99999"
              className="bg-ks-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm"
            />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="natureOfGrievance" className="text-sm font-bold text-ks-navy mb-1">Grievance Category *</label>
            <select
              id="natureOfGrievance"
              name="natureOfGrievance"
              value={formData.natureOfGrievance}
              onChange={handleChange}
              className="bg-ks-white border border-ks-border rounded-xl p-3 h-12 outline-none focus:border-ks-green text-sm"
            >
              <option value="Data Privacy">Data Privacy / DPDPA Request</option>
              <option value="Billing / Payment Dispute">Billing / Payment Dispute</option>
              <option value="Account Suspension">Account Suspension</option>
              <option value="Incorrect Review Routing">Incorrect Review Routing</option>
              <option value="Other">Other Issues</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="details" className="text-sm font-bold text-ks-navy mb-1">Explain the Issue in Detail *</label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            value={formData.details}
            onChange={handleChange}
            placeholder="Please provide details including timestamps, transaction IDs, or links where relevant..."
            className="bg-ks-white border border-ks-border rounded-xl p-3 outline-none focus:border-ks-green text-sm resize-none"
          />
        </div>

        <div className="pt-2">
          <CTAButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8">
            {isSubmitting ? "Submitting..." : "Submit Grievance Ticket →"}
          </CTAButton>
        </div>
      </form>
    </LegalPageLayout>
  );
}
