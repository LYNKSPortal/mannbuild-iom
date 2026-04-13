import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Construction Quote",
  description: "Contact MannBuild for a free, no-obligation construction quote. We respond within 24 hours. Serving the Isle of Man with quality building services.",
  keywords: ["contact mannbuild", "construction quote", "free estimate", "building consultation", "Isle of Man contractor", "get quote"],
  openGraph: {
    title: "Contact MannBuild - Get Your Free Quote Today",
    description: "Request a free construction quote. Quick response, detailed proposals, and flexible financing options available.",
    url: "https://mannbuild.com/contact",
    type: "website",
    images: [
      {
        url: "/isleofman-wideshot-van.jpg",
        width: 1200,
        height: 630,
        alt: "Contact MannBuild for Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MannBuild - Free Quote",
    description: "Get your free construction quote today. Quick response guaranteed.",
    images: ["/isleofman-wideshot-van.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
