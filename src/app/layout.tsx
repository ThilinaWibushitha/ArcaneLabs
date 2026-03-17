import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arcanelabs.com"),
  title: {
    default: "Aracane Labs | Custom Software, Made for You!",
    template: "%s | Aracane Labs",
  },
  description:
    "Aracane Labs builds custom POS systems, websites, and mobile apps for businesses in Sri Lanka. Innovate. Automate. Succeed.",
  keywords: [
    "custom software",
    "POS systems",
    "web development",
    "mobile apps",
    "Sri Lanka",
    "Aracane Labs",
    "software company",
  ],
  authors: [{ name: "Aracane Labs" }],
  creator: "Aracane Labs",
  openGraph: {
    title: "Aracane Labs | Custom Software, Made for You!",
    description:
      "We build custom POS systems, websites, and mobile apps tailored to your business needs.",
    url: "https://arcanelabs.com",
    siteName: "Aracane Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Aracane Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aracane Labs | Custom Software, Made for You!",
    description:
      "We build custom POS systems, websites, and mobile apps tailored to your business needs.",
    images: ["/logo.png"],
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
  icons: {
    icon: "/logo.png",
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
