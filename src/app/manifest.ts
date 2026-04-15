import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jan Chmielewski — Trener Personalny",
    short_name: "Jan Trener",
    description:
      "Profesjonalny trener personalny — diety online, plany treningowe i prowadzenie online. Chełmża, Toruń i cała Polska.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1a",
    theme_color: "#00b4d8",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
