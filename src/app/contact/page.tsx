import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Aracane Labs. Call +94 703 329 936 or email arcanelabs.info@gmail.com for custom software solutions.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
