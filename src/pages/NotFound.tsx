import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HamsterLoader, NotFoundBtn } from "../components";
import { useTranslation, Trans } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation();
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
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-[10rem] sm:text-[15rem] absolute top-8 sm:top-[-50px] font-bold font-[Lilita] text-[var(--primary-color)]/20">
          404
        </h2>
        <HamsterLoader />
        <p className="mt-4 text-2xl text-white font-[Lilita]">
          {t("not_found.text")}
        </p>
        <p className="mt-2 text-xl text-gray-400 font-[Lilita]">
          <Trans
            i18nKey={t("not_found.redirect")}
            components={{ it: <span className="italic" /> }}
          />
        </p>
        <NavLink to="/home" className="mt-5">
          <NotFoundBtn text={t("not_found.button")} />
        </NavLink>
      </div>
    </div>
  );
};
