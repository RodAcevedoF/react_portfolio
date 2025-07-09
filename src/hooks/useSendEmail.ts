// src/hooks/useSendEmail.ts
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

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
