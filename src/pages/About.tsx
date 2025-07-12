import { Portrait, Resume, Title, ToggleParticles } from "../components";
import { portraitD } from "../assets";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full xl:w-[80%] mt-40 bg-inherit relative">
      <div className="flex w-fit mb-0 md:mb-20 z-10 mt-50 md:mt-15">
        <Title
          text="COMMITMENT AND CREATIVITY RUN EVERY PROJECT"
          width="w-[100%] md:w-[60%]"
          extraClases="text-[2rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem]"
        />
        <Portrait src={portraitD} alt="drawn portrait" />
      </div>
      <ToggleParticles />
      <div className="flex flex-col max-w-full">
        <Resume />
      </div>
    </section>
  );
};

export default About;
