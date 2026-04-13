import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MannBuild Merchandise - Branded Apparel & Gear",
  description: "Shop official MannBuild merchandise including branded apparel, safety gear, and accessories. Quality products for construction professionals.",
  keywords: ["mannbuild merchandise", "construction apparel", "branded gear", "workwear", "safety equipment"],
  openGraph: {
    title: "MannBuild Merchandise Store",
    description: "Official MannBuild branded merchandise and construction gear.",
    url: "https://mannbuild.com/merch",
    type: "website",
  },
};

export default function MerchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
