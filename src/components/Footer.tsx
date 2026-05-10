export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-12 relative z-10 bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                    <div className="max-w-md">
                        <h4 className="text-xl font-bold tracking-wider mb-3">ARCANE LABS</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Arcane Labs (ArcaneLabs) is a software development company based in Sri Lanka.
                            We specialize in custom POS systems, ERP solutions, web development,
                            Progressive Web Apps, and mobile applications for businesses of all sizes.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <h5 className="text-white font-semibold mb-1">Quick Links</h5>
                        <a href="/" className="hover:text-brand-light transition-colors">Home</a>
                        <a href="/services" className="hover:text-brand-light transition-colors">Services</a>
                        <a href="/contact" className="hover:text-brand-light transition-colors">Contact Us</a>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <h5 className="text-white font-semibold mb-1">Contact</h5>
                        <a href="tel:+94703329936" className="hover:text-brand-light transition-colors">+94 703 329 936</a>
                        <a href="mailto:arcanelabs.info@gmail.com" className="hover:text-brand-light transition-colors">arcanelabs.info@gmail.com</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {year} Arcane Labs (ArcaneLabs). All rights reserved. | arcanelabs.lk
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-brand-light transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-light transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
