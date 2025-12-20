import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { FaSearchPlus, FaSearchMinus, FaDownload, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [loading, setLoading] = useState(true);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setPageNumber(1);
            setScale(1.0);
            setLoading(true);
        }
    }, [isOpen]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1));
    };

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));

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
                        className="bg-black/80 border border-white/10 rounded-none overflow-hidden w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl relative group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Corner Brackets (CyberCard Style) */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />

                        {/* Toolbar */}
                        <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-6">
                                <h2 className="text-sm font-mono text-primary tracking-widest hidden md:block border-r border-white/10 pr-6">
                                    SYSTEM_FILE: <span className="text-white">RESUME.PDF</span>
                                </h2>
                                <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/5">
                                    <button onClick={zoomOut} className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-all active:scale-95" title="Zoom Out">
                                        <FaSearchMinus className="text-xs" />
                                    </button>
                                    <span className="text-[10px] font-mono text-primary w-10 text-center">{Math.round(scale * 100)}%</span>
                                    <button onClick={zoomIn} className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white transition-all active:scale-95" title="Zoom In">
                                        <FaSearchPlus className="text-xs" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                {numPages && numPages > 1 && (
                                    <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/5">
                                        <button onClick={() => changePage(-1)} disabled={pageNumber <= 1} className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white disabled:opacity-30 transition-all active:scale-95">
                                            <FaChevronLeft className="text-xs" />
                                        </button>
                                        <span className="text-[10px] font-mono text-muted w-12 text-center">
                                            {pageNumber} / {numPages}
                                        </span>
                                        <button onClick={() => changePage(1)} disabled={pageNumber >= numPages} className="p-2 hover:bg-white/5 rounded-md text-gray-400 hover:text-white disabled:opacity-30 transition-all active:scale-95">
                                            <FaChevronRight className="text-xs" />
                                        </button>
                                    </div>
                                )}

                                <a
                                    href={pdfUrl}
                                    download="Avinash_Mourya_Resume.pdf"
                                    className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary font-mono text-xs rounded hover:bg-primary hover:text-black transition-all group"
                                >
                                    <FaDownload className="group-hover:animate-bounce" /> <span className="hidden md:inline">DOWNLOAD</span>
                                </a>

                                <button onClick={onClose} className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg text-gray-500 transition-colors">
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 overflow-auto bg-black/90 flex justify-center p-8 custom-scrollbar relative">
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                        <div className="text-xs font-mono text-primary animate-pulse">DECRYPTING_DOCUMENT...</div>
                                    </div>
                                </div>
                            )}

                            <Document
                                file={pdfUrl}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={null}
                                className="shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    scale={scale}
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                    className="border border-white/5"
                                />
                            </Document>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
