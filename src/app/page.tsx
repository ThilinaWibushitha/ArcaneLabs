import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.arcanelabs.lk/#organization",
    name: "Arcane Labs",
    alternateName: [
      "ArcaneLabs",
      "Arcane Labs",
      "arcanelabs",
      "arcane labs",
      "arcane",
      "arcanelabs.lk",
      "ArcaneLabs.lk",
      "Arcane Labs LK",
      "Arcane Labs Sri Lanka",
      "arcane software",
    ],
    url: "https://www.arcanelabs.lk",
    logo: {
      "@type": "ImageObject",
      url: "https://www.arcanelabs.lk/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://www.arcanelabs.lk/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94703329936",
      contactType: "customer service",
      email: "arcanelabs.info@gmail.com",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala"],
    },
    description:
      "Arcane Labs (ArcaneLabs) is a leading software company in Sri Lanka building custom POS systems, ERP solutions, websites, Progressive Web Apps, and mobile apps for businesses.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    knowsAbout: [
      "Custom Software Development",
      "POS Systems",
      "ERP Software",
      "Web Development",
      "Mobile App Development",
      "Progressive Web Apps",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.arcanelabs.lk/#website",
    name: "Arcane Labs",
    alternateName: ["ArcaneLabs", "arcanelabs", "arcane labs", "arcane"],
    url: "https://www.arcanelabs.lk",
    publisher: {
      "@id": "https://www.arcanelabs.lk/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.arcanelabs.lk/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.arcanelabs.lk/#localbusiness",
    name: "Arcane Labs",
    alternateName: ["ArcaneLabs", "arcanelabs", "arcane"],
    image: "https://www.arcanelabs.lk/logo.png",
    url: "https://www.arcanelabs.lk",
    telephone: "+94703329936",
    email: "arcanelabs.info@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressRegion: "Sri Lanka",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    description:
      "Arcane Labs (ArcaneLabs) — Custom software development company in Sri Lanka specializing in POS systems, ERP solutions, websites, and mobile apps.",
  };

  const jsonLdArray = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArray) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
