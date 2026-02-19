import {
    SiReact, SiTailwindcss, SiRedux, SiReactquery, SiCss3, SiHtml5,
    SiNodedotjs, SiExpress, SiDjango, SiFlask,
    SiDocker, SiGithubactions, SiGitlab,
    SiMongodb, SiMysql, SiFirebase, SiSupabase,
    SiPython, SiTypescript, SiJavascript, SiCplusplus,
    SiGit, SiGithub, SiGithubcopilot, SiPycharm, SiLinux, SiIntellijidea, SiPostman, SiFigma,
    SiOpenai, SiGoogle, SiMeta
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer, FaDesktop, FaLayerGroup, FaInfinity, FaRobot, FaBrain, FaBolt, FaSlidersH, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const TechSection = ({ title, tools }) => (
    <div className="py-8 border-b border-border px-8 lg:px-12">
        <h4 className="font-mono text-xs text-muted uppercase tracking-widest mb-6">{title}</h4>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
            {tools.map(tool => (
                <div key={tool.name} className="flex items-center gap-2 group">
                    <tool.icon className="text-xl text-gray-500 group-hover:text-primary transition-colors" />
                    <span className="text-base text-gray-300 font-medium group-hover:text-white">{tool.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const TechStackList = () => {
    return (
        <div>
            <div className="px-8 lg:px-12 py-8 border-b border-border">
                <h2 className="mono-tag mb-2">// 05. ARSENAL</h2>
                <h3 className="text-4xl font-bold text-white">Technologies</h3>
            </div>

            {/* Frontend */}
            <TechSection
                title="Frontend Engineering"
                tools={[
                    { name: "React", icon: SiReact },
                    { name: "TailwindCSS", icon: SiTailwindcss },
                    { name: "Redux", icon: SiRedux },
                    { name: "React Query", icon: SiReactquery },
                    { name: "CSS", icon: SiCss3 },
                    { name: "HTML", icon: SiHtml5 },
                    { name: "SSR", icon: FaServer },
                    { name: "CSR", icon: FaDesktop },
                    { name: "Hybrid Rendering", icon: FaLayerGroup },
                ]}
            />

            {/* Backend */}
            <TechSection
                title="Backend Architecture"
                tools={[
                    { name: "Node.js", icon: SiNodedotjs },
                    { name: "Express", icon: SiExpress },
                    { name: "Django", icon: SiDjango },
                    { name: "Flask", icon: SiFlask },
                ]}
            />

            {/* Database */}
            <TechSection
                title="Databases"
                tools={[
                    { name: "MongoDB", icon: SiMongodb },
                    { name: "MySQL", icon: SiMysql },
                    { name: "Firebase", icon: SiFirebase },
                    { name: "Supabase", icon: SiSupabase },
                ]}
            />

            {/* Cloud & DevOps */}
            <TechSection
                title="Cloud & DevOps"
                tools={[
                    { name: "Docker", icon: SiDocker },
                    { name: "AWS", icon: FaAws },
                    { name: "CI/CD", icon: FaInfinity },
                    { name: "GitHub Actions", icon: SiGithubactions },
                    { name: "GitLab Actions", icon: SiGitlab },
                ]}
            />

            {/* Languages */}
            <TechSection
                title="Programming Languages"
                tools={[
                    { name: "Python", icon: SiPython },
                    { name: "TypeScript", icon: SiTypescript },
                    { name: "JavaScript", icon: SiJavascript },
                    { name: "SQL", icon: FaDatabase },
                    { name: "Java", icon: FaJava },
                    { name: "C++", icon: SiCplusplus },
                ]}
            />

            {/* Tools */}
            <TechSection
                title="Developer Tools"
                tools={[
                    { name: "Git", icon: SiGit },
                    { name: "GitHub", icon: SiGithub },
                    { name: "GitHub Copilot", icon: SiGithubcopilot },
                    { name: "VS Code", icon: VscVscode },
                    { name: "PyCharm", icon: SiPycharm },
                    { name: "Linux", icon: SiLinux },
                    { name: "IntelliJ IDEA", icon: SiIntellijidea },
                    { name: "Postman", icon: SiPostman },
                    { name: "Figma", icon: SiFigma },
                ]}
            />

            {/* AI */}
            <TechSection
                title="Artificial Intelligence"
                tools={[
                    { name: "Agentic AI", icon: FaRobot },
                    { name: "LLM", icon: FaBrain },
                    { name: "OpenAI", icon: SiOpenai },
                    { name: "Gemini", icon: SiGoogle },
                    { name: "Claude", icon: FaBrain }, // Anthropic icon might be missing, reuse Brain
                    { name: "Llama", icon: SiMeta },
                    { name: "Groq", icon: FaBolt },
                    { name: "LLM Fine-Tuning", icon: FaSlidersH },
                ]}
            />
        </div>
    );
};

export default TechStackList;
