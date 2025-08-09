import { type WorkExperienceItem } from '../../../types';
import { data } from '../../../data';
import { type ExpSectionProps } from '../../../types';
import { Trans, useTranslation } from 'react-i18next';
import { lazy, Suspense } from 'react';
import { MiniLoader } from '../loaders';
const ExperienceCard = lazy(() => import('../cards/ExperienceCard'));

const ExperienceSection = ({ innerRef, extraClass }: ExpSectionProps) => {
  const { t } = useTranslation();
  return (
    <section
      ref={innerRef}
      className={`flex flex-col justify-center items-center gap-10 w-full h-full min-h-[70vh] py-5 mb-30 mt-18 ${extraClass}`}>
      <h4 className='font-[Tungsten] pl-7 xl:pl-0 text-[10vw] md:text-[8vw] lg:text-[6vw] font-[400] self-start tracking-[0.5em]'>
        <Trans
          i18nKey={t('about_sections.exp')}
          components={{ blue: <span className='text-blue-400' /> }}
        />
      </h4>
      <Suspense fallback={<MiniLoader />}>
        <div className='flex flex-col items-center justify-center w-full h-fit gap-5 px-5'>
          <p className='text-[1.2em] text-center font-[Lilita]'>
            {t('about_sections.exp_desc')}
          </p>
        </div>
        <ul className='w-full h-[100%] px-5 py-2 flex flex-wrap list-none items-center justify-center gap-10'>
          {data.workExperience.map((job: WorkExperienceItem, index: number) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </ul>
      </Suspense>
    </section>
  );
};

export default ExperienceSection;
