import { useRandomBachWork } from "../../../hooks";
import { Music } from "lucide-react";

export const RandomBachWork = () => {
  const { work, loading, error, refetch } = useRandomBachWork();

  return (
    <div className="flex flex-col min-w-[250px] min-h-[220px] border-2 rounded-sm border-violet-400 p-2 hover:translate-y-[-0.5rem] transition-all duration-200 ease">
      <div className="flex justify-start items-center gap-1 text-violet-400">
        <Music />
        <p>ProTip:</p>
      </div>
      <h2 className="text-[1.5rem]">
        <span className="text-cyan-300">Bach</span> while coding
        <span className="text-cyan-300">!</span>
      </h2>
      <p>Need some examples?</p>
      <div className="h-[110px] flex flex-col justify-center items-start gap-1">
        {loading && <div>Cargando obra de Bach...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && work && (
          <>
            <h4>
              <span className="text-cyan-300">Title:</span> {work.title}
            </h4>
            <p>{work.subtitle}</p>
            <small>
              <span className="text-cyan-300">genre:</span> {work.genre}
            </small>
          </>
        )}
      </div>

      <button
        onClick={refetch}
        className="mt-2 p-2 bg-violet-600 cursor-pointer text-[var(--primary-color)]"
      >
        Try again
      </button>
    </div>
  );
};
