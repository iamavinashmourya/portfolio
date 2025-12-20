import { useState, useEffect } from "react";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import CyberModal from "../../components/ui/CyberModal";
import { FaBriefcase, FaGraduationCap, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
    {
        id: 1,
        title: "B.Tech – Information Technology",
        school: "Parul University",
        year: "2025 – Present",
        desc: "Currently in 2nd year, focused on advanced computer science concepts, problem-solving, full stack development, system design, and building scalable applications.",
        semesters: [
            {
                sem: "CORE STACK & SKILLS",
                sgpa: "IN_PROGRESS",
                subjects: ["Data Structures & Algorithms", "DBMS", "Java", "C", "C++", "JavaScript", "REST APIs", "Python Flask", "Amazon Web Services (AWS)", "Docker", "MySQL", "Postman", "Git"]
            }
        ]
    },
    {
        id: 2,
        title: "Diploma – Information Technology",
        school: "Parul University",
        year: "2022 – 2025",
        grade: "CGPA: 8.03",
        desc: "Built a strong foundation in computer science fundamentals with hands-on exposure to programming and databases.",
        semesters: [
            {
                sem: "SEMESTER 1",
                sgpa: "COMPLETED",
                subjects: ["Environmental Science", "Introduction to IT Systems", "Computer Programming", "Electrical Workshop Practice", "Engineering Graphics", "Mathematics - I", "Basic Physics", "Communication Skills - I"]
            },
            {
                sem: "SEMESTER 2",
                sgpa: "COMPLETED",
                subjects: ["Advanced Computer Programming", "Scripting Language(Python)", "Fundamentals of Electrical and Electronics Engineering", "Mathematics-II", "Communication Skills - II"]
            },
            {
                sem: "SEMESTER 3",
                sgpa: "COMPLETED",
                subjects: ["Entrepreneurship and Start-ups", "Human Resource Planning", "Operating Systems", "Object Oriented Programming with C++", "Computer Organization & Architecture", "Data Structure", "Software Development", "Professional Communication and Critical Thinking"]
            },
            {
                sem: "SEMESTER 4",
                sgpa: "COMPLETED",
                subjects: ["Essence of Indian Knowledge and Tradition", "Database Management System", "Data Communication Network", "PHP & MYSQL", "Minor Project", "Core JAVA Programing", "Employability Skills"]
            },
            {
                sem: "SEMESTER 5",
                sgpa: "COMPLETED",
                subjects: ["Internet of Things", "Advanced Programing With JAVA", "Computer Graphics & Image Processing", "Summer Internship", "Major Project-1", "Data Mining", "Advanced Communication Network"]
            },
            {
                sem: "SEMESTER 6",
                sgpa: "COMPLETED",
                subjects: ["Indian Constitution", "Cryptography", "Android Application Development", "ASP.NET Programing", "Major Project-2", "Artificial Intelligence"]
            }
        ]
    }
];

const workData = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "GravityWrite",
        period: "Apr 2024 – Jun 2024",
        location: "Tamil Nadu, IN",
        type: "Internship",
        mode: "Remote",
        desc: "Built and maintained full stack features using React, Node.js, Express, and MongoDB.",
        details: [
            "Built and maintained full stack features using React, Node.js, Express, and MongoDB.",
            "Designed and optimized RESTful APIs, improving backend performance and response times.",
            "Worked on database queries and data modeling to support scalable application features.",
            "Collaborated with AI/ML teams to integrate intelligent, AI-powered functionalities into production workflows.",
            "Gained experience working with real-world codebases, deployment processes, and collaborative engineering practices."
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState("education");
    const [selectedEdu, setSelectedEdu] = useState(null);
    const [selectedWork, setSelectedWork] = useState(null);
    const [expandedSem, setExpandedSem] = useState(null);

    // Listen for custom event to switch tabs from Navbar
    useEffect(() => {
        const handleTabSwitch = (e) => {
            if (e.detail) {
                setActiveTab(e.detail);
            }
        };

        window.addEventListener('set-experience-tab', handleTabSwitch);
        return () => window.removeEventListener('set-experience-tab', handleTabSwitch);
    }, []);

    const toggleSem = (index) => {
        setExpandedSem(expandedSem === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
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
                        <FaBriefcase /> EXPERIENCE
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
                                                    <h4 className="text-secondary font-mono text-sm mb-2">{work.company}</h4>
                                                    <div className="mb-4 text-xs font-mono text-muted">
                                                        <span className="border border-white/10 px-2 py-0.5 rounded bg-white/5">
                                                            {work.location} · {work.type} · {work.mode}
                                                        </span>
                                                    </div>
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
                                                    <h4 className="text-muted font-mono text-sm mb-4">
                                                        {edu.school}
                                                        {edu.grade && <span className="ml-3 text-secondary border border-secondary/30 px-2 py-0.5 rounded bg-secondary/5 text-xs">{edu.grade}</span>}
                                                    </h4>
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
                        <br />
                        LOCATION: <span className="text-white">{selectedWork?.location} ({selectedWork?.mode})</span>
                        <br />
                        TYPE: <span className="text-white">{selectedWork?.type}</span>
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
