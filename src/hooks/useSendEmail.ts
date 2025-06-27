// src/hooks/useSendEmail.ts
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_hzpaiyd";
const TEMPLATE_ID = "template_le1zewq";
const PUBLIC_KEY = "64s8LY0LFxfWYJTrH";

export const useSendEmail = () => {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY); // solo se inicializa una vez
  }, []);

  const send = async (form: HTMLFormElement) => {
    setIsSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);
      return { success: true };
    } catch (error) {
      console.error("Email sending error:", error);
      return { success: false };
    } finally {
      setIsSending(false);
    }
  };

  return { send, isSending };
};
