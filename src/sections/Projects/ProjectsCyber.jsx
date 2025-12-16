import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Importing images (assuming paths are correct based on previous view)
import foodOrderSys from '../../assets/Food-Ordering-Sys.png';
import YoutubeClone from '../../assets/Youtube-Clone.png';
import HypePost from '../../assets/HypePost.png';

const ProjectCardCyber = ({ src, link, title, desc, tech }) => {
    return (
        <CyberCard className="group h-full flex flex-col">
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg border border-white/10">
                <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">{desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] uppercase font-mono border border-white/20 rounded text-muted bg-white/5">
                        {t}
                    </span>
                ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between w-full px-4 py-3 border border-primary/30 text-primary uppercase font-mono text-xs tracking-wider hover:bg-primary hover:text-dark transition-all">
                <span>Access Code</span>
                <FaGithub />
            </a>
        </CyberCard>
    )
}

const ProjectsCyber = () => {
    return (
        <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
            <SectionHeader title="DEPLOYED_SYSTEMS" subtitle="[PROJECT_ARCHIVE]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProjectCardCyber
                    src={foodOrderSys}
                    link="https://github.com/iamavinashmourya/food-ordering-dev-application"
                    title="Tomato"
                    desc="Full Stack Food Ordering Web Application with cart management and order tracking."
                    tech={["React", "Node.js", "MongoDB", "Stripe"]}
                />
                <ProjectCardCyber
                    src={YoutubeClone}
                    link="https://github.com/iamavinashmourya/youtube-clone-dev"
                    title="Youtube Clone"
                    desc="Responsive video streaming platform using RapidAPI for real-time data fetching."
                    tech={["React", "Material UI", "RapidAPI"]}
                />
                <ProjectCardCyber
                    src={HypePost}
                    link="https://github.com/iamavinashmourya/HypePost"
                    title="HypePost"
                    desc="Feature-rich blogging platform designed for dynamic content creation and community engagement."
                    tech={["MERN Stack", "Redux", "JWT Auth"]}
                />
            </div>
        </section>
    );
};

export default ProjectsCyber;
