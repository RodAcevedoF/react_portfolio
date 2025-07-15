import { motion, AnimatePresence } from "framer-motion";
import { Title, ToggleParticles, ExpGrid, AnimContainer } from "../components";
import { useScrollContext } from "../contexts";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Home = () => {
  const { scrolled } = useScrollContext();
  const { t } = useTranslation();

  return (
    <section className="flex flex-col w-full mt-20 sm:mt-35 xl:mt-38 bg-inherit justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full gap-8 mb-5 sm:mb-10">
        <Title
          text={t("home.hero")}
          animateWords
          extraClases="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] xl:text-[5vw] py-8 px-2"
          width="w-full"
        />
        <ToggleParticles />
      </div>

      <article className="flex flex-col w-full justify-center items-center">
        <AnimatePresence>
          {scrolled && (
            <motion.h3
              key="h3-title"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[15vw] leading-[0.5] text-transparent mb-20 mt-30"
              style={{
                WebkitTextStrokeWidth: "3px",
                WebkitTextStrokeColor: "var(--primary-color)"
              }}
            >
              <Trans
                i18nKey="home.most_recent"
                components={{
                  blue: <span style={{ WebkitTextStrokeColor: "#51A2FF" }} />
                }}
              />
            </motion.h3>
          )}
        </AnimatePresence>

        <ExpGrid />
      </article>
      <article className="flex flex-col w-full items-center justify-center overflow-hidden my-32">
        <AnimContainer />
      </article>
    </section>
  );
};

export default Home;
