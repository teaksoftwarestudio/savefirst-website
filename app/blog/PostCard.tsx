import type { PostMeta } from "./types";
import { formatDate } from "./posts";

/** Cover art is a number, not a stock photo: every SaveFirst surface carries real arithmetic. */
export function PostCover({ meta, large = false }: { meta: PostMeta; large?: boolean }) {
  return (
    <div className={`post-cover${large ? " post-cover-lg" : ""}`} aria-hidden="true">
      <span className="post-cover-cat">{meta.category}</span>
      <span className="post-cover-num">{meta.coverStat.value}</span>
      <span className="post-cover-label">{meta.coverStat.label}</span>
    </div>
  );
}

export function PostByline({ meta }: { meta: PostMeta }) {
  return (
    <div className="post-byline">
      <time dateTime={meta.published}>{formatDate(meta.published)}</time>
      <span className="post-dot" aria-hidden="true" />
      <span>{meta.readingMinutes} min read</span>
    </div>
  );
}

export default function PostCard({ meta, featured = false }: { meta: PostMeta; featured?: boolean }) {
  const Heading = featured ? "h2" : "h3";
  return (
    <article className={`post-card${featured ? " post-card-featured" : ""}`}>
      <a href={`/blog/${meta.slug}`} className="post-card-link">
        <PostCover meta={meta} large={featured} />
        <div className="post-card-body">
          {featured && <span className="eyebrow">Latest</span>}
          <Heading className="post-card-title">{meta.title}</Heading>
          <p className="post-card-excerpt">{meta.excerpt}</p>
          <PostByline meta={meta} />
          <span className="post-card-more">
            Read the article
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </a>
    </article>
  );
}
