import type { ReactNode } from "react";

type MiniSkillBtnProps = {
  text: string;
  children?: ReactNode;
};

export const MiniSkillBtn = ({ text, children }: MiniSkillBtnProps) => {
  return (
    <div className="flex justify-center items-center gap-5 border-3 rounded-xl py-1 px-1.5 border-blue-400/50 hover:border-emerald-400/50 hover:bg-blue-600 transition-colors duration-300">
      {children}
      <p>{text}</p>
    </div>
  );
};
