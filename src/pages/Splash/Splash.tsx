// pages/Splash.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500); // 3 segundos o cuando termine la animación
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="w-screen h-screen flex justify-center items-center bg-neutral-950 absolute top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-white text-5xl font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        ROD ACEVEDO
      </motion.h1>
    </motion.div>
  );
};
