import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel Admina — Jan Chmielewski",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-background">
      {children}
    </div>
  );
}
