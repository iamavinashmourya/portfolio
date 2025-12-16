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
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-primary/30 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-[0_0_30px_rgba(57,255,20,0.1)] relative scrollbar-hide"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex justify-between items-center z-10">
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
                            <div className="p-6">
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
