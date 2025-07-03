import { type EducationItem } from "../../../types";
type EducationListItemProps = {
  diploma: EducationItem;
};

export const EducationListItem = ({ diploma }: EducationListItemProps) => {
  return (
    <li className="relative mb-[1rem] p-[1em_0] group w-[250px]">
      <p>{diploma.degree}</p>
      <p className="font-[Lilita] text-[1.2em] whitespace-pre-line">
        {`${diploma.university}, ${diploma.graduationYear}\n${diploma.honors}`}
      </p>
      <div>
        <h5 className="font-[Tungsten] text-[1.2em] tracking-[0.25em] pb-[0.25em]">
          Relevant Courses:
        </h5>
        <ul>
          {diploma.relevantCourses.map((course, index) => (
            <li key={index} className="font-[Lilita] p-0">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
