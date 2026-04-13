import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mannbuild.com'),
  title: {
    default: "MannBuild - Construction & Building Services | Isle of Man",
    template: "%s | MannBuild"
  },
  description: "Professional construction and building services for residential and commercial projects on the Isle of Man. 20+ years of experience in custom homes, renovations, and commercial construction.",
  keywords: ["construction", "building services", "Isle of Man", "residential construction", "commercial construction", "home renovation", "custom homes", "project management", "design and build", "MannBuild"],
  authors: [{ name: "MannBuild" }],
  creator: "MannBuild",
  publisher: "MannBuild",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mannbuild.com",
    siteName: "MannBuild",
    title: "MannBuild - Construction & Building Services | Isle of Man",
    description: "Professional construction and building services for residential and commercial projects on the Isle of Man. 20+ years of experience.",
    images: [
      {
        url: "/twitter-meta.jpg",
        width: 1200,
        height: 1200,
        alt: "MannBuild LTD - Bespoke Renovations for Island Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MannBuild - Construction & Building Services",
    description: "Professional construction and building services for residential and commercial projects on the Isle of Man.",
    images: ["/twitter-meta.jpg"],
    creator: "@mannbuild",
    site: "@mannbuild",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "MannBuild",
    "description": "Professional construction and building services for residential and commercial projects on the Isle of Man",
    "url": "https://mannbuild.com",
    "logo": "https://mannbuild.com/branding/logo.png",
    "image": "https://mannbuild.com/isleofman-wideshot-van.jpg",
    "telephone": "+44-1624-XXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Isle of Man",
      "addressCountry": "IM"
    },
    "sameAs": [
      "https://www.facebook.com/mannbuild",
      "https://www.linkedin.com/company/mannbuild"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Isle of Man"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Construction",
            "description": "Custom homes, renovations, and additions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Construction",
            "description": "Office buildings, retail spaces, and industrial facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management",
            "description": "Complete oversight from planning to completion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design & Build",
            "description": "Integrated design and construction services"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
