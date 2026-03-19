import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arcanelabs.lk"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Arcane Labs | Custom Software, Web & Mobile App Development",
    template: "%s | Arcane Labs",
  },
  description:
    "Arcane Labs (ArcaneLabs) builds custom POS systems, websites, and mobile apps for businesses in Sri Lanka. Innovate. Automate. Succeed.",
  applicationName: "Arcane Labs",
  category: "technology",
  keywords: [
    "arcanelabs",
    "arcanelabs.lk",
    "Arcane Labs",
    "Arcane Labs",
    "ArcaneLabs",
    "ArcaneLabs.lk",
    "custom software Sri Lanka",
    "POS systems Sri Lanka",
    "web development Sri Lanka",
    "mobile apps Sri Lanka",
    "software company",
    "software agency",
  ],
  authors: [{ name: "Arcane Labs", url: "https://www.arcanelabs.lk" }],
  creator: "Arcane Labs",
  publisher: "Arcane Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Arcane Labs | Custom Software, Web & Mobile App Development",
    description:
      "We build custom POS systems, websites, and mobile apps tailored to your business needs. Partner with Arcane Labs today.",
    url: "https://www.arcanelabs.lk",
    siteName: "Arcane Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Arcane Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcane Labs | Custom Software, Web & Mobile App Development",
    description:
      "We build custom POS systems, websites, and mobile apps tailored to your business needs.",
    images: ["/logo.png"],
    creator: "@arcanelabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Q_YoMe3RC3c_cGGCuVZ1u7iG2TiXisk3imogA5QLBxA",
  },
  icons: {
    icon: "/br_img_rounded.png",
    apple: "/br_img_rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
