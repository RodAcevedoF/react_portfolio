import { useActiveSectionObserver } from '../../../hooks';
import { lazy, Suspense } from 'react';
import { MiniLoader } from '../loaders';
const SideNav = lazy(() => import('../navs/SideNav'));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'));
const EducationSection = lazy(() => import('../sections/EducationSection'));
const BioSection = lazy(() => import('../sections/BioSection'));
const Tech = lazy(() => import('../sections/Tech'));

const Resume = () => {
  const { sectionRefs, observerRefs, activeSection } =
    useActiveSectionObserver();

  return (
    <article className='relative text-[var(--primary-color)] flex flex-col w-full gap-[5rem] font-[Lilita] mt-30'>
      <Suspense fallback={<MiniLoader />}>
        <SideNav sectionRefs={sectionRefs} active={activeSection} />
      </Suspense>

      <div ref={observerRefs.bio} className='max-w-screen overflow-x-hidden'>
        <Suspense fallback={<MiniLoader />}>
          <BioSection innerRef={sectionRefs.bio} extraClass='scroll-mt-20' />
        </Suspense>
      </div>

      <div ref={observerRefs.tech} className='max-w-screen overflow-x-hidden'>
        <Suspense fallback={<MiniLoader />}>
          <Tech innerRef={sectionRefs.tech} extraClass='scroll-mt-25' />
        </Suspense>
      </div>

      <div ref={observerRefs.education} className='max-w-screen p-2'>
        <Suspense fallback={<MiniLoader />}>
          <EducationSection
            innerRef={sectionRefs.education}
            extraClass='scroll-mt-30'
          />
        </Suspense>
      </div>

      <div
        ref={observerRefs.experience}
        className='max-w-screen overflow-x-hidden'>
        <Suspense fallback={<MiniLoader />}>
          <ExperienceSection
            innerRef={sectionRefs.experience}
            extraClass='scroll-mt-20'
          />
        </Suspense>
      </div>
    </article>
  );
};

export default Resume;
