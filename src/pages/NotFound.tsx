import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HamsterLoader } from "../components";

export const NotFound = () => {
  //const navigate = useNavigate();
  /* 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000); // Redirige después de 4 segundos

    return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
  }, [navigate]); */

  return (
    <div
      className="absolute flex flex-col items-center justify-center inset-0 text-center p-10 z-100 w-screen min-h-screen"
      style={{ background: "var(--dark-bg)" }}
    >
      <HamsterLoader />
      <h1 className="text-3xl font-bold text-[var(--primary-color)]">
        404 - Página no encontrada
      </h1>
      <p className="mt-4 text-white">La ruta que buscás no existe.</p>
      <p className="mt-2 text-sm text-gray-400">
        Serás redirigido a <span className="font-semibold">Home</span> en unos
        segundos...
      </p>
      <NavLink
        to="/home"
        className="mt-4 text-blue-400 underline hover:text-blue-300 transition"
      >
        Ir ahora
      </NavLink>
    </div>
  );
};
