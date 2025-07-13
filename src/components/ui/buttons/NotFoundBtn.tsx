import type { FC } from "react";

type NotFoundBtnProps = {
  text: string;
};

export const NotFoundBtn: FC<NotFoundBtnProps> = ({ text }) => {
  return (
    <button className="relative text-[1.2em] px-6 py-3 bg-[#045ebf] text-[#DEDEDE] rounded-md border-none shadow-[0.5em_0.5em_0.5em_rgba(0,0,0,0.3)] active:shadow-[0.2em_0.2em_0.3em_rgba(0,0,0,0.3)] active:translate-x-[0.1em] active:translate-y-[0.1em] overflow-hidden group">
      <b>{text}</b>
      <span
        className="absolute top-0 left-0 h-0 w-0 rounded-br-md shadow-[0.2em_0.2em_0.2em_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:w-[1.6em] group-hover:h-[1.6em]"
        style={{
          background:
            "linear-gradient(135deg, rgba(33,33,33,1) 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%)"
        }}
      ></span>
    </button>
  );
};
