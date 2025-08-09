import { useState, lazy, Suspense } from 'react';
import { projects } from '../../../data';
import { lightenColor } from '../../../utils/lightenColor';
import type { Project } from '../../../types';
import { MiniLoader } from '../loaders';
const ProjectCard = lazy(
  () => import('../../../components/ui/cards/ProjectCard')
);

const ExpGrid = () => {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (color: string, index: number) => {
    setHoveredColor(lightenColor(color, 20));
    setActiveIndex(index);
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = color;
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
    setActiveIndex(null);
    document.body.style.backgroundColor = '';
  };

  return (
    <Suspense fallback={<MiniLoader />}>
      <ul className='w-full grid auto-rows-[350px] justify-center items-center grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 py-4 px-10 transition-colors duration-500'>
        {projects.map((project: Project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
            isFirst={index === 0}
            isHovered={activeIndex === index}
            isDimmed={Boolean(hoveredColor && activeIndex !== index)}
            hoveredColor={hoveredColor}
            onMouseEnter={() => handleMouseEnter(project.color, index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>
    </Suspense>
  );
};

export default ExpGrid;
