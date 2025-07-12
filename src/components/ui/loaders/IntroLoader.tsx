import type { FC } from "react";

export const IntroLoader: FC = () => {
  const blocks = Array.from({ length: 24 });

  return (
    <div className="flex items-center justify-center w-20 h-20 relative">
      <div className="flex items-center justify-center relative">
        {blocks.map((_, i) => (
          <div
            key={i}
            className="w-2 h-[10px] mx-[2px] bg-[#358ff6] animate-[loader_5s_infinite] shadow-[0_0_30px_#358ff6]"
            style={{ animationDelay: `${(i + 1) * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};
