import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services - Residential & Commercial Building",
  description: "Comprehensive construction services including residential building, commercial construction, project management, and design & build solutions on the Isle of Man.",
  keywords: ["construction services", "residential construction", "commercial building", "project management", "design and build", "Isle of Man construction"],
  openGraph: {
    title: "MannBuild Construction Services - Residential & Commercial",
    description: "From custom homes to commercial buildings. Comprehensive construction solutions tailored to your needs.",
    url: "https://mannbuild.com/services",
    type: "website",
    images: [
      {
        url: "/isleofman-wideshot-van.jpg",
        width: 1200,
        height: 630,
        alt: "MannBuild Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MannBuild Construction Services",
    description: "Residential & commercial construction, project management, and design & build services.",
    images: ["/isleofman-wideshot-van.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
