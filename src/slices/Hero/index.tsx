import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h1
            className="" 
            aria-label={slice.primary.first_name}
          >
            
          </h1>
        </div>
      </div>
      {/* <>{slice.primary.first_name}</> */}
      {/* <>{slice.primary.last_name}</> */}
      {/* <>{slice.primary.tag_line}</> */}
    </section>
  );
};

export default Hero;
