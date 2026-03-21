import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kennedy MERRELOSE - Full-Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #064e3b 0%, #0f172a 50%, #134e4a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(20, 184, 166, 0.1)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #10b981, #14b8a6)",
            marginBottom: 32,
            fontSize: 36,
            fontWeight: 800,
            color: "white",
          }}
        >
          KM
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            marginBottom: 8,
            display: "flex",
          }}
        >
          Kennedy MERRELOSE
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            background: "linear-gradient(90deg, #10b981, #2dd4bf)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 32,
            display: "flex",
          }}
        >
          Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {["Laravel", "React", "Next.js", "TypeScript", "Python"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                border: "1px solid rgba(16, 185, 129, 0.3)",
                color: "#a7f3d0",
                fontSize: 16,
                fontWeight: 500,
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#10b981",
                display: "flex",
              }}
            />
            Available for Freelance
          </div>
          <div style={{ display: "flex" }}>📍 Cotonou, Benin</div>
          <div style={{ display: "flex" }}>kennedymerrelose.vercel.app</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
