import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

// Dynamic import of images
const images = import.meta.glob('../../assets/certificates/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true });

const CertificatePanel = ({ isOpen, onClose }) => {
    const [certificates, setCertificates] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        // Transform the imported object into an array of URLs, sorted numerically
        const loadedImages = Object.keys(images)
            .sort((a, b) => {
                // Extract numbers from filenames for numeric sorting (e.g., "1.png" vs "10.png")
                const numA = parseInt(a.match(/\/(\d+)\./)?.[1] || "0");
                const numB = parseInt(b.match(/\/(\d+)\./)?.[1] || "0");
                return numA - numB;
            })
            .map(key => images[key].default);

        setCertificates(loadedImages);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") {
                setSelectedIndex((prev) => (prev + 1) % certificates.length);
            } else if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
            } else if (e.key === "Escape") {
                setSelectedIndex(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, certificates]);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % certificates.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Side Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 z-[70] h-full w-full md:w-[600px] bg-black border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
                            <h2 className="text-xl font-bold text-white font-mono tracking-tighter">
                                <span className="text-primary mr-2">//</span>
                                CERTIFICATES_ARCHIVE
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-white/5"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-black/95">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certificates.map((src, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedIndex(index)}
                                        className="relative group cursor-pointer"
                                    >
                                        <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors z-10" />
                                        <div className="aspect-[4/3] bg-white/5 overflow-hidden relative">
                                            <img
                                                src={src}
                                                alt={`Certificate ${index + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                                                <span className="text-xs font-mono text-primary border border-primary px-2 py-1 bg-black/80">VIEW_FULL</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Full Image Modal */}
                    <AnimatePresence>
                        {selectedIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-12"
                            >
                                {/* Counter & Close */}
                                <div className="absolute top-6 left-0 right-0 flex justify-between items-center px-8 z-50">
                                    <div className="bg-black/50 border border-white/10 px-4 py-1 rounded-full text-white font-mono text-sm tracking-widest backdrop-blur-md">
                                        {selectedIndex + 1} / {certificates.length}
                                    </div>

                                    <button
                                        onClick={() => setSelectedIndex(null)}
                                        className="p-3 text-white bg-white/10 hover:bg-red-500/20 hover:text-red-500 border border-white/10 hover:border-red-500 rounded-full transition-all backdrop-blur-md"
                                    >
                                        <IoClose size={24} />
                                    </button>
                                </div>

                                {/* Navigation Buttons (Fixed to Viewport) */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-primary hover:bg-white/10 rounded-full transition-all z-[90] hidden md:block"
                                >
                                    <FaChevronLeft size={30} />
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-primary hover:bg-white/10 rounded-full transition-all z-[90] hidden md:block"
                                >
                                    <FaChevronRight size={30} />
                                </button>

                                {/* Main Image Container */}
                                <div
                                    className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center pointer-events-none"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Image */}
                                    <motion.img
                                        key={selectedIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        src={certificates[selectedIndex]}
                                        alt={`Certificate ${selectedIndex + 1}`}
                                        className="max-w-full max-h-[85vh] object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] pointer-events-auto"
                                    />
                                </div>

                                {/* Instructions */}
                                <div className="absolute bottom-6 text-white/40 text-xs font-mono tracking-wider pointer-events-none">
                                    Press ESC to close • Use arrow keys to navigate
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};

export default CertificatePanel;
