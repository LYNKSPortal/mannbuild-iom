import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - MannBuild",
  description: "Read MannBuild's terms and conditions for using our services and website.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MannBuild Terms & Conditions",
    url: "https://mannbuild.com/terms",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
