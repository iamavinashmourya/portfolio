import { useState, useEffect } from "react";
import { SiLeetcode, SiGithub, SiStackoverflow, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaCode, FaTrophy, FaFire, FaGithub, FaStackOverflow, FaLinkedin, FaFileDownload, FaUserAstronaut, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import CyberCard from "../../components/ui/CyberCard";
import GlitchText from "../../components/ui/GlitchText";
import SectionHeader from "../../components/ui/SectionHeader";
import statsData from "../../data/stats.json"; // Offline Sync Data
import CV from "../../assets/Avinash_Mourya_CV.pdf";

import ResumeModal from "../../components/ui/ResumeModal";

const CommandDeck = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [stats, setStats] = useState({
        totalSolved: "1250+", // Placeholder
        leetcode: { solved: statsData.hackerrank.isReal ? 0 : 0, rank: "N/A", rating: "Loading..." }, // Updates dynamically
        github: { repos: 0, contributions: "0" },
        stackoverflow: { reputation: "0", badge: "BRONZE" },
        geeksforgeeks: {
            problems: statsData.geeksforgeeks.problems,
            score: "N/A"
        },
        hackerrank: {
            badge: statsData.hackerrank.certificates + " Verified",
            problems: statsData.hackerrank.certificates
        }
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // 1. GitHub
                const token = import.meta.env.VITE_GITHUB_TOKEN;
                const headers = token ? { Authorization: `token ${token}` } : {};
                const ghRes = await fetch("https://api.github.com/users/iamavinashmourya", { headers });
                if (!ghRes.ok) throw new Error("GitHub API Error");
                const ghData = await ghRes.json();

                // 2. LeetCode
                const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/iamavinashmourya");
                const lcData = await lcRes.json();

                // 3. StackOverflow (UserID: 25598878)
                const soRes = await fetch("https://api.stackexchange.com/2.3/users/25598878?order=desc&sort=reputation&site=stackoverflow");
                const soData = await soRes.json();
                const soUser = soData.items?.[0];

                // 4. GeeksForGeeks (Unofficial API: tashif.codes)
                let gfgSolved = statsData.geeksforgeeks.problems; // Default to Offline Sync (3)
                let gfgRating = statsData.geeksforgeeks.score || "N/A"; // Default to Sync Score (5)

                /* 
                // GFG Live Fetch Disabled due to API 404 Errors
                try {
                    const gfgRes = await fetch("https://gfg-stats.tashif.codes/avinash30o0");
                    const gfgData = await gfgRes.json();

                    if (gfgData.totalProblemsSolved) {
                        gfgSolved = parseInt(gfgData.totalProblemsSolved) || gfgSolved;
                        if (gfgData.codingScore) gfgRating = gfgData.codingScore.toString();
                    }
                } catch (e) {
                    // console.log("GFG Fetch Failed", e);
                } 
                */

                // 5. HackerRank (Data from Offline Sync)
                const hrCount = statsData.hackerrank.certificates; // Verified via npm run sync

                if (ghData && lcData.status === "success") {

                    setStats(prev => ({
                        ...prev,
                        leetcode: {
                            solved: lcData.totalSolved,
                            rank: lcData.ranking,
                            rating: "1850"
                        },
                        github: {
                            repos: ghData.public_repos,
                            contributions: "50+"
                        },
                        stackoverflow: {
                            reputation: soUser ? soUser.reputation.toLocaleString() : "N/A",
                            badge: "ACTIVE"
                        },
                        geeksforgeeks: {
                            score: gfgRating,
                            problems: gfgSolved
                        },
                        hackerrank: {
                            badge: hrCount + " Verified",
                            problems: hrCount
                        },
                        // Total = LeetCode + GFG + HackerRank (Certificates as offset?)
                        // If we want total *problems* solved, we can't use certificates roughly.
                        // But user specifically asked for "awards" on hackerrank.
                        // I will keep totalSolved calculation excluding certs or including them?
                        // "number of question solved OR awards". Certs are awards.
                        totalSolved: lcData.totalSolved + gfgSolved + 0 // Removing 4 offset as we don't know problem count
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch live stats:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <section id="dashboard" className="min-h-screen p-8 pt-24 max-w-7xl mx-auto">
            <header className="mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-secondary text-sm font-mono tracking-widest mb-2">OPERATOR: AVINASH MOURYA</h2>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                        <GlitchText text="COMMAND_DECK" />
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-xs text-muted font-mono">SYS.STATUS: ONLINE</div>
                    <div className="text-xs text-primary font-mono animate-pulse">VP: 100%</div>
                </div>
            </header>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">

                {/* MAIN STATS - Total Solved */}
                <CyberCard className="md:col-span-2 md:row-span-2 relative p-6 bg-white/5 overflow-hidden">
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                        <div className="flex items-center gap-3">
                            <FaUserAstronaut className="text-3xl text-primary" />
                            <span className="text-sm font-mono text-muted tracking-widest">TOTAL_SOLVED</span>
                        </div>
                        <span className="text-[10px] font-mono text-primary animate-pulse border border-primary/20 px-2 py-1 rounded bg-primary/5">LIVE_TRACKING</span>
                    </div>

                    <div className="h-full flex flex-col justify-center items-center gap-6 relative z-0">
                        <div className="text-center">
                            <div className="text-primary text-8xl md:text-[10rem] font-black tracking-tighter drop-shadow-[0_0_30px_rgba(0,255,157,0.5)] leading-none pt-[40px]">
                                {stats.totalSolved}
                            </div>
                            <div className="text-gray-400 font-mono tracking-[0.3em] text-sm md:text-lg mt-4 font-bold uppercase">Problems Solved</div>
                        </div>

                        <div className="flex gap-4">
                            <span className="px-3 py-1 border border-primary/30 text-xs text-primary font-mono rounded bg-primary/10">DSA ENTHUSIAST</span>
                            <span className="px-3 py-1 border border-secondary/30 text-xs text-secondary font-mono rounded bg-secondary/10">FULL STACK</span>
                        </div>
                    </div>
                </CyberCard>

                {/* LeetCode Module */}
                <CyberCard
                    className="md:col-span-1 md:row-span-1 flex flex-col justify-between p-6 cursor-pointer hover:bg-white/5 active:scale-95 transition-all group"
                    delay={0.1}
                    onClick={() => window.open("https://leetcode.com/iamavinashmourya/", "_blank")}
                >
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                            <SiLeetcode className="text-xl text-[#FFA116]" />
                            <span className="text-xs font-mono text-muted tracking-wide">LEETCODE</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#FFA116] border border-[#FFA116]/20 bg-[#FFA116]/5 px-2 py-0.5 rounded">
                            RANK: <span className="font-bold">{stats.leetcode.rank}</span>
                        </span>
                    </div>

                    <div className="mt-auto pt-8">
                        <div className="text-4xl font-black text-white mb-2">{stats.leetcode.solved}</div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-[#FFA116] w-[70%] shadow-[0_0_10px_#FFA116]" />
                        </div>
                        <div className="text-[10px] text-muted font-mono flex justify-between">
                            <span>COMBAT RATING</span>
                            <span className="text-white font-bold">{stats.leetcode.rating}</span>
                        </div>
                    </div>
                </CyberCard>

                {/* GitHub Module */}
                <CyberCard
                    className="md:col-span-1 md:row-span-1 flex flex-col justify-between p-6 relative overflow-hidden cursor-pointer hover:bg-white/5 active:scale-95 transition-all group"
                    delay={0.2}
                    onClick={() => window.open("https://github.com/iamavinashmourya", "_blank")}
                >
                    <div className="flex justify-between items-start z-10">
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-xl text-white" />
                            <span className="text-xs font-mono text-muted tracking-wide">GITHUB</span>
                        </div>
                        <span className="text-[10px] font-mono text-green-400 animate-pulse">● ACTIVE</span>
                    </div>

                    <div className="z-10 mt-auto pt-8">
                        <div className="text-4xl font-black text-white mb-0 leading-none">{stats.github.repos}</div>
                        <div className="text-xs text-muted font-mono mb-4">PUBLIC PROJECTS</div>

                        {/* Bars moved to bottom */}
                        <div className="flex gap-1 h-6 items-end opacity-80">
                            {[40, 70, 30, 80, 50, 90, 60, 40, 75, 55].map((h, i) => (
                                <div key={i} style={{ height: h + "%" }} className="w-1.5 bg-green-500 rounded-sm shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                            ))}
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -bottom-6 -right-6 text-9xl text-white/5 z-0 transform rotate-12">
                        <FaGithub />
                    </div>
                </CyberCard>

                {/* Resume Projector */}
                <CyberCard className="md:col-span-2 md:row-span-1 group cursor-pointer hover:bg-white/5 active:scale-95 transition-all p-6" delay={0.3} onClick={() => setIsResumeOpen(true)}>
                    <div className="flex flex-col h-full justify-center items-start">
                        <div className="text-[10px] font-mono text-primary mb-2 flex items-center gap-2 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded w-fit">
                            <FaFileDownload className="animate-bounce" /> SYSTEM_FILE
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1 tracking-tight">MY RESUME</h3>
                        <p className="text-xs text-muted font-mono tracking-wide group-hover:text-white transition-colors mb-4">{">>"} CLICK TO INITIALIZE VIEW / DOWNLOAD SEQUENCE</p>

                        <button onClick={(e) => { e.stopPropagation(); setIsResumeOpen(true); }} className="h-12 w-12 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                            <FaFileDownload />
                        </button>
                    </div>
                </CyberCard>

                {/* StackOverflow */}
                <CyberCard
                    className="md:col-span-1 md:row-span-1 flex flex-col justify-center cursor-pointer hover:bg-white/5 active:scale-95 transition-all group"
                    delay={0.4}
                    onClick={() => window.open("https://stackoverflow.com/users/25598878/avinash-mourya", "_blank")}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <FaStackOverflow className="text-2xl text-[#F48024]" />
                        <span className="text-[10px] font-mono text-muted tracking-wide">STACKOVERFLOW</span>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-white">{stats.stackoverflow.reputation}</div>
                        <div className="text-[10px] text-muted font-mono mt-1 border-t border-white/10 pt-2 flex justify-between">
                            <span>REPUTATION</span>
                            <span className="text-[#F48024]">BRONZE</span>
                        </div>
                    </div>
                </CyberCard>

                {/* GeeksForGeeks */}
                <CyberCard
                    className="md:col-span-1 md:row-span-1 flex flex-col justify-center cursor-pointer hover:bg-white/5 active:scale-95 transition-all group"
                    delay={0.5}
                    onClick={() => window.open("https://www.geeksforgeeks.org/user/avinash30o0/", "_blank")}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <SiGeeksforgeeks className="text-2xl text-[#2F8D46]" />
                        <span className="text-[10px] font-mono text-muted tracking-wide">GFG</span>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-white">{stats.geeksforgeeks.problems}</div>
                        <div className="text-[10px] text-muted font-mono mt-1 border-t border-white/10 pt-2 flex justify-between">
                            <span>SOLVED</span>
                            <span className="text-[#2F8D46]">SCORE: {stats.geeksforgeeks.score}</span>
                        </div>
                    </div>
                </CyberCard>

                {/* HackerRank */}
                <CyberCard
                    className="md:col-span-1 md:row-span-1 flex flex-col justify-center cursor-pointer hover:bg-white/5 active:scale-95 transition-all group"
                    delay={0.6}
                    onClick={() => window.open("https://www.hackerrank.com/profile/avinashgoweb", "_blank")}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <SiHackerrank className="text-2xl text-[#2EC866]" />
                        <span className="text-[10px] font-mono text-muted tracking-wide">HACKERRANK</span>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white max-w-full truncate">{stats.hackerrank.badge}</div>
                        <div className="text-[10px] text-muted font-mono mt-1 border-t border-white/10 pt-2">SKILL CERTIFICATES</div>
                    </div>
                </CyberCard>

                {/* Socials Uplink */}
                <CyberCard className="md:col-span-1 md:row-span-1 flex flex-col justify-center" delay={0.7}>
                    <div className="text-[10px] font-mono text-secondary tracking-widest mb-6 border-b border-white/10 pb-2">COMM_UPLINK</div>
                    <div className="flex justify-between items-center px-2">
                        <a href="https://www.linkedin.com/in/iamavinashmourya//" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all"><FaLinkedin /></a>
                        <a href="https://x.com/MouryaAvinash12" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all"><FaXTwitter /></a>
                        <a href="https://www.instagram.com/avinashmourya.js/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all"><FaInstagram /></a>
                        <a href="mailto:avinashgoweb@gmail.com" className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all"><FaEnvelope /></a>
                    </div>
                </CyberCard>

            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} pdfUrl={CV} />
        </section>
    );
};

export default CommandDeck;
