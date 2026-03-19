export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-12 relative z-10 bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h4 className="text-xl font-bold tracking-wider mb-2">ARCANE LABS</h4>
                    <p className="text-gray-500 text-sm">
                        © {year} Arcane Labs. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-brand-light transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-light transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
