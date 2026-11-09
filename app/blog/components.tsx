import type { ReactNode } from "react";

/** The arithmetic block. Showing the math is the brand's proof of honesty. */
export function MathBlock({
  rows,
  total,
  caption,
}: {
  rows: { label: string; value: string }[];
  total: { label: string; value: string };
  caption?: string;
}) {
  return (
    <figure className="post-math">
      <dl>
        {rows.map((r, i) => (
          <div key={r.label} className="post-math-row">
            <dt>{i === 0 ? r.label : <><span aria-hidden="true">−</span> {r.label}</>}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
        <div className="post-math-row post-math-total">
          <dt><span aria-hidden="true">=</span> {total.label}</dt>
          <dd>{total.value}</dd>
        </div>
      </dl>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="post-callout">
      {title && <p className="post-callout-title">{title}</p>}
      {children}
    </aside>
  );
}

export function Takeaways({ items }: { items: string[] }) {
  return (
    <aside className="post-takeaways" aria-label="Key takeaways">
      <p className="post-takeaways-title">The short version</p>
      <ul>
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </aside>
  );
}
