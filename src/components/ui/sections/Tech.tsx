import { data } from '../../../data/data';
import { type TechSectionProps } from '../../../types';
import { useEffect } from 'react';
import { TechCard } from '../cards';
import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Tech = ({ innerRef, extraClass }: TechSectionProps) => {
  const tech = data.tech;
  const learningTech = tech.filter((item) => item.learning);
  const knownTech = tech.filter((item) => !item.learning);
  const { t } = useTranslation();

  useEffect(() => {
    tech.forEach((item) => {
      if (item.hoverImg) {
        const img = new Image();
        img.src = item.hoverImg;
      }
    });
  }, [tech]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      ref={innerRef}
      className={`flex flex-col w-full items-center py-12 sm:px-4 mt-10 ${extraClass}`}>
      <div className='flex flex-col w-full text-center justify-center items-center'>
        <motion.h4
          className='w-full text-start font-[Tungsten] text-[10vw] pl-7 xl:pl-0 md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em] mb-15'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}>
          <Trans
            i18nKey={t('about_sections.tech')}
            components={{ blue: <span className='text-blue-400' /> }}
          />
        </motion.h4>

        <section className='w-full flex flex-col items-center gap-6'>
          <motion.h5
            className='text-xl text-blue-500 tracking-wide uppercase'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}>
            <Trans
              i18nKey={t('tech_texts.learning')}
              components={{ white: <span className='text-neutral-100' /> }}
            />
          </motion.h5>

          {learningTech.length > 0 ? (
            <ul className='flex flex-wrap justify-center items-center gap-10 w-full md:w-[80%]'>
              {learningTech.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}>
                  <TechCard item={item} />
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-400 text-md italic'>
              {t('tech_texts.fallback')}
            </p>
          )}
        </section>

        <section className='w-full flex flex-col items-center gap-6 mt-12'>
          <motion.h5
            className='text-xl text-blue-500 tracking-wide uppercase'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}>
            <Trans
              i18nKey={t('tech_texts.working')}
              components={{ white: <span className='text-neutral-100' /> }}
            />
          </motion.h5>

          <ul className='flex flex-wrap justify-center items-center gap-10 w-full md:w-[80%]'>
            {knownTech.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}>
                <TechCard item={item} />
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </motion.article>
  );
};
export default Tech;
