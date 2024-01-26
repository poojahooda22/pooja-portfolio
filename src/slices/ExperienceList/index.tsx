import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ExperienceList`.
 */
export type ExperienceListProps =
  SliceComponentProps<Content.ExperienceListSlice>;

/**
 * Component for "ExperienceList" Slices.
 */
const ExperienceList = ({ slice }: ExperienceListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded as="div">
        <Heading as="h2" size="lg">
          {slice.primary.heading}
        </Heading>

        {slice.items.map(({ job_title, job_timeline, job_description}, index) => (
          <div key={index}
            className="flex items-center justify-center gap-4"
          >

          </div>
        ))}

      </Bounded>
    </section>
  );
};

export default ExperienceList;
