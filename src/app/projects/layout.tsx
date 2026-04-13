import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Construction Portfolio & Case Studies",
  description: "Explore MannBuild's portfolio of completed and ongoing construction projects. From luxury homes to commercial developments on the Isle of Man.",
  keywords: ["construction projects", "building portfolio", "completed projects", "Isle of Man developments", "construction case studies", "residential projects", "commercial projects"],
  openGraph: {
    title: "MannBuild Projects - Our Construction Portfolio",
    description: "View our showcase of completed and ongoing construction projects across the Isle of Man.",
    url: "https://mannbuild.com/projects",
    type: "website",
    images: [
      {
        url: "/isleofman-wideshot.jpg",
        width: 1200,
        height: 630,
        alt: "MannBuild Construction Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MannBuild Construction Projects",
    description: "Explore our portfolio of residential and commercial construction projects.",
    images: ["/isleofman-wideshot.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
