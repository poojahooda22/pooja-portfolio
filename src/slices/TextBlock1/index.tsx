import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock1`.
 */
export type TextBlock1Props = SliceComponentProps<Content.TextBlock1Slice>;

/**
 * Component for "TextBlock1" Slices.
 */
const TextBlock1 = ({ slice }: TextBlock1Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_block1 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TextBlock1;
