"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaHeadset } from "react-icons/fa";

const services = [
    {
        title: "POS & ERP Systems",
        description:
            "Modern Point of Sale and robust ERP systems for Mobile & PC — from retail shops to enterprises, ensuring seamless operations everywhere.",
        icon: <FaDesktop className="text-3xl text-brand-blue-light" />,
        image: "/images/clients-assisted-by-salesman-eco-store (1).jpg",
    },
    {
        title: "Websites & Progressive Web Apps",
        description:
            "Stunning, responsive websites and high-performance Progressive Web Apps (PWAs) crafted with cutting-edge technologies.",
        icon: <FaLaptopCode className="text-3xl text-brand-red" />,
        image: "/images/pexels-pixabay-209151.jpg",
    },
    {
        title: "Custom Mobile Apps",
        description:
            "High-performance native and cross-platform mobile applications for iOS and Android, built to scale.",
        icon: <FaMobileAlt className="text-3xl text-brand-blue-light" />,
        image: "/images/emkanicepic-display-5394039_1920.jpg",
    },
    {
        title: "24/7 Support Service",
        description:
            "Round-the-clock technical support to keep your systems operational without interruptions.",
        icon: <FaHeadset className="text-3xl text-brand-red" />,
        image: "/images/mv-fotos-woman-10164795_1920.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue-navy/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We build modern, reliable, and scalable software solutions—including Progressive Web Apps and comprehensive ERP systems—tailored to your business needs.
                    </p>
                    <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mt-6"></div>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="glass-panel rounded-2xl overflow-hidden group cursor-none isolate"
                            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                        >
                            {/* Image portion */}
                            <div className="relative h-52 md:h-60 w-full overflow-hidden bg-background">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 transform-gpu"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
                                {/* Bottom seam blocker */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-background z-10" />
                            </div>

                            {/* Text portion */}
                            <div className="p-6 md:p-8 relative z-20 -mt-px bg-background mb-[-1px]">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed pl-[60px]">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom showcase image — full-width banner */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 relative h-64 md:h-80 rounded-2xl overflow-hidden glass-panel"
                >
                    <Image
                        src="/images/supermarket-worker-measuring-selling-meat-customer.jpg"
                        alt="Aracane Labs POS in Action"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Built for Real Businesses</h3>
                        <p className="text-gray-300 max-w-lg">
                            Our POS systems, ERPs, and custom software power shops, supermarkets, and businesses across Sri Lanka.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
