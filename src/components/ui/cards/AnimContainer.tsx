import { useTranslation } from "react-i18next";
import { GithubLink } from "../../../components";
import LetterGlitch from "../../animations/glitchBackground";

export const AnimContainer = () => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col relative justify-around rounded-md w-full p-6">
      <div
        className="flex flex-col justify-center items-center relative w-full h-[60vh] px-8"
        style={{
          WebkitMaskImage: `
      linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%),
      linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)`,
          maskImage: `
      linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%),
      linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)`,
          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%"
        }}
      >
        <h2
          className="text-transparent pl-0 lg:pl-[20%] w-fit self-center lg:self-start font-bold uppercase  text-[3rem] sm:text-[4rem] z-5"
          style={{ WebkitTextStroke: "3px var(--primary-color)" }}
        >
          {t("homecard.currently")}
        </h2>
        <div className="absolute w-full h-full inset-0 z-0 opacity-50">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          ;
        </div>
        <p className="text-center font-bold text-[2.5rem] text-[var(--primary-color)] sm:text-[3rem] lg:text-[4rem] z-10 mb-10">
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
