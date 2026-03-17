"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity">
                <Image src="/images/pexels-mikhail-nilov-7988079.jpg" alt="Technology Background" fill className="object-cover" priority />
            </div>

            {/* Background glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue-light/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Custom Software,
                        <br />
                        <span className="text-gradient">Made for You!</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
                        Innovate. Automate. Succeed.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="/#services"
                            className="px-8 py-4 rounded-full bg-glass-gradient border border-brand-blue-light/30 backdrop-blur-md hover:bg-brand-blue-light/20 transition-all font-semibold"
                        >
                            Explore Services
                        </a>
                        <a
                            href="/#contact"
                            className="px-8 py-4 rounded-full bg-brand-red hover:bg-red-600 transition-all font-semibold shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full max-w-md">
                        <Image
                            src="/logo.png"
                            alt="Aracane Labs Robot Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(68,172,255,0.6)]"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
