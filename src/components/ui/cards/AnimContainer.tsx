import { GithubLink } from "../../../components";
import Threads from "../../animations/Threads";

export const AnimContainer = () => {
  return (
    <article className="flex flex-col relative">
      <h2
        className="absolute left-[10%] text-transparent font-bold uppercase whitespace-nowrap text-[3rem] sm:text-[4rem] z-5"
        style={{ WebkitTextStroke: "3px var(--primary-color)" }}
      >
        CURRENTLY
      </h2>
      <div className="mask-fade-both flex flex-col justify-center items-center relative w-[100vw] md:w-[90vw] lg:w-[70vw] h-[60vh] px-8 bg-[radial-gradient(circle,_#0a0a0a_60%,_#1a1a2e_100%)]">
        <div className="absolute w-full h-full inset-0 z-0">
          <Threads amplitude={5} distance={0} enableMouseInteraction={true} />
        </div>
        <p className="text-center font-bold text-[var(--primary-color)] text-[2.5rem] sm:text-[3rem] lg:text-[4rem] z-10 mt-25 mb-10">
          HELPING BRANDS WIN
        </p>
        <div className="flex items-center justify-center gap-5 w-full">
          <p className="text-[2rem] sm:text-[2rem] font-[Tungsten] tracking-[0.25rem] sm:tracking-[0.75rem] text-[var(--primary-color)] z-10 transition-all duration-300 hover:text-bolder hover: trasnform hover:scale-110">
            VISIT MY GITHUB!
          </p>
          <GithubLink />
        </div>
      </div>
    </article>
  );
};
