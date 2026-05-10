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
    default:
      "Arcane Labs (ArcaneLabs) | Custom Software, Web & Mobile App Development Sri Lanka",
    template: "%s | Arcane Labs (ArcaneLabs)",
  },
  description:
    "Arcane Labs (ArcaneLabs) is a leading software company in Sri Lanka. We build custom POS systems, ERP software, websites, Progressive Web Apps (PWA), and mobile apps. Visit arcanelabs.lk — Innovate. Automate. Succeed.",
  applicationName: "Arcane Labs",
  category: "technology",
  keywords: [
    "arcane",
    "arcane labs",
    "arcanelabs",
    "arcane labs lk",
    "arcanelabs.lk",
    "ArcaneLabs",
    "ArcaneLabs.lk",
    "Arcane Labs Sri Lanka",
    "arcane software",
    "arcane software sri lanka",
    "custom software Sri Lanka",
    "POS systems Sri Lanka",
    "ERP software Sri Lanka",
    "web development Sri Lanka",
    "mobile apps Sri Lanka",
    "software company Sri Lanka",
    "software agency Sri Lanka",
    "progressive web apps Sri Lanka",
    "PWA development Sri Lanka",
    "best software company Sri Lanka",
  ],
  authors: [{ name: "Arcane Labs", url: "https://www.arcanelabs.lk" }],
  creator: "Arcane Labs",
  publisher: "Arcane Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "revisit-after": "7 days",
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
  },
  openGraph: {
    title:
      "Arcane Labs (ArcaneLabs) | Custom Software, Web & Mobile App Development",
    description:
      "Arcane Labs is a Sri Lankan software company building custom POS systems, ERP solutions, websites, and mobile apps. Partner with ArcaneLabs today.",
    url: "https://www.arcanelabs.lk",
    siteName: "Arcane Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Arcane Labs Logo - ArcaneLabs Software Company Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arcane Labs (ArcaneLabs) | Custom Software & Mobile App Development",
    description:
      "Arcane Labs builds custom POS systems, websites, and mobile apps for businesses in Sri Lanka.",
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
