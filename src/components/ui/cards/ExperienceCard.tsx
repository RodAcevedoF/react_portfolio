import { type WorkExperienceItem } from '../../../types';
import { CalendarClock, MapPinned, Pin } from 'lucide-react';
import { PixelTransition } from '../../animations';
import { MiniSkillBtn } from '../buttons';
import { Trans, useTranslation } from 'react-i18next';

type ExperienceListItemProps = {
  job: WorkExperienceItem;
};

const ExperienceCard = ({ job }: ExperienceListItemProps) => {
  const { t } = useTranslation();

  const firstContent = (
    <div className='flex flex-col p-5 bg-black rounded-md min-h-[29rem] w-full'>
      <div className='flex w-full items-center justify-between mb-5'>
        <p className='text-blue-400 font-[Lilita] text-[1em] whitespace-pre-line flex'>
          <CalendarClock width={18} className='mr-1.5' />
          {t(job.startDate)}
          <span className='text-[var(--primary-color)]'> - </span>
          {t(job.endDate)}
        </p>
        <p className='flex gap-2 items-center'>
          {t(job.location)}{' '}
          <MapPinned size={18} className='text-yellow-200/50' />
        </p>
      </div>

      <p className='font-[Lilita] text-[1.5rem]'>
        <Trans
          i18nKey={job.position} // asumiendo que aquí va la key de traducción
          components={{ blue: <span className='text-blue-400' /> }}
        />
      </p>

      <div className='flex w-full h-fit justify-center items-center gap-4 border-2 border-yellow-200/20 rounded-md px-2 py-1 mb-5'>
        <p className='font-[Lilita] text-[1.1em] w-fit rounded-sm text-yellow-100'>
          {t(job.organization?.title ?? '')}
        </p>
        <img
          src={job.organization?.image}
          alt='organization logo'
          className='w-10 h-10 rounded-full border-4 border-blue-500/50'
        />
      </div>

      <ul className='w-full h-full gap-1 flex flex-col items-start justify-between'>
        {job.responsabilities?.map((task, idx) => (
          <li
            key={idx}
            className='flex justify-start items-center w-full h-fit gap-3 p-1 text-[15px]'>
            <Pin className='max-w-5 min-w-5 h-auto text-yellow-200/30' />
            <p>{t(task)}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const secondContent = (
    <div
      className='w-full h-full flex flex-col justify-around items-center p-1.5'
      style={{ background: `var(--dark-bg)` }}>
      <p className='font-[Lilita] text-[1rem] border-2 rounded-md p-2 border-yellow-200/20'>
        <span className='text-blue-500'>
          {t('work_experience_labels.about_label')}:
        </span>{' '}
        {t(job.description)}
      </p>

      <ul className='w-full flex flex-wrap gap-2 items-center justify-center rounded-md py-1'>
        <li>
          <span className='text-blue-500'>
            {t('work_experience_labels.tools_label')}:
          </span>
        </li>
        {job.tools?.map((tool) => (
          <li
            className='flex flex-col justify-center items-center border-2 border-yellow-200/20 hover:translate-y-[-3px] hover:shadow-lg shadow-blue-500 transition-all duration-300 ease-in-out rounded-md p-2 group relative'
            key={tool.name}>
            <img
              src={tool.img}
              alt={tool.name}
              className='w-8 h-8 group-hover:brightness-50 transition-transform duration-200 ease-in-out'
            />
            <span className='text-xs absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out'>
              {tool.name}
            </span>
          </li>
        ))}
      </ul>

      <ul className='w-full flex flex-wrap gap-1 items-center justify-center'>
        {job.skills?.map((skill, idx) => (
          <li key={idx}>
            <MiniSkillBtn text={t(skill)} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <li className='flex infocard effect relative cursor-pointer border-2 border-blue-400/20 min-w-[19.5rem] h-[29rem] p-[0.3rem] rounded-md overflow-hidden transition-all duration-300 ease-in-out hover:translate-y-[-1rem]'>
      <PixelTransition
        firstContent={firstContent}
        secondContent={secondContent}
        gridSize={12}
        pixelColor='#ffffff'
        animationStepDuration={0.25}
        className='w-full h-full'
        trigger='hover'
        style={{ minHeight: 370 }}
      />
    </li>
  );
};

export default ExperienceCard;
