import { useState, useEffect } from "react";

import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaSpotify, FaCode, FaHammer, FaRocket, FaJava } from "react-icons/fa";
import { SiLeetcode, SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiRust, SiGo, SiNextdotjs, SiTailwindcss, SiGnubash, SiDart, SiVuedotjs } from "react-icons/si";

const LANGUAGE_COLORS = {
    "JavaScript": "#f7df1e",
    "TypeScript": "#3178c6",
    "Python": "#3776ab",
    "C++": "#00599c",
    "HTML": "#e34c26",
    "CSS": "#1572b6",
    "Node.js": "#339933",
    "React": "#61dafb",
    "Java": "#007396",
    "Shell": "#4EAA25",
    "Go": "#00add8",
    "Rust": "#dea584",
    "Next.js": "#ffffff",
    "Dart": "#0175C2",
    "Vue": "#4FC08D"
};

const LANGUAGE_ICONS = {
    "JavaScript": <SiJavascript />,
    "TypeScript": <SiTypescript />,
    "Python": <SiPython />,
    "C++": <SiCplusplus />,
    "HTML": <SiHtml5 />,
    "CSS": <SiCss3 />,
    "Node.js": <SiNodedotjs />,
    "React": <SiReact />,
    "Java": <FaJava />,
    "Shell": <SiGnubash />,
    "Go": <SiGo />,
    "Rust": <SiRust />,
    "Next.js": <SiNextdotjs />,
    "Dart": <SiDart />,
    "Vue": <SiVuedotjs />
};

// Languages to explicitly hide from the stats
const IGNORED_LANGUAGES = ["PHP", "Blade"];

