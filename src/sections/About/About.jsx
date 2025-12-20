import { useState } from "react";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import AboutModal from "../../components/ui/AboutModal";

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fullBio = (
        <>
            <span className="text-primary font-mono text-sm block mb-4">// INITIALIZING_PROFILE...</span>
            I am a <span className="text-white font-bold">Full Stack Developer</span> focused on building <span className="text-white font-bold">scalable, production-ready web applications</span> with <span className="text-white font-bold">clean architecture</span> and <span className="text-white font-bold">measurable impact</span>.
            <br /><br />
            My core expertise lies in the <span className="text-white font-bold">MERN stack</span>, <span className="text-white font-bold">RESTful APIs</span>, and <span className="text-white font-bold">modern frontend systems</span>. I have hands-on experience <span className="text-white font-bold">designing backend services</span>, <span className="text-white font-bold">optimizing database performance</span>, and <span className="text-white font-bold">integrating AI-powered features</span> into <span className="text-white font-bold">real-world products</span>. I enjoy working close to the <span className="text-white font-bold">system level</span>—where <span className="text-white font-bold">performance, reliability, and maintainability</span> truly matter.
            <br /><br />
            During my internships, I contributed to <span className="text-white font-bold">API optimization</span>, <span className="text-white font-bold">microservice transitions</span>, and <span className="text-white font-bold">intelligent feature integration</span> alongside <span className="text-white font-bold">AI/ML teams</span>. These experiences strengthened my understanding of how <span className="text-white font-bold">real-world systems</span> are <span className="text-white font-bold">designed, built, shipped, and scaled</span> in <span className="text-white font-bold">collaborative engineering environments</span>.
            <br /><br />
            Currently, I am expanding my skill set in <span className="text-white font-bold">Generative AI</span>, <span className="text-white font-bold">LLMs</span>, and <span className="text-white font-bold">system design</span> while actively building projects that combine <span className="text-white font-bold">strong engineering fundamentals</span> with <span className="text-white font-bold">modern developer tooling</span>. I am driven by <span className="text-white font-bold">curiosity</span>, <span className="text-white font-bold">consistency</span>, and a long-term goal of becoming a <span className="text-white font-bold">high-impact software engineer</span> who builds <span className="text-white font-bold">systems people can rely on</span>.
        </>
    );

    return (
        <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
            <SectionHeader title="ABOUT" subtitle="[IDENTITY_VERIFIED]" />

            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                <div className="md:col-span-2">
                    <div className="relative pl-2">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="h-1 w-12 bg-primary/50 rounded-full"></div>
                            <span className="font-mono text-primary text-sm tracking-widest">SYSTEM_ID</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-mono font-bold text-white tracking-tight">
                            AVINASH_<span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">MOURYA</span>
                            <span className="animate-pulse text-primary">_</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <CyberCard className="h-full">
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                            <span className="text-primary font-mono text-sm block mb-4">// INITIALIZING_PROFILE...</span>
                            I am a <span className="text-white font-bold">Full Stack Developer</span> focused on building <span className="text-white font-bold">scalable, production-ready web applications</span> with <span className="text-white font-bold">clean architecture</span> and <span className="text-white font-bold">measurable impact</span>.
                            <br /><br />
                            My core expertise lies in the <span className="text-white font-bold">MERN stack</span>, <span className="text-white font-bold">RESTful APIs</span>, and <span className="text-white font-bold">modern frontend systems</span>. I have hands-on experience <span className="text-white font-bold">designing backend services</span>, <span className="text-white font-bold">optimizing database performance</span>, and <span className="text-white font-bold">integrating AI-powered features</span> into <span className="text-white font-bold">real-world products</span>...
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="ml-2 text-primary font-mono text-sm hover:underline hover:text-white transition-colors cursor-pointer"
                            >
                                [READ_MORE]
                            </button>
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="text-sm font-mono text-muted">CURRENT_STATUS</h4>
                                <p className="text-lg font-bold text-white">Full Stack Developer</p>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <h4 className="text-sm font-mono text-muted">LOCATION</h4>
                                <p className="text-lg font-bold text-white">Vadodara, Gujarat, India</p>
                            </div>
                        </div>
                    </CyberCard>
                </div>

                <div className="md:col-span-1">
                    <CyberCard className="h-full">
                        <div className="h-full flex flex-col justify-center items-center p-8">
                            {/* Years Coding */}
                            <div className="flex flex-col items-center mb-10">
                                <div className="text-7xl md:text-8xl font-mono text-primary font-bold drop-shadow-[0_0_25px_rgba(0,255,157,0.4)] leading-none mb-4">2+</div>
                                <div className="text-sm tracking-[0.3em] text-gray-400 font-bold uppercase">Years Coding</div>
                            </div>

                            {/* Divider */}
                            <div className="w-16 h-1 bg-white/10 rounded-full mb-10"></div>

                            {/* Projects Built */}
                            <div className="flex flex-col items-center">
                                <div className="text-7xl md:text-8xl font-mono text-secondary font-bold drop-shadow-[0_0_25px_rgba(0,255,157,0.4)] leading-none mb-4">5+</div>
                                <div className="text-sm tracking-[0.3em] text-gray-400 font-bold uppercase">Projects Built</div>
                            </div>
                        </div>
                    </CyberCard>
                </div>
            </div>

            <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={fullBio} />
        </section>
    );
};

export default About;
