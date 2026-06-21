"use client";

import { useState, useCallback } from "react";
import { RAZORPAY_KEY_ID } from "@/lib/constants";
import toast from "react-hot-toast";

export function useRazorpay() {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve(false);
        return;
      }
      
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const processPayment = useCallback(async (planName, amount) => {
    setLoading(true);

    try {
      const isScriptLoaded = await loadRazorpayScript();

      if (!isScriptLoaded) {
        toast.error("Failed to load Razorpay payment SDK. Check your network.");
        setLoading(false);
        return;
      }

      const amountInPaise = amount * 100;

      const options = {
        key: RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: amountInPaise,
        currency: "INR",
        name: "Karo Simple",
        description: `${planName} Subscription`,
        image: "/logo.svg",
        handler: function (response) {
          toast.success(`Payment Successful! ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          plan: planName,
          market: "India",
        },
        theme: {
          color: "#3DAA72",
        },
        modal: {
          ondismiss: function () {
            toast.error("Payment cancelled by user.");
            setLoading(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (err) {
      console.error("Payment initiation error:", err);
      toast.error("Something went wrong initiating payment.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { processPayment, loading };
}
