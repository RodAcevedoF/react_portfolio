export const AnimContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center relative w-[40rem] h-screen px-8 border-2 border-red-500">
      {/* Aquí va el fondo animado de React Bits */}
      <div className="absolute inset-0 z-0">
        {/* Tu componente React que renderiza el fondo irá aquí */}
        {/* <AnimatedCanvasBackground /> */}
      </div>

      <h2
        className="absolute top-[-5%] left-[10%] text-transparent font-bold uppercase whitespace-nowrap text-[4rem]"
        style={{ WebkitTextStroke: "3px var(--primary-color)" }}
      >
        CURRENTLY
      </h2>

      <p className="text-center font-bold text-[var(--primary-color)] text-[3rem] z-10">
        HELPING BRANDS WIN
      </p>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[2rem] font-bold tracking-[0.5em] z-10 transition-all duration-500 hover:text-transparent"
        style={{
          fontFamily: "Tungsten",
          WebkitTextStroke: "0px"
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.webkitTextStroke = "0.5px var(--back-general)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.webkitTextStroke = "0px")}
      >
        VISIT MY GITHUB!
        <img
          src="/videos/githubanimation.gif"
          alt="github animated icon"
          className="w-[5rem] invert ml-4"
        />
      </a>
    </div>
  );
};
