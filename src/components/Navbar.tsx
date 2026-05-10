"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-brand-blue-navy/30" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 relative z-10">
                    <div className="relative w-[150px] h-[50px]">
                        <Image
                            src="/logo.png"
                            alt="Arcane Labs Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    <Link href="/" className="hover:text-brand-light transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-brand-light transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="hover:text-brand-light transition-colors">
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-2 rounded-full bg-brand-red text-white hover:bg-red-600 transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)] border border-red-400/50"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                  className="md:hidden p-2 text-foreground focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-brand-blue-navy/30 py-4 px-6 flex flex-col gap-4 shadow-xl z-30"
                >
                    <Link 
                        href="/" 
                        className="hover:text-brand-light transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className="hover:text-brand-light transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        href="/services" 
                        className="hover:text-brand-light transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-block text-center mt-2 px-6 py-2 rounded-full bg-brand-red text-white hover:bg-red-600 transition-all shadow-[0_0_15px_rgba(255,0,0,0.5)] border border-red-400/50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
}
