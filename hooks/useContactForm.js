"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitToFormspree } from "@/lib/formspree";
import toast from "react-hot-toast";

// Contact form Zod validation schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === "") return true;
      const digitsOnly = val.replace(/[^\d]/g, "");
      const targetDigits = digitsOnly.slice(-10);
      return targetDigits.length === 10 && /^[6-9]/.test(targetDigits);
    }, "Please enter a valid 10-digit Indian phone number"),
  businessType: z.enum(
    ["Restaurant", "Salon", "Clinic", "Medical Store", "Kirana", "CA/Lawyer", "Other"],
    { errorMap: () => ({ message: "Please select a valid business category" }) }
  ),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "Restaurant",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const success = await submitToFormspree(data);

    if (success) {
      toast.success("Message sent! We'll reply within 24 hours.");
      reset();
    } else {
      toast.error("Failed to send message. Please try again or contact via WhatsApp.");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
}
