import { useRandomBachWork } from "../../../hooks";
import { Music, CircleArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { MusicSpin } from "../loaders";
import { useTranslation, Trans } from "react-i18next";

export const RandomBachWork = () => {
  const { work, loading, error, refetch } = useRandomBachWork();
  const [delayedLoading, setDelayedLoading] = useState(true);
  const { t } = useTranslation();

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
      className="cursor-pointer flex flex-col justify-between w-[320px] min-h-[300px] backdrop-blur-md rounded-sm border-2 border-blue-400/30 shadow-2xl shadow-white/30 p-4 hover:scale-105 transition-all duration-200 ease"
    >
      <div className="flex w-full justify-start items-center gap-4 text-blue-400">
        <Music />
        <p>ProTip:</p>
      </div>
      <h2 className="text-[1.5rem]">
        <Trans
          i18nKey={t("bach_card.title")}
          components={{ yellow: <span className="text-yellow-200" /> }}
        />
      </h2>
      <p className="flex gap-2">
        {t("bach_card.subtitle")} <CircleArrowDown className="text-blue-400" />
      </p>

      <div className="h-full w-full flex flex-col justify-center items-start gap-1">
        {(loading || delayedLoading) && (
          <div className="flex w-full h-full min-h-[5rem] items-center gap-2">
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
          setDelayedLoading(true);
          refetch();
        }}
        className="group mt-2 p-2 w-full flex justify-center items-center gap-5 cursor-pointer text-[var(--primary-color)] transition-colors duration-300"
      >
        <span className="transition-all p-2 w-45 rounded-md border-yellow-200/30 border-2 duration-200 ease-in-out group-hover:text-blue-500 group-hover:scale-110">
          Try again!
        </span>
        <MusicSpin />
      </button>
    </div>
  );
};
