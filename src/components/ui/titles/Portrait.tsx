import { useScrollContext } from "../../../contexts";

type PortraitProps = {
  src: string;
  alt: string;
};

export const Portrait = ({ src, alt }: PortraitProps) => {
  const { scrolled } = useScrollContext();
  return (
    <img
      src={src}
      alt={alt}
      className={`
            w-[400px] absolute top-[-25%] right-[10%]
            transition-all duration-300
            mask-[radial-gradient(circle,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_90%)]
            ${scrolled ? "invert" : "filter-none"}
          `}
    />
  );
};
