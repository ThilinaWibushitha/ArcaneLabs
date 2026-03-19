"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
                    <div className="w-24 h-1 bg-brand-light mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src="/images/pexels-fauxels-3182787.jpg" alt="Contact" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                            <div className="absolute inset-0 bg-brand-blue-navy/30 mix-blend-multiply" />
                        </div>

                        <h3 className="text-3xl font-semibold mb-6">Let&apos;s talk about your next project.</h3>
                        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                            Whether you need a full enterprise system, a mobile app, or a simple website, Arcane Labs provides cutting-edge solutions tailored just for you.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl w-max pr-8">
                                <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red text-xl">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Call Us</p>
                                    <a href="tel:+94703329936" className="font-semibold text-lg hover:text-brand-light transition-colors">
                                        +94 703 329 936
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl w-max pr-8">
                                <div className="w-12 h-12 bg-brand-blue-light/20 rounded-full flex items-center justify-center text-brand-blue-light text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Us</p>
                                    <a href="mailto:arcanelabs.info@gmail.com" className="font-semibold text-lg hover:text-brand-light transition-colors">
                                        arcanelabs.info@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-panel p-8 md:p-10 rounded-2xl relative"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-red blur-[80px] rounded-full opacity-30 pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue-light blur-[80px] rounded-full opacity-30 pointer-events-none" />

                        <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-brand-red transition-colors text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-brand-light transition-colors text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-brand-blue-navy transition-colors text-white resize-none"
                                ></textarea>
                            </div>

                            {status === "success" && (
                                <p className="text-green-400 text-sm font-medium">✓ Message sent successfully! We&apos;ll get back to you soon.</p>
                            )}
                            {status === "error" && (
                                <p className="text-brand-red text-sm font-medium">✗ Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full bg-gradient-to-r from-brand-red to-brand-blue-navy border-none hover:opacity-90 transition-opacity py-4 rounded-lg font-bold text-lg tracking-wide shadow-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
