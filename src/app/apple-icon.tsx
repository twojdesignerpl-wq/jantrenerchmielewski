import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0f1a 0%, #0d1929 50%, #0f2035 100%)",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#00b4d8",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-3px",
            display: "flex",
          }}
        >
          JC
        </div>
      </div>
    ),
    { ...size },
  );
}
