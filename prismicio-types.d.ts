// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | NuestrosDesarrollosSlice
  | NosotrosSlice
  | HeaderSlice
  | ContactanosSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *Contactanos → Default → Primary*
 */
export interface ContactanosSliceDefaultPrimary {
  /**
   * Title field in *Contactanos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contactanos.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * LabelButton field in *Contactanos → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contactanos.default.primary.labelbutton
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labelbutton: prismic.KeyTextField;

  /**
   * LinkButton field in *Contactanos → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contactanos.default.primary.linkbutton
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkbutton: prismic.LinkField;
}

/**
 * Default variation for Contactanos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactanosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactanosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contactanos*
 */
type ContactanosSliceVariation = ContactanosSliceDefault;

/**
 * Contactanos Shared Slice
 *
 * - **API ID**: `contactanos`
 * - **Description**: Contactanos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactanosSlice = prismic.SharedSlice<
  "contactanos",
  ContactanosSliceVariation
>;

/**
 * Primary content in *Header → Default → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * Image field in *Header → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Header → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * label field in *Header → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * linklabel field in *Header → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.linklabel
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linklabel: prismic.LinkField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Nosotros → Default → Primary*
 */
export interface NosotrosSliceDefaultPrimary {
  /**
   * Title field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Subtitle field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * labelbutton field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.labelbutton
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labelbutton: prismic.KeyTextField;

  /**
   * labellink field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.labellink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  labellink: prismic.LinkField;

  /**
   * Image field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * TextImage field in *Nosotros → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nosotros.default.primary.textimage
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textimage: prismic.KeyTextField;
}

/**
 * Default variation for Nosotros Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NosotrosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NosotrosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Nosotros*
 */
type NosotrosSliceVariation = NosotrosSliceDefault;

/**
 * Nosotros Shared Slice
 *
 * - **API ID**: `nosotros`
 * - **Description**: Nosotros
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NosotrosSlice = prismic.SharedSlice<
  "nosotros",
  NosotrosSliceVariation
>;

/**
 * Item in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
 */
export interface NuestrosDesarrollosSliceDefaultPrimaryGroupnosotrosItem {
  /**
   * Image field in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Subtitle field in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * LabelButton field in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[].labelbutton
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labelbutton: prismic.KeyTextField;

  /**
   * LinkButton field in *NuestrosDesarrollos → Default → Primary → GroupNosotros*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[].linkbutton
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkbutton: prismic.LinkField;
}

/**
 * Primary content in *NuestrosDesarrollos → Default → Primary*
 */
export interface NuestrosDesarrollosSliceDefaultPrimary {
  /**
   * Title field in *NuestrosDesarrollos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * GroupNosotros field in *NuestrosDesarrollos → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: nuestros_desarrollos.default.primary.groupnosotros[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  groupnosotros: prismic.GroupField<
    Simplify<NuestrosDesarrollosSliceDefaultPrimaryGroupnosotrosItem>
  >;
}

/**
 * Default variation for NuestrosDesarrollos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NuestrosDesarrollosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NuestrosDesarrollosSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NuestrosDesarrollos*
 */
type NuestrosDesarrollosSliceVariation = NuestrosDesarrollosSliceDefault;

/**
 * NuestrosDesarrollos Shared Slice
 *
 * - **API ID**: `nuestros_desarrollos`
 * - **Description**: NuestrosDesarrollos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NuestrosDesarrollosSlice = prismic.SharedSlice<
  "nuestros_desarrollos",
  NuestrosDesarrollosSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactanosSlice,
      ContactanosSliceDefaultPrimary,
      ContactanosSliceVariation,
      ContactanosSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceVariation,
      HeaderSliceDefault,
      NosotrosSlice,
      NosotrosSliceDefaultPrimary,
      NosotrosSliceVariation,
      NosotrosSliceDefault,
      NuestrosDesarrollosSlice,
      NuestrosDesarrollosSliceDefaultPrimaryGroupnosotrosItem,
      NuestrosDesarrollosSliceDefaultPrimary,
      NuestrosDesarrollosSliceVariation,
      NuestrosDesarrollosSliceDefault,
    };
  }
}