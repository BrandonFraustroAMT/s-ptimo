import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Nosotros`.
 */
export type NosotrosProps = SliceComponentProps<Content.NosotrosSlice>;

/**
 * Component for "Nosotros" Slices.
 */
const Nosotros = ({ slice }: NosotrosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nosotros (variation: {slice.variation}) Slices
    </section>
  );
};

export default Nosotros;
