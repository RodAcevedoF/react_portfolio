import { type FC } from "react";
import { arrowTop } from "../../../assets";

export const TopBtn: FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollTop}
      className="text-[1.8em] text-[var(--underline)] bg-inherit border-none cursor-pointer font-[Tungsten] transition-all duration-200 ease-in-out hover:font-bold hover:text-blue-400"
      style={{ cursor: `url(${arrowTop}), pointer` }}
    >
      Back to Top
    </button>
  );
};
