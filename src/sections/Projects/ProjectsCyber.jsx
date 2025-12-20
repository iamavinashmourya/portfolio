import { useState, useRef, useEffect } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(0, 255, 65, 0.25)" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-xl border border-white/10 bg-black overflow-hidden group ${className}`}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Content Container */}
            <div className="relative h-full bg-black/90 backdrop-blur-xl rounded-[11px] m-[1px] p-8 flex flex-col z-10">
                {children}
            </div>
        </div>
    );
};

const ProjectCardCyber = ({ link, title, desc, tech, status = "DEPLOYED" }) => {
    const getStatusColor = (s) => {
        switch (s) {
            case 'DEPLOYED': return 'text-green-400 border-green-400/30 bg-green-400/10';
            case 'IN_DEV': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
            case 'BUILT': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
            default: return 'text-primary border-primary/30 bg-primary/10';
        }
    };

    return (
        <SpotlightCard className="h-full min-h-[320px]">
            <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                    <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors tracking-tight mb-1">{title}</h3>
                    <div className="h-1 w-12 bg-primary/50 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
                <div className={`px-3 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-widest ${getStatusColor(status)}`}>
                    {status}
                </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-[11px] font-medium text-gray-300 bg-white/5 rounded-md border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-colors">
                        {t}
                    </span>
                ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto group/btn flex items-center justify-between w-full p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Access_Code
                </span>
                <FaArrowRight className="text-primary transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
        </SpotlightCard>
    )
}

const ProjectsCyber = () => {
    return (
        <section id="projects" className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
            <SectionHeader title="PROJECT_SYSTEMS" subtitle="[DEVELOPMENT_LOG]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCardCyber
                    link="https://github.com/iamavinashmourya/DevOrbit"
                    title="DevOrbit"
                    desc="Comprehensive developer productivity tracker with goal setting, progress visualization, and activity analytics."
                    tech={["React", "Electron", "React Native", "Node.js", "Express", "MongoDB"]}
                    status="IN_DEV"
                />
                <ProjectCardCyber
                    link="https://github.com/iamavinashmourya/Farmcare"
                    title="Farmcare"
                    desc="Smart agricultural management system for crop monitoring, resource optimization, and yield prediction."
                    tech={["React", "Python", "Gemini AI", "Custom LLM", "TensorFlow"]}
                    status="DEPLOYED"
                />
                <ProjectCardCyber
                    link="https://github.com/iamavinashmourya/HypePost"
                    title="HypePost"
                    desc="Feature-rich blogging platform designed for dynamic content creation and community engagement."
                    tech={["MERN Stack", "Redux", "JWT Auth"]}
                    status="BUILT"
                />
            </div>
        </section>
    );
};

export default ProjectsCyber;
