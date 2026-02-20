import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoDownload, IoExpand, IoContract } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from "../../assets/Avinash_Mourya_CV.pdf";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const ResumeModal = ({ isOpen, onClose }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Reset state on open
            setPageNumber(1);
            setScale(window.innerWidth < 768 ? 0.6 : 1.0);
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 768) {
                setScale(0.6);
            } else {
                setScale(1.0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.4));

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="relative z-[100]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="bg-[#111] border border-white/10 w-full max-w-5xl h-[90vh] md:h-[95vh] flex flex-col pointer-events-auto shadow-2xl overflow-hidden relative">

                            {/* Header */}
                            <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/10 bg-[#0a0a0a]">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        RESUME_PREVIEW
                                    </h2>
                                    <p className="font-mono text-xs text-accent uppercase tracking-widest mt-1">
                                        Avinash_Mourya_CV.pdf
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={resumePDF}
                                        download="Avinash_Mourya_CV.pdf"
                                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        <IoDownload /> DOWNLOAD
                                    </a>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-colors"
                                    >
                                        <IoClose size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Toolbar (Mobile Sticky) */}
                            <div className="p-2 bg-[#1a1a1a] border-b border-white/5 flex justify-between items-center md:hidden">
                                <div className="flex gap-2">
                                    <button onClick={zoomOut} className="p-2 hover:bg-white/10 rounded"><IoContract /></button>
                                    <button onClick={zoomIn} className="p-2 hover:bg-white/10 rounded"><IoExpand /></button>
                                </div>
                                <span className="font-mono text-xs text-muted">
                                    {pageNumber} / {numPages || '--'}
                                </span>
                            </div>

                            {/* PDF Viewer Container */}
                            <div className="flex-1 overflow-auto bg-[#1a1a1a] flex justify-center p-4 md:p-8 relative custom-scrollbar">
                                <Document
                                    file={resumePDF}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading={
                                        <div className="flex items-center justify-center h-full text-white font-mono animate-pulse">
                                            LOADING_DOCUMENT...
                                        </div>
                                    }
                                    className="max-w-full shadow-2xl"
                                >
                                    <Page
                                        pageNumber={pageNumber}
                                        scale={scale}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                        className="shadow-lg"
                                    />
                                </Document>
                            </div>

                            {/* Footer Controls */}
                            <div className="p-4 border-t border-white/10 bg-[#0a0a0a] flex justify-between items-center">
                                <div className="hidden md:flex items-center gap-4">
                                    <button
                                        onClick={zoomOut}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                                        title="Zoom Out"
                                    >
                                        <IoContract size={20} />
                                    </button>
                                    <span className="font-mono text-xs text-white/50">{Math.round(scale * 100)}%</span>
                                    <button
                                        onClick={zoomIn}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                                        title="Zoom In"
                                    >
                                        <IoExpand size={20} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 mx-auto md:mx-0">
                                    <button
                                        onClick={previousPage}
                                        disabled={pageNumber <= 1}
                                        className="p-2 border border-white/10 hover:bg-white hover:text-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white transition-all"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <span className="font-mono text-sm text-white">
                                        PAGE {pageNumber} / {numPages || '--'}
                                    </span>
                                    <button
                                        onClick={nextPage}
                                        disabled={pageNumber >= numPages}
                                        className="p-2 border border-white/10 hover:bg-white hover:text-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white transition-all"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>

                                <div className="hidden md:block w-[100px]"></div> {/* Spacer for symmetry */}
                            </div>

                            {/* Mobile FAB Download */}
                            <a
                                href={resumePDF}
                                download="Avinash_Mourya_CV.pdf"
                                className="md:hidden absolute bottom-20 right-6 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-red-600 transition-colors"
                            >
                                <IoDownload size={20} />
                            </a>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ResumeModal;
