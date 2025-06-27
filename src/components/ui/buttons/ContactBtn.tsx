type ContactBtnProps = {
  name: string;
  url: string;
  hoverColor: string;
  pointColor: string;
};

export const ContactBtn = ({
  name,
  url,
  hoverColor,
  pointColor
}: ContactBtnProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[1.8em] sm:text-[2.5em] font-bold transition-all duration-200 ease-in-out font-[Tungsten] text-[var(--primary-color)] no-underline ${hoverColor}`}
    >
      {name}
      <span className={`${pointColor}`}>.</span>
    </a>
  );
};
