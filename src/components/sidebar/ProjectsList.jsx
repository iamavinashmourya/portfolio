import { FaGithub, FaArrowRight } from "react-icons/fa";

const ProjectItem = ({ title, desc, stack, link, category }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block py-12 border-b border-border px-8 lg:px-12 hover:bg-surface transition-colors">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 md:gap-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
            <div className="flex items-center gap-4 self-start md:self-auto">
                <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider">{category}</span>
                <FaArrowRight className="text-xl -rotate-45 text-muted group-hover:text-white group-hover:rotate-0 transition-all duration-300 transform" />
            </div>
        </div>

        <div className="max-w-2xl">
            <p className="text-gray-400 leading-relaxed mb-4 text-base md:text-lg">
                {desc}
            </p>
            <p className="font-mono text-xs md:text-sm text-accent tracking-wide">
                {stack.join(" • ")}
            </p>
        </div>
    </a>
)

const ProjectsList = () => {
    return (
        <div>
            <div className="px-8 lg:px-12 py-8 border-b border-border">
                <h2 className="mono-tag mb-2">// 05. WORKS</h2>
                <h3 className="text-4xl font-bold text-white">Featured Projects</h3>
            </div>

            <ProjectItem
                title="DevOrbit"
                desc="Comprehensive developer productivity tracker with goal setting, progress visualization, and activity analytics."
                stack={["React", "Electron", "React Native", "Node.js", "Express", "MongoDB"]}
                link="https://github.com/iamavinashmourya/DevOrbit"
                category="Productivity Ecosystem"
            />
            <ProjectItem
                title="Farmcare"
                desc="Smart agricultural management system for crop monitoring, resource optimization, and yield prediction."
                stack={["React", "Python", "Gemini AI", "Custom LLM", "TensorFlow"]}
                link="https://github.com/iamavinashmourya/Farmcare"
                category="AgriTech AI"
            />
            <ProjectItem
                title="HypePost"
                desc="Feature-rich blogging platform designed for dynamic content creation and community engagement."
                stack={["React", "Node.js", "MongoDB", "Redux", "Firebase", "Tailwind"]}
                link="https://github.com/iamavinashmourya/HypePost"
                category="Social Platform"
            />
        </div>
    );
};

export default ProjectsList;
