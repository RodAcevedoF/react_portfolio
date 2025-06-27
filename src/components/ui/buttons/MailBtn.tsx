type MailBtnProps = {
  text: string;
  toggleModal: () => void;
};

export const MailBtn = ({ text, toggleModal }: MailBtnProps) => {
  return (
    <button
      className="group flex flex-col items-start text-[3em] font-bold text-[var(--primary-color)] bg-inherit border-none cursor-pointer"
      onClick={toggleModal}
    >
      {text}
      <div className="mt-0 h-[0.2em] w-0 opacity-0 bg-[var(--underline)] rounded-xs transition-all duration-300 ease-in-out group-hover:w-full group-hover:opacity-80" />
    </button>
  );
};
