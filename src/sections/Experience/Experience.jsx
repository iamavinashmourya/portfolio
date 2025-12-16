import { useState } from "react";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
            <SectionHeader title="SYSTEM_LOGS" subtitle="[HISTORY_TRACKING]" />

            {/* TAB SWITCHER */}
            <div className="flex justify-center mb-12">
                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 relative">
                    <button
                        onClick={() => setActiveTab("education")}
                        className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-mono tracking-wider transition-colors ${activeTab === "education" ? "text-black font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                        <FaGraduationCap /> ACADEMIC_LOGS
                    </button>
                    <button
                        onClick={() => setActiveTab("work")}
                        className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-mono tracking-wider transition-colors ${activeTab === "work" ? "text-black font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                        <FaBriefcase /> WORK_HISTORY
                    </button>

                    {/* Animated Background for Active Tab */}
                    <motion.div
                        layoutId="activeTab"
                        className={`absolute top-1 bottom-1 ${activeTab === "education" ? "left-1 right-[50%]" : "left-[50%] right-1"} bg-primary rounded-lg z-0`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                </div>
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === "work" ? (
                        <motion.div
                            key="work"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12"
                        >
                            {/* Experience Item 1 */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[5px] top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#39FF14]" />
                                <div className="mb-2 font-mono text-sm text-primary">2024 - PRESENT</div>
                                <CyberCard>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Developer Intern</h3>
                                    <h4 className="text-secondary font-mono text-sm mb-4">CodeAlpha</h4>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        Deployed scalable web applications using React and Node.js. Optimized database queries reducing load time by 40%.
                                    </p>
                                </CyberCard>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12"
                        >
                            {/* Education Item */}
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[5px] top-0 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_#00f0ff]" />
                                <div className="mb-2 font-mono text-sm text-secondary">2022 - 2026</div>
                                <CyberCard>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">B.Tech in Computer Engineering</h3>
                                    <h4 className="text-muted font-mono text-sm mb-4">University of Mumbai</h4>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        Focusing on Data Structures, Algorithms, and System Design. CGPA: 9.2 (Consistent Top 5%).
                                    </p>
                                </CyberCard>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experience;
