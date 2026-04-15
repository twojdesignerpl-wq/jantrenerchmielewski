import { ImageResponse } from "next/og";

export const alt = "Jan Chmielewski — Trener Personalny | Diety i Plany Treningowe Online";
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
          background: "linear-gradient(135deg, #0a0f1a 0%, #0d1929 40%, #0f2035 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cyan accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top bar accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent 0%, #00b4d8 50%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "40px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#f0f4f8",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              textAlign: "center",
              display: "flex",
            }}
          >
            Jan Chmielewski
          </div>

          {/* Separator */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "#00b4d8",
              borderRadius: "2px",
              margin: "8px 0",
              display: "flex",
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#00b4d8",
              textTransform: "uppercase",
              letterSpacing: "4px",
              display: "flex",
            }}
          >
            Trener Personalny
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
              marginTop: "8px",
              display: "flex",
            }}
          >
            Diety Online · Plany Treningowe · Prowadzenie Online
          </div>

          {/* Credentials */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: "#64748b",
                padding: "6px 16px",
                border: "1px solid rgba(0,180,216,0.3)",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              Magister Fizjoterapii
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#64748b",
                padding: "6px 16px",
                border: "1px solid rgba(0,180,216,0.3)",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              Finalista Mistrzostw Polski
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#64748b",
                padding: "6px 16px",
                border: "1px solid rgba(0,180,216,0.3)",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              200+ klientów
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: 16,
            color: "#475569",
            letterSpacing: "1px",
            display: "flex",
          }}
        >
          jantrenerchmielewski.pl
        </div>
      </div>
    ),
    { ...size },
  );
}
