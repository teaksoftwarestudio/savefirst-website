import type { ComponentType } from "react";

export type PostSection = { id: string; label: string };
export type PostFaq = { q: string; a: string };

export type PostMeta = {
  slug: string;
  /** On-page H1. */
  title: string;
  /** <title> tag. Keep under ~60 characters; the layout appends " — SaveFirst". */
  seoTitle: string;
  /** Meta description. Keep between ~140 and 160 characters. */
  description: string;
  /** One-line standfirst under the H1 and on cards. */
  excerpt: string;
  /** Search terms this post targets. Metadata only; never shown as prose. */
  keywords: string[];
  category: string;
  /** ISO date, YYYY-MM-DD. */
  published: string;
  updated?: string;
  readingMinutes: number;
  /** The big number on the post's cover card. Every SaveFirst page carries a number. */
  coverStat: { value: string; label: string };
  sections: PostSection[];
  faq: PostFaq[];
};

export type Post = { meta: PostMeta; Body: ComponentType };
