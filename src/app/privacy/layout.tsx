import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MannBuild",
  description: "Read MannBuild's privacy policy to understand how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MannBuild Privacy Policy",
    url: "https://mannbuild.com/privacy",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
