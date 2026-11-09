import { ImageResponse } from "next/og";
import { POSTS, getPost } from "../posts";

export const alt = "SaveFirst blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.meta.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getPost(slug)?.meta;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(150deg, #06241a 0%, #0a3a28 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>SaveFirst</div>
          <div style={{ fontSize: 24, color: "#14b87f", textTransform: "uppercase", letterSpacing: 3 }}>
            {meta?.category ?? "Blog"}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
          {meta?.title ?? "The SaveFirst Blog"}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: "#14b87f" }}>{meta?.coverStat.value ?? ""}</div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>{meta?.coverStat.label ?? "Spend what's left after saving."}</div>
        </div>
      </div>
    ),
    size
  );
}
