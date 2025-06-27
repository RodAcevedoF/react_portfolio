import { useScrollContext } from "../contexts";
import { Portrait, Title, ToggleParticles } from "../components";
import { portraitD } from "../../public";
/* import {
  Resume,
  Skills,
  Recognitions
} from "../../components"; */

const About = () => {
  const scrolled = useScrollContext();
  console.log("scrolled:", scrolled);

  return (
    <section className="flex flex-col justify-center items-center w-full xl:w-[80%] mt-40 bg-inherit relative">
      <div className="flex w-fit mb-20 relative z-10">
        <Title
          text="COMMITMENT AND CREATIVITY RUN EVERY PROJECT"
          width="w-[60%]"
        />
        <Portrait src={portraitD} alt="drawn portrait" />
      </div>
      <ToggleParticles />
      <div>
        Resume Skills Recognitions
        {/* <Resume />
      <Skills />
      <Recognitions /> */}
      </div>
    </section>
  );
};

export default About;