const ActivityHub = () => {
    // State for Live Data
    const [latestRepo, setLatestRepo] = useState(null);
    const [latestCommit, setLatestCommit] = useState(null);
    const [latestLeetCode, setLatestLeetCode] = useState(null);
    const [totalContributions, setTotalContributions] = useState(null);
    const [languageStats, setLanguageStats] = useState(null);

    useEffect(() => {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `token ${token}` } : {};

        // 1. Fetch Latest Repo
        fetch("https://api.github.com/users/iamavinashmourya/repos?sort=updated&per_page=1", { headers })
            .then(res => {
                if (!res.ok) throw new Error("Rate Limit or Network Error");
                return res.json();
            })
            .then(data => {
                if (data && data.length > 0) {
                    setLatestRepo(data[0]);
                }
            })
            .catch(err => console.error("Repo Fetch Error:", err));

        // 2. Fetch Latest Activity (Commit or PR)
        fetch("https://api.github.com/users/iamavinashmourya/events?per_page=10", { headers })
            .then(res => {
                if (!res.ok) throw new Error("Rate Limit or Network Error");
                return res.json();
            })
            .then(data => {
                if (!Array.isArray(data)) return; // Prevent crash if data is not an array
                const latestEvent = data.find(event => event.type === "PushEvent" || event.type === "PullRequestEvent");

                if (latestEvent) {
                    if (latestEvent.type === "PushEvent") {
                        if (latestEvent.payload.commits && latestEvent.payload.commits.length > 0) {
                            const commits = latestEvent.payload.commits;
                            setLatestCommit({
                                message: `Commit: ${commits[commits.length - 1].message}`,
                                date: new Date(latestEvent.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                repoName: latestEvent.repo.name
                            });
                        } else if (latestEvent.payload.head) {
                            fetch(`https://api.github.com/repos/${latestEvent.repo.name}/commits/${latestEvent.payload.head}`, { headers })
                                .then(res => res.json())
                                .then(commitData => {
                                    setLatestCommit({
                                        message: `Commit: ${commitData.commit.message}`,
                                        date: new Date(latestEvent.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                        repoName: latestEvent.repo.name
                                    });
                                })
                                .catch(err => console.error("Detailed Commit Fetch Error:", err));
                        }
                    } else if (latestEvent.type === "PullRequestEvent") {
                        setLatestCommit({
                            message: `PR: ${latestEvent.payload.pull_request.title}`,
                            date: new Date(latestEvent.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            repoName: latestEvent.repo.name
                        });
                    }
                }
            })
            .catch(err => console.error("Activity Fetch Error:", err));

        // 3. Fetch Latest LeetCode with Error Handling
        fetch("https://alfa-leetcode-api.onrender.com/iamavinashmourya/acSubmission?limit=1")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`API Error: ${res.statusText}`);
                }
                // Clone response to safely check content type or just try text parsing
                return res.text().then(text => {
                    try {
                        return JSON.parse(text);
                    } catch (e) {
                        // Check if it's the specific "Too many requests" error
                        if (text.includes("Too many requests")) {
                            throw new Error("Rate Limited");
                        }
                        throw new Error("Invalid JSON response");
                    }
                });
            })
            .then(data => {
                if (data && Array.isArray(data) && data.length > 0) {
                    setLatestLeetCode(data[0]);
                } else if (data && data.submission && data.submission.length > 0) {
                    setLatestLeetCode(data.submission[0]);
                }
            })
            .catch(err => {
                // Silently fail on rate limit/API errors
            });

        // 4. Fetch Total Contributions
        fetch("https://github-contributions-api.jogruber.de/v4/iamavinashmourya")
            .then(res => res.json())
            .then(data => {
                if (data.total) {
                    const total = Object.values(data.total).reduce((a, b) => a + b, 0);
                    setTotalContributions(total);
                }
            })
            .catch(err => console.error("Contributions Fetch Error:", err));
        // 5. Fetch Repos for Language Stats (Public + Private if token exists)
        const url = token
            ? "https://api.github.com/user/repos?type=all&per_page=100&sort=updated"
            : "https://api.github.com/users/iamavinashmourya/repos?per_page=100";

        fetch(url, { headers })
            .then(res => res.json())
            .then(async data => {
                if (data && Array.isArray(data)) {
                    // Filter to top 50 active repos to avoid hitting rate limits too hard if array is huge
                    // (But with a token, we have 5000 requests/hr, so 50 is safe)
                    const relevantRepos = data.slice(0, 50);

                    const languageMap = {};
                    let totalBytes = 0;

                    // Fetch language details for each repo in parallel
                    // This gives us the BYTE count of every language in the repo, not just the primary one
                    const promises = relevantRepos.map(repo =>
                        fetch(repo.languages_url, { headers })
                            .then(res => res.json())
                            .then(langs => {
                                Object.entries(langs).forEach(([lang, bytes]) => {
                                    if (IGNORED_LANGUAGES.includes(lang)) return; // Skip ignored languages

                                    languageMap[lang] = (languageMap[lang] || 0) + bytes;
                                    totalBytes += bytes;
                                });
                            })
                            .catch(err => console.error(`Failed to fetch languages for ${repo.name}`, err))
                    );

                    await Promise.all(promises);

                    // Convert to array, calculate percentage based on BYTES
                    const sortedLanguages = Object.entries(languageMap)
                        .map(([name, bytes]) => ({
                            name,
                            count: bytes, // Storing bytes now, not just repo count
                            percentage: Math.round((bytes / totalBytes) * 100)
                        }))
                        .filter(l => l.percentage > 0) // Filter out <1% noise if desired, or keep all
                        .sort((a, b) => b.count - a.count);

                    setLanguageStats(sortedLanguages);
                }
            })
            .catch(err => console.error("Language Stats Fetch Error:", err));
    }, []);


    return (
        <section id="activity-hub" className="py-20 pb-0 px-8 max-w-7xl mx-auto">
            <SectionHeader title="NEXUS_UPLINK" subtitle="[LIVE_ACTIVITY_FEED]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">

                {/* COLUMN 1: CODE STREAM */}
                <div className="space-y-6">
                    {/* Latest GitHub Repo */}
                    <CyberCard
                        className="h-[200px] flex flex-col justify-between group cursor-pointer hover:bg-white/5"
                        onClick={() => {
                            if (latestRepo && latestRepo.html_url) {
                                console.log("Opening Repo:", latestRepo.html_url);
                                window.open(latestRepo.html_url, "_blank");
                            }
                        }}
                        title={latestRepo ? `View ${latestRepo.name} on GitHub` : "Loading..."}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <FaGithub className="text-2xl text-white" />
                                <span className="text-xs font-mono text-muted">LATEST_REPO</span>
                            </div>
                            <span className="text-xs font-mono text-primary animate-pulse">{latestRepo ? (latestRepo.private ? "PRIVATE" : "PUBLIC") : "LOADING..."}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{latestRepo ? latestRepo.name : "Fetching REPO..."}</h3>
                            <p className="text-sm text-gray-400 mt-2 mb-4 line-clamp-2">
                                {latestRepo ? (latestRepo.description || "No description provided.") : "Accessing GitHub API..."}
                            </p>
                        </div>
                        <div className="flex gap-4 text-xs font-mono text-muted">
                            <span>★ {latestRepo ? latestRepo.stargazers_count : 0}</span>
                            <span>⑂ {latestRepo ? latestRepo.forks_count : 0}</span>
                            <span className="text-secondary">{latestRepo ? latestRepo.language : "..."}</span>
                        </div>
                    </CyberCard>

                    {/* Latest Activity (Commit or PR) */}
                    <CyberCard className="h-[150px] flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted">
                            <FaCode className="text-primary" />
                            <span>LATEST_COMMIT</span>
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                            <p className="text-sm text-green-400 font-mono mb-2 line-clamp-2">
                                "{latestCommit ? latestCommit.message : "Fetching activity..."}"
                            </p>
                            <p className="text-xs text-gray-500 text-right">
                                {latestCommit ? `Today at ${latestCommit.date}` : "Syncing..."}
                            </p>
                        </div>
                    </CyberCard>

                    {/* Latest LeetCode */}
                    <CyberCard className="h-[150px] flex flex-col justify-between" onClick={() => latestLeetCode && window.open(`https://leetcode.com/problems/${latestLeetCode.titleSlug}/`, "_blank")}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <SiLeetcode className="text-yellow-500 text-xl" />
                                <span className="text-xs font-mono text-muted">LATEST_SOLVED</span>
                            </div>
                            <span className="text-xs font-mono text-green-500">{latestLeetCode ? "ACCEPTED" : "WAITING"}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white line-clamp-1">
                                {latestLeetCode ? latestLeetCode.title : "Fetching LeetCode..."}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                                {latestLeetCode ? new Date(parseInt(latestLeetCode.timestamp) * 1000).toLocaleDateString() : "..."}
                            </p>
                        </div>
                        <div className="text-xs font-mono text-gray-500 mt-2">
                            {latestLeetCode ? "Solution verified" : "Syncing..."}
                        </div>
                    </CyberCard>
                </div>

                {/* COLUMN 2: PROJECT RADAR (Center) */}
                <div className="space-y-6">
                    {/* Current WIP */}
                    <CyberCard className="h-[300px] border-primary/50 relative overflow-hidden cursor-pointer group hover:bg-white/5 transition-all active:scale-95" onClick={() => window.open("https://github.com/iamavinashmourya/DevOrbit", "_blank")}>
                        <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg font-mono flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            BUILDING_NOW
                        </div>
                        <div className="h-full flex flex-col justify-end">
                            <div className="mb-4">
                                <div className="text-xs font-mono text-muted mb-1 flex items-center gap-2">
                                    <FaHammer /> WORK_IN_PROGRESS
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">DevOrbit</h3>
                                <p className="text-sm text-gray-400">
                                    Futuristic, full-stack productivity tracker for developers with real-time stats and glassmorphic UI.
                                </p>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "72%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                />
                            </div>
                            <div className="flex justify-between text-xs font-mono text-muted mt-2">
                                <span>PHASE: BETA</span>
                                <span>72%</span>
                            </div>
                        </div>
                    </CyberCard>

                    {/* Latest Showcase */}
                    <CyberCard className="h-[300px] group cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        {/* Placeholder for Project Image - Using CSS Pattern for now */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black -z-10 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative z-20 h-full flex flex-col justify-end p-2">
                            <div className="text-xs font-mono text-secondary mb-4 flex items-center gap-2">
                                <FaRocket /> LATEST_DEPLOY
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">PayMate</h3>
                            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                A production-ready payroll system built to manage employees, attendance, leave, advances, loans, and automated salary calculation with live reporting.
                            </p>
                            <button className="self-start text-xs font-mono text-black bg-primary px-4 py-2 rounded hover:bg-white transition-colors">
                                VIEW_CASE_STUDY
                            </button>
                        </div>
                    </CyberCard>
                </div>

                {/* COLUMN 3: KNOWLEDGE CORE */}
                <div className="space-y-6">
                    {/* Total GitHub Contributions */}
                    <CyberCard className="h-[150px] relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                        {/* Background Frequency Visualizer (Animated) */}
                        <div className="absolute inset-0 flex items-end justify-between px-2 opacity-20 group-hover:opacity-40 transition-opacity z-0 pointer-events-none">
                            {[...Array(24)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 bg-primary rounded-t-sm mx-[1px]"
                                    animate={{
                                        height: [
                                            `${Math.random() * 20 + 10}%`,
                                            `${Math.random() * 90 + 10}%`,
                                            `${Math.random() * 50 + 10}%`
                                        ]
                                    }}
                                    transition={{
                                        duration: 0.4 + Math.random() * 0.4,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                        delay: Math.random() * 0.2
                                    }}
                                />
                            ))}
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-3 bg-gradient-to-t from-black/60 to-transparent">
                            <div className="flex justify-between items-start">
                                <div className="text-xs font-mono text-muted flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    CODING_FREQUENCY
                                </div>
                                <FaGithub className="text-2xl text-white/20 group-hover:text-primary/40 transition-colors" />
                            </div>

                            <div>
                                <h3 className="text-5xl font-bold text-white mb-0 tracking-tighter drop-shadow-md">
                                    {totalContributions || "0"}
                                </h3>
                                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-primary"></span>
                                    Total Contributions
                                </p>
                            </div>
                        </div>
                    </CyberCard>

                    {/* Github Language Stats */}
                    <CyberCard className="h-[450px] overflow-hidden flex flex-col">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <FaCode className="text-xl" />
                            <span className="font-mono text-sm tracking-wider">LANGUAGE_CORE</span>
                        </div>

                        {/* Multi-Color Progress Bar */}
                        <div className="w-full h-3 rounded-full flex overflow-hidden mb-6 bg-white/5">
                            {languageStats ? languageStats.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percentage}%` }}
                                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                                    className="h-full"
                                    style={{ backgroundColor: LANGUAGE_COLORS[lang.name] || "#666" }}
                                    title={`${lang.name}: ${lang.percentage}%`}
                                />
                            )) : (
                                <div className="w-full h-full bg-white/10 animate-pulse" />
                            )}
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <div className="grid grid-cols-2 gap-4">
                                {languageStats ? languageStats.map((lang) => (
                                    <div key={lang.name} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                                        <div className="text-xl" style={{ color: LANGUAGE_COLORS[lang.name] || "#666" }}>
                                            {LANGUAGE_ICONS[lang.name] || <FaCode />}
                                        </div>
                                        <div>
                                            <div className="text-sm text-white font-bold">{lang.name}</div>
                                            <div className="text-xs text-muted font-mono">{lang.percentage}%</div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-span-2 text-center text-xs font-mono text-muted animate-pulse py-10">
                                        ANALYZING REPOSITORIES...
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 text-xs font-mono text-gray-500 text-center">
                            Scanning Public & Private Repositories
                        </div>
                    </CyberCard>
                </div>

            </div>
        </section>
    );
};

export default ActivityHub;
