import { data } from "../../../data";
import { RandomBachWork, MailBtn, ContactBtn } from "../../../components";
import { useModalContext } from "../../../contexts";
import { type BioSectionProps } from "../../../types";

export const BioSection = ({ innerRef, extraClass }: BioSectionProps) => {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };
  return (
    <section
      ref={innerRef}
      id="bio"
      className={`w-full font-inherit flex flex-col justify-center items-start gap-10 px-5 md:px-10 ${extraClass}`}
    >
      <div className="flex flex-col w-full text-center">
        <h4 className="font-[Tungsten] text-[10vw] pl-7 xl:pl-0 md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em]">
          <span className="text-blue-400">A</span>BOUT
        </h4>
      </div>
      <div className="flex w-full justify-center xl:justify-between items-center gap-10 flex-wrap sm:flex-nowrap">
        <p className="w-full font-inherit font-[var(--primary-color)] text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] leading-[1.5]">
          {data.aboutMe}
        </p>
        <RandomBachWork />
      </div>
      <button className="flex w-auto cursor-pointer justify-center items-center border-none bg-inherit transition-transform duration-300 ease-in-out text-inherit group self-center sm:self-start">
        <span className="font-bold text-[1.2em] tracking-[0.5em] font-[Tungsten] transition-opacity duration-200 ease-in-out">
          DOWNLOAD RESUME
        </span>
        <span className="bg-blue-400/70 h-[0.2em] w-[16em] left-[10] translate-x-[30%] opacity-0 absolute transition-all duration-200 ease-in-out rounded-[0.5em] group-hover:opacity-100 group-hover:translate-x-[-2%]" />
      </button>
      <div className="flex flex-col w-full justify-center items-end pr-10">
        <h4 className="font-[Tungsten] text-[1.5em] font-[400] tracking-[0.5em]">
          <span className="text-blue-400">CON</span>TACT
        </h4>
        <div className="flex w-full justify-end gap-[2rem] p-[1rem] flex-wrap">
          <ContactBtn
            name="LinkedIn"
            url="https://linkedin.com"
            hoverColor="hover:text-violet-500"
            pointColor="text-violet-500"
          />
          <ContactBtn
            name="GitHub"
            url="https://github.com"
            hoverColor="hover:text-emerald-400"
            pointColor="text-emerald-400"
          />
        </div>
        <div className="p-[0_1em] flex flex-col">
          <MailBtn text="EMAIL" toggleModal={openModal} />
        </div>
      </div>
    </section>
  );
};

export default BioSection;
