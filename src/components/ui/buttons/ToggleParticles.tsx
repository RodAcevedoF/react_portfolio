import { useScrollContext } from "../../../contexts";

const ToggleParticlesBtn = () => {
  const { toggleParticles, mode } = useScrollContext();
  const text = mode === "particles" ? "TURN OFF" : "TURN ON";

  return (
    <button
      onClick={toggleParticles}
      className={`group relative w-24 h-24 rounded-full bg-blue-500 text-white overflow-hidden flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-105 ${
        mode === "particles" ? "ring-2 ring-white" : ""
      }`}
    >
      {/* Texto girando circularmente, con más separación */}
      <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite]">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ transform: `rotate(${index * 19}deg)` }}
            className="absolute inset-[4px] origin-center text-sm"
          >
            {char}
          </span>
        ))}
      </div>

      {/* Círculo central con doble flecha */}
      <div className="relative w-10 h-10 bg-neutral-100 text-blue-500 rounded-full flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 14 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%] group-hover:text-black"
        >
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>
        <svg
          viewBox="0 0 14 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 absolute transition-transform duration-300 delay-100 translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-black"
        >
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>
      </div>
    </button>
  );
};

export default ToggleParticlesBtn;
