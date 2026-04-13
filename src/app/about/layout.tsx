import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - 20+ Years of Construction Excellence",
  description: "Learn about MannBuild's 20+ years of construction experience on the Isle of Man. Our story, mission, and values in delivering quality residential and commercial projects.",
  keywords: ["about mannbuild", "construction company history", "Isle of Man builders", "construction values", "building company mission"],
  openGraph: {
    title: "About MannBuild - Construction Excellence Since 2000",
    description: "Discover our story, mission, and values. Over 20 years of trusted construction services on the Isle of Man.",
    url: "https://mannbuild.com/about",
    type: "website",
    images: [
      {
        url: "/isleofman-wideshot-van.jpg",
        width: 1200,
        height: 630,
        alt: "MannBuild Team and Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MannBuild - Construction Excellence",
    description: "Over 20 years of trusted construction services on the Isle of Man.",
    images: ["/isleofman-wideshot-van.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
