import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

const CyberModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center items-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-black border border-white/10 w-full max-w-2xl max-h-[80vh] flex flex-col rounded-none relative group"
                        >
                            {/* Corner Brackets (CyberCard Style) */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />

                            {/* Header */}
                            <div className="bg-[#0a0a0a] border-b border-white/10 p-6 flex justify-between items-center z-10 shrink-0">
                                <h2 className="text-xl md:text-2xl font-bold text-white font-mono uppercase tracking-tighter">
                                    <span className="text-primary mr-2">//</span>
                                    {title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-muted hover:text-danger transition-colors"
                                >
                                    <FaTimes size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default CyberModal;
