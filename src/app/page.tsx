import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arcane Labs",
    alternateName: ["ArcaneLabs", "Arcane Labs", "arcanelabs", "arcanelabs.lk"],
    url: "https://www.arcanelabs.lk",
    logo: "https://www.arcanelabs.lk/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94703329936",
      contactType: "customer service",
      email: "arcanelabs.info@gmail.com",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala"],
    },
    description: "Arcane Labs (ArcaneLabs) builds custom POS systems, websites, and mobile apps for businesses in Sri Lanka.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
