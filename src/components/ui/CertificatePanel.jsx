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
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Side Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed top-0 right-0 z-[70] h-full w-full md:w-[650px] bg-[#0a0a0a] border-l border-white/20 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-8 border-b border-white/20 bg-[#0a0a0a]">
                            <div>
                                <h2 className="text-2xl font-bold text-white tracking-tighter mb-1">
                                    CERTIFICATES_ARCHIVE
                                </h2>
                                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                                    Total Records: {certificates.length}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                            >
                                <IoClose size={20} />
                            </button>
                        </div>

                        {/* Content Grid */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#0a0a0a]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {certificates.map((src, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedIndex(index)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative aspect-[4/3] bg-white/5 overflow-hidden border border-white/10 group-hover:border-white/50 transition-colors duration-300">
                                            {/* Image */}
                                            <img
                                                src={src}
                                                alt={`Certificate ${index + 1}`}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                loading="lazy"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="font-mono text-xs text-white border border-white px-3 py-1 bg-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                                                    View_File
                                                </span>
                                            </div>

                                            {/* ID Badge */}
                                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 border border-white/20 text-[10px] font-mono text-white/70">
                                                #{String(index + 1).padStart(2, '0')}
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
                                className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center"
                                onClick={() => setSelectedIndex(null)}
                            >
                                {/* Header */}
                                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 pointer-events-none">
                                    <div className="pointer-events-auto bg-black border border-white/20 px-4 py-2 text-white font-mono text-xs tracking-widest">
                                        RECORD: {String(selectedIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
                                    </div>

                                    <button
                                        onClick={() => setSelectedIndex(null)}
                                        className="pointer-events-auto w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                                    >
                                        <IoClose size={24} />
                                    </button>
                                </div>

                                {/* Navigation (Click propagation stopped) */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-all z-[90] hidden md:block"
                                >
                                    <FaChevronLeft size={40} />
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-white transition-all z-[90] hidden md:block"
                                >
                                    <FaChevronRight size={40} />
                                </button>

                                {/* Main Image */}
                                <div
                                    className="relative max-w-[95vw] max-h-[85vh] p-2 border border-white/10 bg-black"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <motion.img
                                        key={selectedIndex}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        src={certificates[selectedIndex]}
                                        alt={`Certificate ${selectedIndex + 1}`}
                                        className="max-w-full max-h-[80vh] object-contain"
                                    />
                                    {/* Tech Line */}
                                    <div className="absolute -bottom-8 left-0 text-white/40 text-[10px] font-mono tracking-widest">
                                        // VERIFIED_CREDENTIAL
                                    </div>
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
