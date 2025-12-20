import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "About", id: "about" },
        { name: "Education", id: "experience", tab: "education" },
        { name: "Experience", id: "experience", tab: "work" },
        { name: "Stats", id: "dashboard" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" }
    ];

    const scrollToSection = (id, tab = null) => {
        setIsMobileMenuOpen(false); // Close mobile menu on click

        // Dispatch contact modal event
        if (id === "contact") {
            window.dispatchEvent(new CustomEvent('open-contact'));
            return;
        }

        // Dispatch custom event if a tab is specified
        if (tab) {
            window.dispatchEvent(new CustomEvent('set-experience-tab', { detail: tab }));
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4"
        >
            <div className="bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-8 items-center justify-between w-full max-w-5xl relative">

                {/* Logo */}
                <div className="text-primary font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    AM_Dev<span className="text-white">.exe</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id, item.tab)}
                            className="text-sm font-mono text-muted hover:text-secondary uppercase tracking-wider transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Desktop Certificates Button */}
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-certificates'))}
                    className="hidden md:block px-4 py-1 bg-white/5 border border-primary/50 text-white text-xs font-mono hover:bg-primary hover:text-black transition-all"
                >
                    CERTIFICATES
                </button>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white hover:text-primary transition-colors p-1"
                >
                    {isMobileMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Dropdown Menu (Absolute Positioned relative to the navbar container) */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                        >
                            {/* Mobile Nav Items */}
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.id, item.tab)}
                                    className="w-full text-left text-sm font-mono text-muted hover:text-primary uppercase tracking-wider transition-colors py-2 border-b border-white/5 last:border-0"
                                >
                                    {item.name}
                                </button>
                            ))}

                            {/* Mobile Certificates Button */}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.dispatchEvent(new CustomEvent('open-certificates'));
                                }}
                                className="w-full mt-2 px-4 py-3 bg-white/5 border border-primary/50 text-white text-xs font-mono hover:bg-primary hover:text-black transition-all text-center rounded"
                            >
                                VIEW CERTIFICATES
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
