import React from "react";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { CONTACT_EMAIL, GRIEVANCE_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "How Karo Simple Helps You Collect Genuine Reviews | Karo Simple",
  description: "Our commitment to authentic, legal review collection. How Karo Simple works with Indian law and third-party platform policies to help your business earn real feedback.",
};

export default function ReviewGuidelines() {
  return (
    <LegalPageLayout title="Review Collection Guidelines" lastUpdated="29 June 2026">
      <p className="text-sm text-ks-muted mb-6">
        <strong>Last Updated:</strong> 29 June 2026<br />
        <strong>Effective Date:</strong> 29 June 2026
      </p>

      {/* Hero Intro Block */}
      <div className="bg-[#F5F7FA] border border-[#EEF1F5] p-6 md:p-8 rounded-2xl mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ks-navy mb-4 leading-tight">We Help You Earn Reviews. Not Buy Them.</h2>
        <p className="text-base md:text-lg text-ks-navy leading-relaxed font-semibold">
          Every business deserves to be found. And every customer deserves honest information before they decide where to spend their money.
        </p>
        <p className="text-sm md:text-base text-ks-navy mt-4 leading-relaxed">
          Karo Simple exists to close the gap between a business that delivers great service and the online reputation that proves it. We do this by making it genuinely easier for your real customers to share their real experience — not by manufacturing opinions that do not exist.
        </p>
        <p className="text-sm md:text-base text-ks-navy mt-3 leading-relaxed">
          This page explains what that means, what we do, what we do not do, and what we expect from businesses that use our platform.
        </p>
      </div>

      {/* 1. How Karo Simple Works */}
      <h2 id="how-it-works" className="text-xl font-bold text-ks-navy mt-8 mb-4">1. How Karo Simple Works</h2>
      <p>
        When a customer scans your Karo Simple QR code, here is the exact flow:
      </p>
      <ol className="list-decimal pl-6 space-y-3 my-4">
        <li>They choose their preferred language — Hindi, English, or other supported languages</li>
        <li>They rate their experience with your business</li>
        <li>If they rate positively, they are shown an AI-generated review suggestion — a starting point they can use as-is, edit to match their own words, or ignore entirely and write from scratch</li>
        <li>They choose which platform they want to leave a review on — Google, Zomato, Justdial, TripAdvisor, Practo, or whichever platforms you have configured</li>
        <li>They tap to open that platform and submit the review themselves, in their own words, from their own account</li>
      </ol>
      <p>
        At no point does Karo Simple post a review for anyone. The customer is always the person who opens the platform, types or pastes the review, and presses submit. Our role ends when they tap to open the review platform.
      </p>
      <p>
        If a customer rates their experience poorly, the flow is different. They do not see the public review platforms. Instead, they are shown a private feedback form. That feedback comes directly to your dashboard. It is not visible to anyone else. You get a chance to understand what went wrong and fix it before it becomes a public complaint.
      </p>

      {/* 2. Why Genuine Reviews Are the Only Reviews Worth Having */}
      <h2 id="why-genuine" className="text-xl font-bold text-ks-navy mt-8 mb-4">2. Why Genuine Reviews Are the Only Reviews Worth Having</h2>

      <h3 id="indian-law" className="text-lg font-bold text-ks-navy mt-6 mb-3">2.1 What Indian Law Says</h3>
      <p>
        The Consumer Protection Act 2019 prohibits unfair trade practices, which explicitly includes fake testimonials and misleading endorsements. Section 2(47) defines misleading advertisements broadly enough to cover fabricated reviews. A business that uses any tool — including Karo Simple — to post or solicit fake reviews is potentially in violation of this Act.
      </p>
      <p>
        Consumers who discover fake reviews about a business can file a complaint with the National Consumer Helpline (1800-11-4000) or approach their District Consumer Disputes Redressal Commission. The ASCI (Advertising Standards Council of India) guidelines on endorsements and testimonials, effective June 2021, further require that reviews reflect genuine experience.
      </p>

      <h3 id="platform-action" className="text-lg font-bold text-ks-navy mt-6 mb-3">2.2 What Review Platforms Do About It</h3>
      <p>
        Google, Zomato, Justdial, TripAdvisor, and every major review platform in India has automated systems that detect inauthentic review patterns. They look for things like:
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Multiple reviews appearing in a short burst from unrelated accounts</li>
        <li>Review text that sounds identical or templated across different reviewers</li>
        <li>Accounts with no prior activity suddenly leaving reviews for one business</li>
        <li>Reviews submitted from the same IP address or device as the business owner</li>
      </ul>
      <p>
        When these patterns are detected, the consequences are serious:
      </p>
      <div className="space-y-4 my-4">
        <p>
          <strong>Google</strong> can remove all your reviews — including completely genuine ones — and place a "Suspected Fake Reviews" notice on your business profile that every searcher can see. This label is extremely difficult to get removed and can damage your credibility more than having fewer reviews in the first place.
        </p>
        <p>
          <strong>Zomato</strong> can delist your restaurant from their platform entirely.
        </p>
        <p>
          <strong>TripAdvisor</strong> publishes a "Penalty Notice" badge visible on your listing when they detect review manipulation.
        </p>
        <p>
          <strong>Justdial</strong> can suspend or remove your business listing.
        </p>
      </div>
      <p>
        The risk is not worth it. One burst of fake reviews can undo years of genuine reputation building in a single day.
      </p>

      {/* 3. What We Expect from Businesses Using Karo Simple */}
      <h2 id="our-rules" className="text-xl font-bold text-ks-navy mt-8 mb-4">3. What We Expect from Businesses Using Karo Simple</h2>
      <p className="mb-4">
        By using Karo Simple, you agree to our Terms of Service, which includes the following commitments:
      </p>

      {/* Styled Checklist */}
      <div className="space-y-4 my-6 bg-[#F5F7FA] p-6 rounded-2xl border border-[#EEF1F5]">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-ks-green mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Only share your QR code with actual customers</strong>
            <p className="text-sm mt-0.5 text-ks-navy">Use the QR code with people who have genuinely visited your shop, used your service, or received your product. Do not distribute it to friends, family, or strangers to collect reviews from people who have not experienced your business.</p>
          </div>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-ks-green mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Do not offer anything in exchange for a review</strong>
            <p className="text-sm mt-0.5 text-ks-navy">Do not offer discounts, free items, cashback, or any other incentive in exchange for a customer leaving a review. This applies to every platform — Google, Zomato, Justdial, and all others. Most review platforms consider this a policy violation that can get your listing penalised.</p>
          </div>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-ks-green mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Do not filter who gets the QR code by their expected rating</strong>
            <p className="text-sm mt-0.5 text-ks-navy">Do not tell customers "only scan this if you're happy" or show the QR code only to customers you think will rate you well. The flow is designed to handle all customers fairly — happy customers go to public platforms, unhappy customers go to your private feedback inbox.</p>
          </div>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-ks-green mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Never submit a review from your own device pretending to be a customer</strong>
            <p className="text-sm mt-0.5 text-ks-navy">The AI suggestion feature gives your customers a starting point — it is not a tool for you to copy, post from your own account, or distribute to fake accounts. Every review on a public platform must be submitted by a real customer from their own account.</p>
          </div>
        </div>
        <div className="flex items-start">
          <svg className="w-5 h-5 text-ks-green mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <strong>Follow the terms of every platform your QR code links to</strong>
            <p className="text-sm mt-0.5 text-ks-navy">Karo Simple is a routing tool. What happens on Google, Zomato, Justdial, or any other platform after a customer lands there is governed by that platform's own policies. You are responsible for understanding and complying with each platform's review guidelines. We are not liable for actions those platforms take against your listing.</p>
          </div>
        </div>
      </div>

      {/* 4. Understanding the AI Review Suggestion Feature */}
      <h2 id="ai-feature" className="text-xl font-bold text-ks-navy mt-8 mb-4">4. Understanding the AI Review Suggestion Feature</h2>

      {/* Side-by-Side Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#EBF7F0] border border-[#D1ECD5] p-5 rounded-2xl">
          <h4 id="ai-does" className="font-bold text-[#137333] text-base mb-2">What the AI does</h4>
          <p className="text-sm leading-relaxed text-[#137333]">
            The AI suggestion feature generates a draft review template based on keywords, service descriptions, and tone settings that you configure in your dashboard. This draft is shown to a customer after they rate their experience positively.
          </p>
          <p className="text-sm leading-relaxed text-[#137333] mt-2">
            It helps customers who want to leave a review but are not sure how to start. Many people have had a great experience but find it awkward to write about it. The suggestion removes that friction.
          </p>
        </div>
        <div className="bg-[#F5F7FA] border border-[#EEF1F5] p-5 rounded-2xl">
          <h4 id="ai-does-not" className="font-bold text-ks-navy text-base mb-2">What the AI does not do</h4>
          <p className="text-sm leading-relaxed text-ks-navy">
            The AI does not post reviews. It does not submit anything to Google, Zomato, or any other platform. It does not interact with any review platform's interface, API, or backend. It has no ability to create accounts, log in anywhere, or click "Submit" on behalf of anyone.
          </p>
          <p className="text-sm leading-relaxed text-ks-navy mt-2">
            The suggestion sits on your customer's screen. They read it. They decide. They act — or they do not. The final submission is entirely their action, on their device, from their account.
          </p>
        </div>
      </div>
      <p>
        Think of it this way: AI suggestions are a pre-filled form. The customer still has to sign it themselves.
      </p>
      <p>
        A customer who had a genuinely bad experience will not use a suggestion that describes a great one. The authenticity filter is the customer's own judgment. That is why this feature works when used honestly and fails when misused.
      </p>

      {/* 5. Private Feedback: The Other Half of the Platform */}
      <h2 id="private-feedback" className="text-xl font-bold text-ks-navy mt-8 mb-4">5. Private Feedback: The Other Half of the Platform</h2>
      <p>
        When a customer scans your QR code and rates their experience poorly, they do not see any public review platform. They see a private feedback form.
      </p>
      <p>
        This feedback goes directly to your Karo Simple dashboard. No one else can see it — not other customers, not Google, not anyone.
      </p>
      <p>
        Most unhappy customers never leave a public review. They just leave and never come back — and sometimes they tell people they know. Private feedback gives you a window before that happens. You find out what went wrong. You can reach out to the customer. You can fix the problem. You get a chance to turn a bad experience into a recovered relationship.
      </p>
      <p>
        This is not about hiding bad reviews. It is about giving you the information you need to improve — privately, quickly, before a problem becomes permanent.
      </p>

      {/* 6. Reporting Misuse */}
      <h2 id="reporting-misuse" className="text-xl font-bold text-ks-navy mt-8 mb-4">6. Reporting Misuse</h2>
      <p>
        If you believe any business is using Karo Simple to generate fake reviews or manipulate ratings, you can report it to us directly:
      </p>
      <p className="bg-[#F5F7FA] p-4 rounded-xl border border-[#EEF1F5] font-semibold my-3 text-sm">
        Email: <a href="mailto:abuse@karosimple.in" className="text-ks-green hover:underline">abuse@karosimple.in</a><br />
        Subject: Review Misuse Report
      </p>
      <p>
        Include the business name, the review platform where you spotted the suspicious activity, and any details you have. We investigate every report. Businesses confirmed to be in violation of our Acceptable Use Policy are suspended immediately. We may also notify the relevant review platform and, in serious cases, consumer protection authorities.
      </p>

      {/* 7. Reference: Review Policies of Platforms We Support */}
      <h2 id="platform-policies" className="text-xl font-bold text-ks-navy mt-8 mb-4">7. Reference: Review Policies of Platforms We Support</h2>
      <p>
        Karo Simple routes reviews to these platforms. Each has its own policies governing what reviews are acceptable. We are not affiliated with any of them — these links are provided for your reference.
      </p>
      <ul className="space-y-4 my-6 pl-4 border-l-2 border-ks-green text-sm">
        <li>
          <strong>Google</strong> — Review policies for Google Business Profiles:<br />
          <a href="https://support.google.com/contributionpolicy/answer/7422880" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline break-all">https://support.google.com/contributionpolicy/answer/7422880</a>
        </li>
        <li>
          <strong>Zomato</strong> — Guidelines and policies for reviews:<br />
          <a href="https://www.zomato.com/policies" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline break-all">https://www.zomato.com/policies</a>
        </li>
        <li>
          <strong>TripAdvisor</strong> — Review integrity and content policy:<br />
          <a href="https://www.tripadvisor.in/help/reviewpolicy" target="_blank" rel="noopener noreferrer" className="text-ks-green hover:underline break-all">https://www.tripadvisor.in/help/reviewpolicy</a>
        </li>
        <li>
          <strong>Justdial</strong> — Review and rating guidelines: see the Help section on justdial.com
        </li>
        <li>
          <strong>Practo</strong> — Review guidelines for doctors and clinics: see the Help section on practo.com
        </li>
        <li>
          <strong>Facebook</strong> — Recommendations policies for Business Pages: see Facebook's Community Standards at facebook.com/communitystandards
        </li>
      </ul>
      <p>
        Karo Simple is not responsible for changes to these external policies. We recommend checking each platform's help centre directly for the most current guidelines.
      </p>

      {/* 8. Questions About This Page */}
      <h2 id="questions" className="text-xl font-bold text-ks-navy mt-8 mb-4">8. Questions About This Page</h2>
      <p>
        If you have a question about our review guidelines, how the platform works, or whether a specific use case is acceptable under our Terms:
      </p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-ks-green hover:underline font-semibold">{CONTACT_EMAIL}</a><br />
        <strong>Grievance Officer:</strong> <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-ks-green hover:underline font-semibold">{GRIEVANCE_EMAIL}</a>
      </p>
      <p>
        You can also read our full Terms of Service at <a href="/terms" className="text-ks-green hover:underline font-semibold">karosimple.in/terms</a>, particularly Section 8 (Acceptable Use Policy), which contains the binding rules that apply to all Karo Simple users.
      </p>

      <hr className="border-[#EEF1F5] my-6" />
      <p className="text-sm text-ks-muted text-center leading-relaxed">
        See also: <a href="/terms" className="text-ks-green hover:underline font-semibold">Terms of Service</a> &middot; <a href="/privacy" className="text-ks-green hover:underline font-semibold font-semibold">Privacy Policy</a> &middot; <a href="/grievance" className="text-ks-green hover:underline font-semibold">Grievance Redressal</a>
      </p>
    </LegalPageLayout>
  );
}
