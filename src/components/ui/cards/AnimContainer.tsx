import { useTranslation } from "react-i18next";
import { GithubLink } from "../../../components";
//import Threads from "../../animations/Threads";

export const AnimContainer = () => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col relative">
      <h2
        className="absolute left-[10%] text-transparent font-bold uppercase whitespace-nowrap text-[3rem] sm:text-[4rem] z-5"
        style={{ WebkitTextStroke: "3px var(--primary-color)" }}
      >
        {t("homecard.currently")}
      </h2>
      <div
        className="flex flex-col justify-center items-center relative w-[100vw] md:w-[90vw] lg:w-[70vw] h-[60vh] px-8 bg-[radial-gradient(circle,_#0a0a0a_60%,_#1b2736_100%)]"
        style={{
          WebkitMaskImage: `
      linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%),
      linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
          maskImage: `
      linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%),
      linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)`,
          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%"
        }}
      >
        <div className="absolute w-full h-full inset-0 z-0">
          {/* <Threads amplitude={5} distance={0} enableMouseInteraction={true} /> */}
        </div>
        <p className="text-center font-bold text-[2.5rem] text-[var(--primary-color)] sm:text-[3rem] lg:text-[4rem] z-10 mt-25 mb-10">
          <span className="text-blue-400">{t("homecard.helping")}</span>{" "}
          {t("homecard.brandsWin")}
        </p>
        <div className="flex items-center justify-center gap-5 w-full">
          <GithubLink
            frontText={t("homecard.button_text")}
            hoverText={t("homecard.hover_button")}
            username={"rodacevedof"}
          />
        </div>
      </div>
    </article>
  );
};
