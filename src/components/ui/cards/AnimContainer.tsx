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
          <Threads amplitude={5} distance={0} enableMouseInteraction={true} />
        </div>
        <p className="text-center font-bold text-[2.5rem] text-[var(--primary-color)] sm:text-[3rem] lg:text-[4rem] z-10 mt-25 mb-10">
          <span className="text-blue-400">HELPING</span> BRANDS WIN
        </p>
        <div className="flex items-center justify-center gap-5 w-full">
          {/* <p className="text-[2rem] sm:text-[2rem] font-[Tungsten] tracking-[0.25rem] sm:tracking-[0.75rem] text-[var(--primary-color)] z-10 transition-all duration-300 hover:text-bolder hover: trasnform hover:scale-110">
            VISIT MY <span className="">GITHUB!</span>
          </p> */}
          <GithubLink username={"rodacevedof"} />
        </div>
      </div>
    </article>
  );
};
