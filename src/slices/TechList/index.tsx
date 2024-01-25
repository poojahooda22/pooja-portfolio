import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg" as="h2">
        {slice.primary.heading}
      </Heading>
      {slice.items.map(({tech_color, tech_name}, index) => (
        <div key={index}>
          {Array.from({length: 15}, (_, index) => (
             <React.Fragment key={index}>
                <span className="tech-item text-8xl font-extrabold uppercase tracking-tighter">
                  {tech_name}
                </span>
             </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
