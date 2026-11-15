import { ImageResponse } from "next/og";

export const alt = "Kevin Brandão — Quality Assurance & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#090a0e",
          backgroundImage: "radial-gradient(900px 500px at 85% -10%, rgba(124,140,255,0.35), transparent 70%)",
          color: "#eceef4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#9ba2b4" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#4ade80" }} />
          Analista de Qualidade Pleno na TOTVS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Kevin Brandão</div>
          <div style={{ marginTop: 24, fontSize: 40, color: "#b08cff" }}>
            Quality Assurance · Software Engineering · Innovation
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9ba2b4" }}>
          Cypress · Playwright · Selenium · React · PHP · IA aplicada
        </div>
      </div>
    ),
    size,
  );
}
