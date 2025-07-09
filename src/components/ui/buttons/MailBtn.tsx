import type { MailBtnProps } from "../../../types/HomeTypes";
export const MailBtn = ({ text, toggleModal }: MailBtnProps) => {
  return (
    <button
      className="group flex flex-col items-start text-[2.2rem] sm:text-[3em] font-bold text-[var(--primary-color)] bg-inherit cursor-pointer border-none w-fit"
      onClick={toggleModal}
    >
      {text}
      <div className="mt-0 h-[0.2em] w-0 opacity-0 bg-blue-400/80 rounded-xs transition-all duration-300 ease-in-out group-hover:w-[100%] group-hover:opacity-80" />
    </button>
  );
};
