import { data } from "../../../data/data";
import {
  MailBtn,
  ContactBtn,
  EducationListItem,
  ExperienceListItem,
  RandomBachWork
} from "../../../components";
import { useModalContext } from "../../../contexts";
import { type WorkExperienceItem, type EducationItem } from "../../../types";

export const Resume = () => {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };

  return (
    <article className="text-[var(--primary-color)] flex flex-col px-5 w-full gap-[5em] font-[Lilita] mt-30">
      {/* Bio Section */}
      <section className="w-[100%] font-inherit flex flex-col justify-center items-start gap-10">
        <div className="flex w-full justify-center items-center gap-10">
          <p className="w-[100%] font-inherit font-[var(--primary-color)] text-[1.7em] leading-[1.5]">
            {data.aboutMe}
          </p>
          <RandomBachWork />
        </div>
        <button className="flex w-auto cursor-pointer justify-center items-center border-none bg-inherit transition-transform duration-300 ease-in-out text-inherit group">
          <span className="font-bold text-[1.2em] tracking-[0.5em] font-[Tungsten] transition-opacity duration-200 ease-in-out">
            DOWNLOAD RESUME
          </span>
          <span className="bg-cyan-300 h-[0.2em] w-[16em] left-[10] translate-x-[30%] opacity-0 absolute transition-all duration-200 ease-in-out rounded-[0.5em] group-hover:opacity-100 group-hover:translate-x-[-2%]" />
        </button>
      </section>

      {/* Education & Experience Section */}
      <section className="flex w-full flex-col gap-[1em] p-5">
        {/* Education */}
        <h4 className="font-[Tungsten] text-[2.5rem] font-[400] self-start tracking-[0.5em]">
          <span className="text-violet-400">EDU</span>CATION
        </h4>
        <ul className="w-full list-none p-0 flex flex-wrap justify-center items-center">
          {data.education.map(
            (diploma: EducationItem, index: number) =>
              diploma && <EducationListItem key={index} diploma={diploma} />
          )}
        </ul>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 w-full h-full min-h-[70vh] p-5">
        {/* Experience */}
        <h4 className="font-[Tungsten] text-[2.5rem] font-[400] self-start tracking-[0.5em]">
          <span className="text-violet-400">EXP</span>ERIENCE
        </h4>
        <ul className="w-full h-[100%] flex flex-wrap list-none items-center justify-center gap-10">
          {data.workExperience.map((job: WorkExperienceItem, index: number) => (
            <ExperienceListItem key={index} job={job} />
          ))}
        </ul>
      </section>
      {/* Contact */}
      <div className="contact-newdiv">
        <h4 className="font-[Tungsten] text-[1.2em] font-[400] tracking-[0.5em]">
          CONTACT
        </h4>
        <div className="flex w-full gap-[1em] p-[1em] flex-wrap">
          <ContactBtn
            name="LinkedIn"
            url="https://linkedin.com"
            hoverColor="hover:text-blue-500"
            pointColor="text-blue-500"
          />
          <ContactBtn
            name="GitHub"
            url="https://github.com"
            hoverColor="hover:text-green-500"
            pointColor="text-green-500"
          />
        </div>
        <div className="p-[0_1em] flex flex-col">
          <MailBtn text="EMAIL" toggleModal={openModal} />
        </div>
      </div>
    </article>
  );
};
