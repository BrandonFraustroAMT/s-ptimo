import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contactanos`.
 */
export type ContactanosProps = SliceComponentProps<Content.ContactanosSlice>;

/**
 * Component for "Contactanos" Slices.
 */
const Contactanos = ({ slice }: ContactanosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contactanos (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Contactanos;
