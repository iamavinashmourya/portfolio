import { motion } from "framer-motion";

const Navbar = () => {
    const navItems = ["About", "Experience", "Dashboard", "Projects", "Hackathons"];

    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
        >
            <div className="bg-black/80 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex gap-8 items-center">
                <div className="text-primary font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    AM_Dev<span className="text-white">.exe</span>
                </div>
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-sm font-mono text-muted hover:text-secondary uppercase tracking-wider transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => scrollToSection("contact")} // Future proofing
                    className="px-4 py-1 bg-white/5 border border-primary/50 text-primary text-xs font-mono hover:bg-primary hover:text-black transition-all"
                >
                    CONTACT_ME
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
