import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { CTAButton } from "./CTAButton";

export function WhatsAppButton({ className, children = "Chat with us on WhatsApp →", ...props }) {
  return (
    <CTAButton
      href={WHATSAPP_LINK}
      variant="whatsapp"
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </CTAButton>
  );
}
export default WhatsAppButton;
