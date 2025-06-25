// src/pages/About/About.tsx
import { useEffect, useState } from "react";
/* import {
  Title,
  FigAnimation,
  Resume,
  Skills,
  Recognitions
} from "../../components"; */

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="flex flex-col w-full mt-40 bg-inherit relative">
      <div className="flex flex-col justify-center items-start w-full mb-16 px-4">
        <div className="flex justify-start items-center w-3/5 ml-8 mb-20 relative z-10 max-md:w-full max-md:ml-0 max-md:mt-80">
          {/* <Title text="COMMITMENT AND CREATIVITY RUNS IN HIS VEINS." />
          <img
            src="/images/portrait.png"
            alt="drawn portrait"
            className={`
              w-[550px] absolute top-20 right-8 transition-all duration-300
              mask-[radial-gradient(circle,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_90%)]
              ${scrolled ? "invert opacity-50" : ""}
              max-md:right-0 max-md:w-[380px]
            `}
          /> */}
          title img
        </div>
        {/*  <FigAnimation /> */}
      </div>
      Resume Skills Recognitions
      {/* <Resume />
      <Skills />
      <Recognitions /> */}
    </section>
  );
};

export default About;
