import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Financing Options - Flexible Payment Plans",
  description: "Explore flexible financing options for your construction project. Calculate monthly payments and learn about our partnership with leading financial institutions.",
  keywords: ["construction financing", "building loans", "payment plans", "construction calculator", "project financing", "Isle of Man"],
  openGraph: {
    title: "MannBuild Financing - Flexible Payment Options",
    description: "Make your construction project affordable with our flexible financing options and payment plans.",
    url: "https://mannbuild.com/finance",
    type: "website",
  },
};

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
