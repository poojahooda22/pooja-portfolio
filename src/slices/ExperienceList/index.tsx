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
      <Bounded 
      as="div">
        <Heading as="h2" size="lg" className="mb-8">
          {slice.primary.heading}
        </Heading>

        {slice.items.map(({ job_title, job_timeline}, index) => (
          <div key={index}
            className="flex flex-col  gap-2 ml-8 font-semibold text-xl"
          >
            {job_title}
            <div className="mb-8">
              {job_timeline}
            </div>
            
          </div>
        ))}

      </Bounded>
    </section>
  );
};

export default ExperienceList;
