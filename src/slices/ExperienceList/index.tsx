import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

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
        <Heading as="h2" size="lg" className="mb-8">
          {slice.primary.heading}
        </Heading>

        {slice.items.map(({ job_title, job_timeline, job_description}, index) => (
          <div key={index}
            className="flex flex-col  gap-2 ml-8 font-semibold text-xl"
          >
            {Array.from({ length: 1}, (_, index) => (
              <React.Fragment key={index}>
                <span className="text-2xl font-bold">{job_title}</span>
                <span className="text-lg font-semibold">{job_timeline}</span>
                
              </React.Fragment>
            ))}

          </div>
        ))}

      </Bounded>
    </section>
  );
};

export default ExperienceList;
