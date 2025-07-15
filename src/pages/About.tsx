import { Portrait, Resume, Title, ToggleParticles } from "../components";
import { portraitD } from "../assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center w-full xl:w-[80%] mt-40 bg-inherit relative">
      <div className="flex w-fit mb-10 md:mb-20 z-10 mt-50 md:mt-15">
        <Title
          animateWords
          text={t("about_title.title")}
          width="w-[100%] md:w-[60%]"
          extraClases="text-[2.5rem] xl:text-[4.5rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[3rem] z-1"
        />
        <Portrait src={portraitD} alt="drawn portrait z-0" />
      </div>
      <ToggleParticles />
      <div className="flex flex-col max-w-full">
        <Resume />
      </div>
    </section>
  );
};

export default About;
