"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const cards = [
    {
      icon: "🍽️",
      title: "Fine Dining, Restaurants & Dhabas",
      pain: "You serve 80+ tables a day and your food is genuinely loved. But your Google rating is stuck at 3.9 because happy diners rarely think about leaving a review, while a single customer who waited 5 minutes too long for an appetizer left a scathing public complaint.",
      image: "/Who its for/Fine Dining & Restaurants.webp",
    },
    {
      icon: "💇",
      title: "Salons, Spas & Parlors",
      pain: "Your clients walk out feeling absolutely amazing and promise to recommend you to friends. However, when local clients search for 'best hair spa near me' on Google Maps, your competitor with more reviews shows up first, stealing away high-value bookings.",
      image: "/Who its for/Salons, Spas & Parlors.webp",
    },
    {
      icon: "🩺",
      title: "Dental & Physiotherapy",
      pain: "Patients trust you with their health, and your clinical outcomes are stellar. Yet, one anonymous 1-star review from a disgruntled person who never set foot in your clinic is sitting at the top of your Google profile, hurting your professional credibility.",
      image: "/Who its for/Dental & Physiotherapy.webp",
    },

    
     {
      icon: "📱",
      title: "Electronics & Mobile Stores",
      pain: "Customers buy expensive gadgets from you and enjoy great product guidance. However, when people search for 'authorized dealers near me', your store is ignored because your competitors have accumulated hundreds of reviews through pushy sales tactics.",
      image: "/Who its for/Electronics & Mobile Stores.webp",
    },

    {
      icon: "💎",
      title: "Jewellery Showrooms",
      pain: "Buying gold and diamond jewellery is entirely based on trust. When families are researching showrooms for wedding shopping, a lack of detailed 5-star reviews about your craftsmanship and transparent billing makes them hesitate to visit.",
      image: "/Who its for/Jewellery Showrooms.webp",
    },
    {
      icon: "🚗",
      title: "Service Stations & Garages",
      pain: "You provide honest repairs and original parts, but customers are naturally skeptical of mechanics. Without a stream of positive reviews highlighting your transparent pricing and prompt deliveries, car owners choose authorized dealers over your workshop.",
      image: "/Who its for/Service Stations & Garages.webp",
    },
      {
      icon: "🧸",
      title: "Play Schools & Daycare",
      pain: "Parents look for absolute safety, care, and cleanliness when choosing a daycare for their toddlers. If your profile doesn't showcase heartfelt reviews from existing mothers, new parents will not trust you with their child's early education.",
      image: "/Who its for/Play Schools & Daycare.webp",
    },
    {
      icon: "☕",
      title: "Cafes, Bakeries & Parlors",
      pain: "You serve hundreds of young college students daily. They love your aesthetic vibes and cakes, but since there is no quick nudge at the billing counter, they leave without sharing their experiences online, leaving your profile looking inactive.",
      image: "/Who its for/Cafes, Bakeries & Parlors.webp",
    },
    {
      icon: "🚘",
      title: "Used Car Dealerships",
      pain: "The second-hand vehicle market is filled with suspicion about hidden engine defects. Positive customer testimonials praising your transparent inspection reports are critical to proving your integrity and converting high-ticket buyer leads.",
      image: "/Who its for/Used Car Dealerships.webp",
    },
    {
      icon: "🧪",
      title: "Labs & Medical Clinics",
      pain: "You provide accurate, timely blood reports and medical consults. However, when patients look for a reliable diagnostic center, the lack of positive reviews regarding your hygiene standards and polite staff makes them choose franchised chains instead.",
      image: "/Who its for/Labs & Medical Clinics.webp",
    },
  
    {
      icon: "👕",
      title: "Apparel & Fashion Boutiques",
      pain: "You stock unique, trend-setting designs and offer great fabric quality. But since shoppers only review when they face issues with alterations or parking, your online reputation doesn't reflect the daily compliments your collections receive.",
      image: "/Who its for/Apparel & Fashion Boutiques.webp",
    },
    {
      icon: "✨",
      title: "Car Detailing & Wash",
      pain: "You spend hours detailing luxury vehicles to a mirror-like finish. But since customers drive off immediately after seeing their shiny car, you miss the window to capture their instant delight, leaving your Google rating lower than it should be.",
      image: "/Who its for/Car Detailing & Wash.webp",
    },
    {
      icon: "🏨",
      title: "Hotels & Guest Houses",
      pain: "Travelers check reviews on Google and booking portals before making reservations. If your rating falls below 4.0 because a couple of guests complained about Wi-Fi, you lose out on corporate and family bookings that look for highly rated properties.",
      image: "/Who its for/Hotels & Guest Houses.webp",
    },
    {
      icon: "💻",
      title: "Co-working Spaces",
      pain: "Startups and freelancers love your high-speed internet, clean desks, and community events. But unless you ask them at the right time, they won't review, leaving your space looking vacant and unverified to companies searching for new office branches.",
      image: "/Who its for/Co-working Spaces.webp",
    },
     {
      icon: "🏢",
      title: "Real Estate Consultants",
      pain: "Buying a flat or plot is a lifetime investment for most buyers. If they search your agency name and find a blank profile or unresolved complaints about booking delays, they will walk away from deals worth crores out of sheer anxiety.",
      image: "/Who its for/Real Estate Consultants.webp",
    },
   
    {
      icon: "🔧",
      title: "Tyre & Battery Shops",
      pain: "You save stranded drivers with quick tyre replacements and battery swaps. These customers are incredibly grateful in the moment, but once they hit the road, they forget to write a review unless you present a friction-free way to scan and rate.",
      image: "/Who its for/Tyre & Battery Shops.webp",
    },
    {
      icon: "🎓",
      title: "Skill & Language Academies",
      pain: "Your specialized professional courses have helped graduates secure high-paying jobs. However, without public student reviews validating your placement claims, new admissions are hesitant to pay the tuition fees, thinking it's another online scam.",
      image: "/Who its for/Skill & Language Academies.webp",
    },
     {
      icon: "💪",
      title: "Gyms & Fitness Centers",
      pain: "Your members achieve incredible weight loss and fitness transformations in your facility. But because their testimonials are confined to internal group chats, local fitness enthusiasts searching for a premium gym nearby cannot see your success stories.",
      image: "/Who its for/Gyms & Fitness Centers.webp",
    },
    {
      icon: "🏠",
      title: "Interior & Architecture",
      pain: "You design beautiful, functional residential spaces. But because your project cycle is long, you only get a handful of clients a year. If you don't secure detailed, visual reviews from each of them, new clients won't trust you with their home budgets.",
      image: "/Who its for/Interior & Architecture.webp",
    },
    {
      icon: "🍻",
      title: "Pubs, Bars & Breweries",
      pain: "Your weekend nights are packed with great music and craft beer. But because customers are busy partying, they never think of writing a review, and you end up with a rating that is skewed by occasional complaints about entry charges or queue times.",
      image: "/Who its for/Pubs, Bars & Breweries (1).webp",
    },
    {
      icon: "🛋️",
      title: "Furniture Showrooms",
      pain: "You craft premium teakwood sofas and modern beds. When customers invest in heavy furniture, they research extensively. If your store lacks reviews highlighting durable wood quality and smooth home delivery, they will buy from online mega-brands instead.",
      image: "/Who its for/Furniture Showrooms.webp",
    },
   
    {
      icon: "🥡",
      title: "Cloud Kitchens & Takeaways",
      pain: "You serve delicious, hygienic meals, but you have no dine-in area to build personal relationships. Without physical QR codes at checkout, it is extremely difficult to encourage online food app customers to leave reviews directly on your Google Business page.",
      image: "/Who its for/Cloud Kitchens & Takeaways.webp",
    },
   
     {
      icon: "📚",
      title: "Coaching Institutes",
      pain: "Your teaching staff works tirelessly to help students clear competitive exams, but parents looking to enroll their kids are hesitant because they cannot find authentic reviews online. Positive student testimonials are scattered on WhatsApp instead of being visible publicly.",
      image: "/Who its for/Coaching Institutes.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe gesture support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="w-full bg-[#1B2A4A] py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-sans font-bold text-[0.75rem] text-[#3DAA72] uppercase tracking-[2px]">
            WHO IT’S FOR
          </span>
          <h2 className="font-sans font-bold text-[2rem] md:text-[3rem] leading-tight text-white max-w-4xl mx-auto">
            Built for business owners who know their service is good, but their rating doesn’t show it.
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full px-1 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-8px] md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] hover:bg-[#3DAA72] text-[#CBD5E1] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div
            className="overflow-hidden mx-auto"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out -mx-3"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="group bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-1 shadow-card">
                    {/* Card Image Wrapper */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1B2A4A]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    {/* Card Text Content */}
                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        <div className="text-4xl select-none">{card.icon}</div>
                        <h3 className="font-sans font-bold text-[1.25rem] text-white leading-tight">
                          {card.title}
                        </h3>
                        <p className="font-sans text-[0.92rem] text-[#CBD5E1] leading-relaxed">
                          {card.pain}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-8px] md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#253559] border border-[#3D4F72] hover:border-[#3DAA72] hover:bg-[#3DAA72] text-[#CBD5E1] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
