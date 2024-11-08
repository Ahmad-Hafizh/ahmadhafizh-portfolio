/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful';

export interface TypeProjectsPortfolioAhmadhafizhFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  description: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
  tag: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export interface TypeProjectsPortfolioAhmadhafizhAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
    };
    fileName?: string;
    contentType?: string;
  };
}

export type TypeProjectsPortfolioAhmadhafizhSkeleton = EntrySkeletonType<TypeProjectsPortfolioAhmadhafizhFields, 'projectsPortfolioAhmadhafizh'>;
export type TypeProjectsPortfolioAhmadhafizh<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectsPortfolioAhmadhafizhSkeleton, Modifiers, Locales>;
