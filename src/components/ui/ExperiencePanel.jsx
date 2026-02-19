import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const ExperiencePanel = ({ isOpen, onClose, data }) => {
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
    return (
        <AnimatePresence>
            {isOpen && data && (
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
                        className="fixed top-0 right-0 z-[70] h-full w-full md:w-[600px] bg-[#0a0a0a] border-l border-white/20 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start p-8 border-b border-white/20 bg-[#0a0a0a]">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-white tracking-tighter">
                                        {data.role}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                                    <span>@ {data.company}</span>
                                    <span className="text-white/20">|</span>
                                    <span className="text-gray-400">{data.period}</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                            >
                                <IoClose size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#0a0a0a]">

                            {/* Metadata Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="border border-white/10 p-4 bg-white/5">
                                    <h4 className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">Location</h4>
                                    <p className="text-white text-sm">{data.location} ({data.mode})</p>
                                </div>
                                <div className="border border-white/10 p-4 bg-white/5">
                                    <h4 className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">Type</h4>
                                    <p className="text-white text-sm">{data.type}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-10">
                                <p className="text-gray-300 leading-relaxed text-base">
                                    {data.desc}
                                </p>
                            </div>

                            {/* Key Achievements */}
                            <div className="mb-10">
                                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest border-b border-dashed border-white/10 pb-2">
                                    // KEY_OBJECTIVES_ACHIEVED
                                </h3>
                                <ul className="space-y-4">
                                    {data.details?.map((item, index) => (
                                        <li key={index} className="flex gap-4 text-gray-300 group">
                                            <span className="text-primary mt-1.5 text-xs font-mono group-hover:text-white transition-colors">0{index + 1}</span>
                                            <span className="leading-relaxed group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest border-b border-dashed border-white/10 pb-2">
                                    // TECH_STACK
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.techStack?.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 border border-white/20 text-xs font-mono text-gray-400 hover:border-primary hover:text-primary hover:bg-white/5 transition-all duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ExperiencePanel;
