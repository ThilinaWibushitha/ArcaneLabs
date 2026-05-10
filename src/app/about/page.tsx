import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Arcane Labs (ArcaneLabs) | Software Company Sri Lanka",
    description:
        "Learn about Arcane Labs (ArcaneLabs), a leading software development company in Sri Lanka. We build custom POS systems, ERP software, websites, PWAs, and mobile apps for businesses.",
    keywords: [
        "about arcane labs",
        "about arcanelabs",
        "arcane labs sri lanka",
        "arcanelabs company",
        "software company sri lanka",
    ],
};

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Arcane Labs",
        description:
            "Learn about Arcane Labs (ArcaneLabs), a Sri Lankan software company.",
        url: "https://www.arcanelabs.lk/about",
        mainEntity: {
            "@id": "https://www.arcanelabs.lk/#organization",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutSchema),
                }}
            />
            <main className="min-h-screen">
                <Navbar />
                <div className="pt-28 pb-20">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                About{" "}
                                <span className="text-gradient">
                                    Arcane Labs
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                ArcaneLabs is a software development company
                                from Sri Lanka, dedicated to building innovative
                                technology solutions for businesses.
                            </p>
                        </div>

                        {/* Who We Are */}
                        <section className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-light">
                                Who We Are
                            </h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    <strong>Arcane Labs</strong> (also known as{" "}
                                    <strong>ArcaneLabs</strong>) is a
                                    professional software development company
                                    headquartered in Sri Lanka. We specialize in
                                    creating custom software solutions that
                                    empower businesses to streamline their
                                    operations and accelerate growth.
                                </p>
                                <p>
                                    From small retail shops to growing
                                    enterprises, ArcaneLabs delivers tailored
                                    technology — including Point of Sale (POS)
                                    systems, Enterprise Resource Planning (ERP)
                                    software, responsive websites, Progressive
                                    Web Apps (PWAs), and native mobile
                                    applications for both Android and iOS.
                                </p>
                            </div>
                        </section>

                        {/* What We Do */}
                        <section className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-light">
                                What We Build
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "POS & ERP Systems",
                                        desc: "Modern Point of Sale and Enterprise Resource Planning systems for retail, supermarkets, and hardware shops across Sri Lanka.",
                                    },
                                    {
                                        title: "Websites & Web Apps",
                                        desc: "Stunning, responsive websites and high-performance Progressive Web Apps built with cutting-edge technologies like Next.js and React.",
                                    },
                                    {
                                        title: "Mobile Applications",
                                        desc: "Cross-platform and native mobile apps for Android and iOS, designed for performance and user experience.",
                                    },
                                    {
                                        title: "24/7 Technical Support",
                                        desc: "Round-the-clock support and maintenance to keep your business systems running smoothly without interruptions.",
                                    },
                                ].map((service, i) => (
                                    <div
                                        key={i}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-light/30 transition-all"
                                    >
                                        <h3 className="text-lg font-semibold mb-2 text-white">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <section className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-light">
                                Why Choose Arcane Labs?
                            </h2>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red text-xl mt-1">
                                        ✦
                                    </span>
                                    <span>
                                        <strong>Custom-Built Solutions</strong>{" "}
                                        — Every product we create is tailored
                                        specifically to your business needs, not
                                        a one-size-fits-all template.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red text-xl mt-1">
                                        ✦
                                    </span>
                                    <span>
                                        <strong>Sri Lankan Expertise</strong> —
                                        We understand the local market and build
                                        solutions that work for Sri Lankan
                                        businesses.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red text-xl mt-1">
                                        ✦
                                    </span>
                                    <span>
                                        <strong>Modern Technology</strong> — We
                                        use the latest frameworks and tools to
                                        ensure your software is fast, secure,
                                        and scalable.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-red text-xl mt-1">
                                        ✦
                                    </span>
                                    <span>
                                        <strong>Ongoing Support</strong> — Our
                                        relationship doesn&apos;t end at
                                        delivery. We provide continuous
                                        maintenance and support.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        {/* CTA */}
                        <section className="text-center p-10 rounded-3xl bg-gradient-to-br from-brand-red/10 to-brand-blue-light/10 border border-white/10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Build Something Great?
                            </h2>
                            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                                Whether you need a POS system, a website, or a
                                full enterprise solution — Arcane Labs is here to
                                help.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 rounded-full bg-brand-red hover:bg-red-600 transition-all font-semibold shadow-[0_0_20px_rgba(255,0,0,0.4)] text-white"
                            >
                                Contact ArcaneLabs Today
                            </a>
                        </section>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
