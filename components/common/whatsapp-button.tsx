"use client";
import { APP_NAME, CONTACT_PHONE } from "@/config";
import { FloatingWhatsApp } from "react-floating-whatsapp";

interface WhatsAppButtonProps {
  statusMessage?: string;
  chatMessage?: string;
  placeholder?: string;
  allowClickAway?: boolean;
  darkMode?: boolean;
}

const WhatsAppButton = ({
  statusMessage = "Typically replies within minutes",
  chatMessage = "Hello! How can we help you?",
  placeholder = "Type a message...",
  allowClickAway = true,
  darkMode = true,
}: WhatsAppButtonProps) => {
  if (!APP_NAME || !CONTACT_PHONE) {
    console.error(
      "APP_NAME and CONTACT_PHONE must be defined in the configuration."
    );
    return null;
  }

  return (
    <FloatingWhatsApp
      accountName={APP_NAME}
      phoneNumber={CONTACT_PHONE}
      avatar="/images/logo.png"
      statusMessage={statusMessage}
      chatMessage={chatMessage}
      placeholder={placeholder}
      darkMode={darkMode}
      allowClickAway={allowClickAway}
    />
  );
};

export default WhatsAppButton;
