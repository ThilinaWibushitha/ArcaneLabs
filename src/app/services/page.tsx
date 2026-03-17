import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Custom POS systems, websites, mobile apps, and 24/7 support. Aracane Labs delivers tailored software solutions for your business.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
