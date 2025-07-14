import type { FC } from "react";

type NotFoundBtnProps = {
  text: string;
};

export const NotFoundBtn: FC<NotFoundBtnProps> = ({ text }) => {
  return (
    <button className="relative group overflow-hidden rounded-md border-none bg-[#045ebf] px-6 py-3 text-[1.2em] text-[#DEDEDE] shadow-[8px_8px_8px_rgba(0,0,0,0.3)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_6px_rgba(0,0,0,0.3)]">
      <b>{text}</b>
      <span className="absolute top-0 left-0 h-0 w-0 rounded-br-md bg-yellow-200 shadow-[4px_4px_4px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:h-6 group-hover:w-6" />
    </button>
  );
};
