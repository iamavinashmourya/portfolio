import { useState } from "react";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import CyberModal from "../../components/ui/CyberModal";
import { FaBriefcase, FaGraduationCap, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
    {
        id: 1,
        title: "B.Tech in Computer Engineering",
        school: "University of Mumbai",
        year: "2022 - 2026",
        desc: "Focusing on Data Structures, Algorithms, and System Design. CGPA: 9.2 (Consistent Top 5%).",
        semesters: [
            {
                sem: "SEMESTER 01",
                sgpa: "9.1 SGPA",
                subjects: ["Engineering Mathematics I", "Engineering Physics", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Mechanics"]
            },
            {
                sem: "SEMESTER 02",
                sgpa: "9.3 SGPA",
                subjects: ["Engineering Mathematics II", "Engineering Graphics", "C Programming", "Professional Communication", "Basic Electronics"]
            },
            {
                sem: "SEMESTER 03",
                sgpa: "9.0 SGPA",
                subjects: ["Data Structures", "Discrete Mathematics", "Digital Logic Design", "Computer Graphics", "OOPM (Java)"]
            },
            {
                sem: "SEMESTER 04",
                sgpa: "9.4 SGPA",
                subjects: ["Analysis of Algorithms", "Operating Systems", "Computer Networks", "Microprocessors", "Database Management Systems"]
            },
            {
                sem: "SEMESTER 05",
                sgpa: "9.5 SGPA",
                subjects: ["Advanced Algorithms", "Software Engineering", "Computer Network Security", "Internet Programming", "Professional Ethics"]
            }
        ]
    }
];

const workData = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "CodeAlpha",
        period: "2024 - PRESENT",
        desc: "Deployed scalable web applications using React and Node.js. Optimized database queries reducing load time by 40%.",
        details: [
            "Architected and deployed a MERN stack application handling 500+ daily active users.",
            "Implemented Redis caching strategies to reduce API latency by 40%.",
            "Collaborated with a team of 4 developers to integrate RESTful APIs and real-time features using Socket.io.",
            "Designed and implemented a responsive UI using React and Tailwind CSS, improving user retention by 25%."
        ],
        techStack: ["React", "Node.js", "MongoDB", "Redis", "Docker"]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState("education");
    const [selectedEdu, setSelectedEdu] = useState(null);
    const [selectedWork, setSelectedWork] = useState(null);
    const [expandedSem, setExpandedSem] = useState(null);

    const toggleSem = (index) => {
        setExpandedSem(expandedSem === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 pb-0 px-8 max-w-4xl mx-auto">
            <SectionHeader title="EXPERIENCE" subtitle="[HISTORY_TRACKING]" />

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
                            {workData.map((work) => (
                                <div key={work.id} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[5px] top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#39FF14]" />
                                    <div className="mb-2 font-mono text-sm text-primary">{work.period}</div>
                                    <div className="cursor-pointer" onClick={() => setSelectedWork(work)}>
                                        <CyberCard className="hover:border-primary/50 transition-colors group">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{work.role}</h3>
                                                    <h4 className="text-secondary font-mono text-sm mb-4">{work.company}</h4>
                                                    <p className="text-gray-400 text-sm md:text-base">
                                                        {work.desc}
                                                    </p>
                                                </div>
                                                <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded bg-primary/5">DETAILS &gt;&gt;</span>
                                            </div>
                                        </CyberCard>
                                    </div>
                                </div>
                            ))}
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
                            {educationData.map((edu) => (
                                <div key={edu.id} className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[5px] top-0 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_#00f0ff]" />
                                    <div className="mb-2 font-mono text-sm text-secondary">{edu.year}</div>
                                    <div className="cursor-pointer" onClick={() => setSelectedEdu(edu)}>
                                        <CyberCard className="hover:border-secondary/50 transition-colors group">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors">{edu.title}</h3>
                                                    <h4 className="text-muted font-mono text-sm mb-4">{edu.school}</h4>
                                                    <p className="text-gray-400 text-sm md:text-base">
                                                        {edu.desc}
                                                    </p>
                                                </div>
                                                <span className="text-xs font-mono text-secondary border border-secondary/30 px-2 py-1 rounded bg-secondary/5">DETAILS &gt;&gt;</span>
                                            </div>
                                        </CyberCard>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ACADEMIC DETAILS MODAL */}
            <CyberModal
                isOpen={!!selectedEdu}
                onClose={() => setSelectedEdu(null)}
                title={selectedEdu?.title || "ACADEMIC_DETAILS"}
            >
                <div className="space-y-4">
                    <div className="text-muted font-mono text-sm mb-6 pb-6 border-b border-white/10">
                        TARGET: <span className="text-white">{selectedEdu?.school}</span>
                        <br />
                        TIMELINE: <span className="text-white">{selectedEdu?.year}</span>
                    </div>

                    {selectedEdu?.semesters.map((sem, index) => (
                        <div key={index} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleSem(index)}
                                className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-bold font-mono">{sem.sem}</span>
                                    <span className="text-xs text-muted border border-white/10 px-2 py-0.5 rounded">{sem.sgpa}</span>
                                </div>
                                <FaChevronDown className={`text-muted transition-transform duration-300 ${expandedSem === index ? "rotate-180" : ""}`} />
                            </button>

                            {/* Accordion Body */}
                            <AnimatePresence>
                                {expandedSem === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 pt-0 border-t border-white/10">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                                                {sem.subjects.map((sub, i) => (
                                                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                        <span className="text-secondary mt-1">▹</span>
                                                        {sub}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </CyberModal>

            {/* WORK DETAILS MODAL */}
            <CyberModal
                isOpen={!!selectedWork}
                onClose={() => setSelectedWork(null)}
                title={selectedWork?.role || "WORK_LOGS"}
            >
                <div className="space-y-6">
                    <div className="text-muted font-mono text-sm pb-6 border-b border-white/10">
                        COMPANY: <span className="text-primary font-bold">{selectedWork?.company}</span>
                        <br />
                        DURATION: <span className="text-primary">{selectedWork?.period}</span>
                    </div>

                    <div>
                        <h4 className="text-sm font-mono text-secondary mb-3">// KEY_OBJECTIVES_ACHIEVED</h4>
                        <ul className="space-y-2">
                            {selectedWork?.details.map((detail, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-300">
                                    <span className="text-primary mt-1">▹</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-mono text-secondary mb-3">// TECH_ARSENAL</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedWork?.techStack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-primary/80">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </CyberModal>
        </section>
    );
};

export default Experience;
