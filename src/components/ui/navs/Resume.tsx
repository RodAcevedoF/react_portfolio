import { data } from "../../../data/data";
import { MailBtn, ContactBtn } from "../../../components";
import { useModalContext } from "../../../contexts";

type EducationItem = {
  degree: string;
  university: string;
  graduationYear: number;
  honors: string;
  relevantCourses: string[];
};

type WorkExperienceItem = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const Resume = () => {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };

  return (
    <article className="text-[var(--primary-color)] flex flex-col w-full p-[1em_3em_5em_3em] gap-[5em] font-[Lilita] mt-30">
      {/* Bio Section */}
      <div className="w-[100%] font-inherit">
        <p className="w-full font-inherit font-[var(--primary-color)] text-[1.5em] leading-[1.5] text-justify">
          {data.aboutMe}
        </p>
        <button className="mt-[5em] flex w-auto cursor-pointer justify-center items-center border-none bg-inherit transition-transform duration-300 ease-in-out text-inherit group">
          <span className="font-bold text-[1.2em] tracking-[0.5em] font-[Tungsten] transition-opacity duration-200 ease-in-out">
            DOWNLOAD RESUME
          </span>
          <span className="bg-[var(--underline)] h-[0.2em] w-[16em] left-[10] translate-x-[30%] opacity-0 absolute transition-all duration-200 ease-in-out rounded-[0.5em] group-hover:opacity-100 group-hover:translate-x-[-2%]" />
        </button>
      </div>

      {/* Education & Experience Section */}
      <div className="flex w-[10%] min-w-[25%] flex-col gap-[1em]">
        {/* Education */}
        <h4 className="font-[Tungsten] text-[1.2em] font-[400] tracking-[0.5em]">
          EDUCATION
        </h4>
        <ul className="w-full list-none p-0">
          {data.education.map(
            (diploma: EducationItem, index: number) =>
              diploma && <EducationListItem key={index} diploma={diploma} />
          )}
        </ul>

        {/* Experience */}
        <h4 className="font-[Tungsten] text-[1.2em] font-[400] tracking-[0.5em]">
          EXPERIENCE
        </h4>
        <ul className="w-full list-none p-0">
          {data.workExperience.map((job: WorkExperienceItem, index: number) => (
            <ExperienceListItem key={index} job={job} />
          ))}
        </ul>

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
      </div>
    </article>
  );
};

type EducationListItemProps = {
  diploma: EducationItem;
};

export const EducationListItem = ({ diploma }: EducationListItemProps) => {
  return (
    <li className="relative mb-[1em] p-[1em_0] group">
      <p>{diploma.degree}</p>
      <p className="font-[Lilita] text-[1.2em] whitespace-pre-line">
        {`${diploma.university}, ${diploma.graduationYear}\n${diploma.honors}`}
      </p>
      <div className="absolute top-0 w-[20em] bg-[var(--underline)] text-[var(--back-general)] p-[1em] rounded-[1em] text-[0.9em] opacity-0 translate-x-[22rem] transition-all duration-300 ease-in-out z-[5] font-inherit group-hover:opacity-100 group-hover:translate-x-[18rem]">
        <h5 className="font-[Tungsten] text-[1.2em] tracking-[0.25em] pb-[0.25em]">
          Relevant Courses:
        </h5>
        <ul>
          {diploma.relevantCourses.map((course, index) => (
            <li key={index} className="font-[Lilita] p-0">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

type ExperienceListItemProps = {
  job: WorkExperienceItem;
};

export const ExperienceListItem = ({ job }: ExperienceListItemProps) => {
  return (
    <li className="relative mb-[1em] p-[1em_0] group">
      <p>{job.position}</p>
      <p className="font-[Lilita] text-[1.2em] whitespace-pre-line">
        {`${job.company}, ${job.startDate} - ${job.endDate}`}
      </p>
      <div className="absolute top-0 w-[20em] bg-[var(--underline)] text-[var(--back-general)] p-[1em] rounded-[1em] text-[0.9em] opacity-0 translate-x-[22rem] transition-all duration-300 ease-in-out z-[5] font-inherit group-hover:opacity-100 group-hover:translate-x-[18rem]">
        <h5 className="font-[Tungsten] text-[1.2em] tracking-[0.25em] pb-[0.25em]">
          Description:
        </h5>
        <p className="font-[Lilita] text-[1em]">{job.description}</p>
      </div>
    </li>
  );
};
