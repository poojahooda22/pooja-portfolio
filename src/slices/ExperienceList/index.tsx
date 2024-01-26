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
      Placeholder component for experience_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ExperienceList;
