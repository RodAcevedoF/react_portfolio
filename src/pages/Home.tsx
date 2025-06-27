import { motion, AnimatePresence } from "framer-motion";
import { Title, ToggleParticles, ExpGrid, AnimContainer } from "../components";
import { useScrollContext } from "../contexts";

const Home = () => {
  const { scrolled } = useScrollContext();

  return (
    <section className="flex flex-col w-full mt-40 bg-inherit justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full gap-8 mb-10">
        <Title
          text="FROM THE FIRST LINE  OF CODE TO EVERY ASPECT OF SOFTWARE ENGINEERING"
          extraClases="text-[8vw] sm:text-[7vw] md:text-[3rem] xl:text-[4.5vw]"
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
              className="text-[6em] leading-[0.5] text-transparent mb-20 mt-30"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "var(--primary-color)"
              }}
            >
              Most recent
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
