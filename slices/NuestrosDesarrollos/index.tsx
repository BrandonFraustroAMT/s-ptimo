import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NuestrosDesarrollos`.
 */
export type NuestrosDesarrollosProps =
  SliceComponentProps<Content.NuestrosDesarrollosSlice>;

/**
 * Component for "NuestrosDesarrollos" Slices.
 */
const NuestrosDesarrollos = ({
  slice,
}: NuestrosDesarrollosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nuestros_desarrollos (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default NuestrosDesarrollos;
