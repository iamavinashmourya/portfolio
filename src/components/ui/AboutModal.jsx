import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const AboutModal = ({ isOpen, onClose, content }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-black/80 border border-white/10 rounded-none overflow-hidden w-full max-w-3xl flex flex-col shadow-2xl relative group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Corner Brackets (CyberCard Style) */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />

                        {/* Toolbar */}
                        <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                            <h2 className="text-sm font-mono text-primary tracking-widest border-r border-white/10 pr-6">
                                SYSTEM_FILE: <span className="text-white">BIO_FULL_TEXT</span>
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg text-gray-500 transition-colors">
                                <FaTimes />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto max-h-[70vh] custom-scrollbar text-lg leading-relaxed text-gray-300 font-light">
                            {content}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AboutModal;
