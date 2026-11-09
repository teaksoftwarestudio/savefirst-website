import type { Post } from "./types";
import * as payYourselfFirst from "./posts/pay-yourself-first";
import * as safeToSpend from "./posts/how-much-can-i-spend";
import * as sinkingFunds from "./posts/sinking-funds";

/** Every published post, newest first. Add a post by creating a module in ./posts and listing it here. */
export const POSTS: Post[] = [
  { meta: payYourselfFirst.meta, Body: payYourselfFirst.default },
  { meta: safeToSpend.meta, Body: safeToSpend.default },
  { meta: sinkingFunds.meta, Body: sinkingFunds.default },
].sort((a, b) => b.meta.published.localeCompare(a.meta.published));

export const getPost = (slug: string) => POSTS.find((p) => p.meta.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
