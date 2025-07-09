import { useRandomBachWork } from "../../../hooks";
import { Music } from "lucide-react";
import { useEffect, useState } from "react";

export const RandomBachWork = () => {
  const { work, loading, error, refetch } = useRandomBachWork();
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setDelayedLoading(false), 1000);
      return () => clearTimeout(timeout);
    } else {
      setDelayedLoading(false);
    }
  }, [loading]);

  const handleCardClick = () => {
    if (work?.title) {
      const query = encodeURIComponent(`Bach ${work.title}`);
      window.open(
        `https://www.youtube.com/results?search_query=${query}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer flex flex-col justify-between w-[320px] min-h-[250px] backdrop-blur-md rounded-sm border-2 border-blue-400/30 shadow-xl p-2 hover:scale-105 transition-all duration-200 ease"
    >
      <div className="flex w-full justify-start items-center gap-1 text-blue-400">
        <Music />
        <p>ProTip:</p>
      </div>
      <h2 className="text-[1.5rem]">
        <span className="text-yellow-200">Bach</span> while coding
        <span className="text-yellow-200">!</span>
      </h2>
      <p>Need some examples?</p>

      <div className="h-full w-full flex flex-col justify-center items-start gap-1">
        {(loading || delayedLoading) && (
          <div className="flex w-full h-full items-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        )}

        {!loading && !delayedLoading && error && <div>{error}</div>}

        {!loading && !delayedLoading && !error && work && (
          <>
            <h4>
              <span className="text-yellow-200">Title:</span> {work.title}
            </h4>
            <p>{work.subtitle}</p>
            <small>
              <span className="text-yellow-200">genre:</span> {work.genre}
            </small>
          </>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setDelayedLoading(true); // reinicia el fake loading
          refetch();
        }}
        className="mt-2 p-2 bg-blue-400/50 cursor-pointer text-[var(--primary-color)] transition-colors duration-300 hover:bg-blue-400 "
      >
        Try again
      </button>
    </div>
  );
};
