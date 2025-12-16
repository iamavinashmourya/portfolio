import { FaGithub, FaYoutube, FaSpotify, FaCode, FaHammer, FaRocket } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { motion } from "framer-motion";

const ActivityHub = () => {
    return (
        <section id="activity" className="py-20 pb-0 px-8 max-w-7xl mx-auto">
            <SectionHeader title="NEXUS_UPLINK" subtitle="[LIVE_ACTIVITY_FEED]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">

                {/* COLUMN 1: CODE STREAM */}
                <div className="space-y-6">
                    {/* Latest GitHub Repo */}
                    <CyberCard className="h-[200px] flex flex-col justify-between group cursor-pointer hover:bg-white/5">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <FaGithub className="text-2xl text-white" />
                                <span className="text-xs font-mono text-muted">LATEST_REPO</span>
                            </div>
                            <span className="text-xs font-mono text-primary animate-pulse">PUBLIC</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Neo-Portfolio-V2</h3>
                            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                Advanced React portfolio with cyber-kinetic aesthetics and real-time activity tracking.
                            </p>
                        </div>
                        <div className="flex gap-4 text-xs font-mono text-muted">
                            <span>★ 12</span>
                            <span>⑂ 4</span>
                            <span className="text-secondary">JavaScript</span>
                        </div>
                    </CyberCard>

                    {/* Latest Contribution */}
                    <CyberCard className="h-[150px] flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted">
                            <FaCode className="text-secondary" />
                            LATEST_COMMIT
                        </div>
                        <div className="bg-black/50 p-3 rounded font-mono text-xs text-green-400 border-l-2 border-green-500">
                            "feat: implemented detailed semester breakdown modal"
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-2">2 hours ago</div>
                    </CyberCard>

                    {/* Latest LeetCode */}
                    <CyberCard className="h-[180px] flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <SiLeetcode className="text-xl text-[#FFA116]" />
                                <span className="text-xs font-mono text-muted">LATEST_SOLVED</span>
                            </div>
                            <span className="text-xs text-green-400 font-bold">ACCEPTED</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Merge k Sorted Lists</h3>
                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20 mt-2 inline-block">HARD</span>
                        </div>
                        <div className="text-xs font-mono text-gray-500">
                            Time: 108ms (Top 5%) | Mem: 45MB
                        </div>
                    </CyberCard>
                </div>

                {/* COLUMN 2: PROJECT RADAR (Center) */}
                <div className="space-y-6">
                    {/* Current WIP */}
                    <CyberCard className="h-[300px] border-primary/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            BUILDING_NOW
                        </div>
                        <div className="h-full flex flex-col justify-end">
                            <div className="mb-4">
                                <div className="text-xs font-mono text-muted mb-1 flex items-center gap-2">
                                    <FaHammer /> WORK_IN_PROGRESS
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">AI Resume Analyzer</h3>
                                <p className="text-sm text-gray-400">
                                    Using NLP to parse resumes and suggest improvements against job descriptions.
                                </p>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "65%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                />
                            </div>
                            <div className="flex justify-between text-xs font-mono text-muted mt-2">
                                <span>PHASE: DEVELOPMENT</span>
                                <span>65%</span>
                            </div>
                        </div>
                    </CyberCard>

                    {/* Latest Showcase */}
                    <CyberCard className="h-[300px] group cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        {/* Placeholder for Project Image - Using CSS Pattern for now */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black -z-10 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative z-20 h-full flex flex-col justify-end p-2">
                            <div className="text-xs font-mono text-secondary mb-1 flex items-center gap-2">
                                <FaRocket /> LATEST_DEPLOY
                            </div>
                            <h3 className="text-2xl font-bold text-white">E-Commerce Dashboard</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                Full-stack admin panel with real-time analytics and inventory management.
                            </p>
                            <button className="self-start text-xs font-mono text-black bg-primary px-4 py-2 rounded hover:bg-white transition-colors">
                                VIEW_CASE_STUDY
                            </button>
                        </div>
                    </CyberCard>
                </div>

                {/* COLUMN 3: KNOWLEDGE CORE */}
                <div className="space-y-6">
                    {/* Favorite Vibe Playlist */}
                    <CyberCard className="h-[150px] flex items-center gap-4 group cursor-pointer hover:border-[#1DB954]/50 transition-colors">
                        <div className="w-20 h-20 bg-[#1DB954]/10 rounded-full flex items-center justify-center border border-[#1DB954]/30 group-hover:scale-105 transition-transform">
                            <FaSpotify className="text-3xl text-[#1DB954]" />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-muted mb-1">CODING_FREQUENCY</div>
                            <h3 className="text-lg font-bold text-white">Cyberpunk Focus</h3>
                            <p className="text-xs text-gray-500">Synthwave / Dark Techno</p>
                        </div>
                    </CyberCard>

                    {/* Recommended Resources */}
                    <CyberCard className="h-[450px] overflow-hidden">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <FaYoutube className="text-xl" />
                            <span className="font-mono text-sm tracking-wider">NEURAL_UPLINK</span>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: "System Design Primer", channel: "Gaurav Sen", tag: "ARCH" },
                                { title: "Advanced React Patterns", channel: "Jack Herrington", tag: "FRONTEND" },
                                { title: "Kubernetes for Beginners", channel: "TechWorld with Nana", tag: "DEVOPS" },
                                { title: "Blind 75 LeetCode", channel: "NeetCode", tag: "DSA" },
                            ].map((item, i) => (
                                <div key={i} className="group cursor-pointer p-3 rounded bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-sm text-white group-hover:text-secondary transition-colors">{item.title}</h4>
                                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/10 text-gray-400">{item.tag}</span>
                                    </div>
                                    <div className="text-xs text-muted font-mono flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        {item.channel}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CyberCard>
                </div>

            </div>
        </section>
    );
};

export default ActivityHub;
