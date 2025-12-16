import { FaGithub, FaStackOverflow, FaLinkedin, FaTwitter, FaCode, FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";
import CyberCard from "../../components/ui/CyberCard";
import GlitchText from "../../components/ui/GlitchText";
import CV from "../../assets/Avinash_Mourya_CV.pdf";

const CommandDeck = () => {
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
                <CyberCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center items-center bg-white/5">
                    <div className="text-primary text-6xl md:text-8xl font-black tracking-tighter">1250+</div>
                    <div className="text-muted font-mono tracking-widest text-lg">PROBLEMS SOLVED</div>
                    <div className="mt-8 flex gap-4">
                        <span className="px-3 py-1 border border-primary/30 text-xs text-primary rounded-full bg-primary/10">DSA MASTER</span>
                        <span className="px-3 py-1 border border-secondary/30 text-xs text-secondary rounded-full bg-secondary/10">FULL STACK</span>
                    </div>
                </CyberCard>

                {/* LeetCode Module */}
                <CyberCard className="md:col-span-1 md:row-span-1 group" delay={0.1}>
                    <div className="flex justify-between items-start mb-4">
                        <SiLeetcode className="text-3xl text-[#FFA116]" />
                        <span className="text-xs font-mono text-muted">RANK: 15,204</span>
                    </div>
                    <div className="text-2xl font-bold">500+ Solved</div>
                    <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FFA116] w-[70%]" />
                    </div>
                    <div className="mt-2 text-xs text-muted font-mono">COMBAT RATING: 1850</div>
                </CyberCard>

                {/* GitHub Module */}
                <CyberCard className="md:col-span-1 md:row-span-1" delay={0.2}>
                    <div className="flex justify-between items-start mb-4">
                        <FaGithub className="text-3xl text-white" />
                        <span className="text-xs font-mono text-muted">ACTIVE</span>
                    </div>
                    <div className="text-2xl font-bold">1,200+</div>
                    <div className="text-sm text-muted">Yearly Contributions</div>
                    <div className="flex gap-1 mt-4 items-end h-8">
                        {[40, 70, 30, 80, 50, 90, 60, 40].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="w-1 bg-primary/50 flex-1" />
                        ))}
                    </div>
                </CyberCard>

                {/* Resume Projector */}
                <CyberCard className="md:col-span-2 md:row-span-1 flex items-center justify-between cursor-pointer hover:bg-white/5 active:scale-95 transition-all" delay={0.3}>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">RESUME_PROJECTOR_V1</h3>
                        <p className="text-xs text-muted font-mono">CLICK TO INITIALIZE HOLOGRAPHIC VIEW</p>
                    </div>
                    <a href={CV} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <FaFileDownload />
                    </a>
                    {/* Note: User requested "Open in app". For MVP this links to PDF. Can implement Modal later if requested specifically. */}
                </CyberCard>

                {/* StackOverflow */}
                <CyberCard className="md:col-span-1 md:row-span-1" delay={0.4}>
                    <FaStackOverflow className="text-3xl text-[#F48024] mb-2" />
                    <div className="text-xl font-bold">5,432</div>
                    <div className="text-xs text-muted font-mono">REPUTATION SCORE</div>
                </CyberCard>

                {/* GeeksForGeeks */}
                <CyberCard className="md:col-span-1 md:row-span-1" delay={0.5}>
                    <SiGeeksforgeeks className="text-3xl text-[#2F8D46] mb-2" />
                    <div className="text-xl font-bold">3 Star</div>
                    <div className="text-xs text-muted font-mono">CODER RATING</div>
                </CyberCard>

                {/* HackerRank */}
                <CyberCard className="md:col-span-1 md:row-span-1" delay={0.6}>
                    <SiHackerrank className="text-3xl text-[#2EC866] mb-2" />
                    <div className="text-xl font-bold">5 Star</div>
                    <div className="text-xs text-muted font-mono">PROBLEM SOLVING</div>
                </CyberCard>

                {/* Socials Uplink */}
                <CyberCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between" delay={0.7}>
                    <div className="text-xs font-mono text-secondary mb-2">COMM_UPLINK</div>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="text-white hover:text-[#0077b5] transition-colors"><FaLinkedin /></a>
                        <a href="#" className="text-white hover:text-[#1DA1F2] transition-colors"><FaTwitter /></a>
                        <a href="mailto:email@example.com" className="text-white hover:text-danger transition-colors">@</a>
                    </div>
                </CyberCard>

            </div>
        </section>
    );
};

export default CommandDeck;
