// src/utils/swalHandler.ts
import Swal from "sweetalert2";

const commonOptions = {
  background: "#1a1a1a",
  color: "#f5f5f5",
  timerProgressBar: true,
  showConfirmButton: false
};

export const swalHandler = {
  success: (
    message = "I'll reply as soon as possible.",
    title = "Message sent!"
  ) =>
    Swal.fire({
      icon: "success",
      title,
      text: message,
      iconColor: "#34d399", // Tailwind emerald-400
      timer: 3000,
      ...commonOptions
    }),

  error: (
    message = "Something went wrong. Try again later.",
    title = "Oops!"
  ) =>
    Swal.fire({
      icon: "error",
      title,
      text: message,
      iconColor: "#f87171", // Tailwind red-400
      timer: 4000,
      ...commonOptions
    }),

  // Opcional: puedes agregar más variantes
  info: (message: string, title = "Notice") =>
    Swal.fire({
      icon: "info",
      title,
      text: message,
      iconColor: "#60a5fa", // Tailwind blue-400
      timer: 3000,
      ...commonOptions
    })
};
