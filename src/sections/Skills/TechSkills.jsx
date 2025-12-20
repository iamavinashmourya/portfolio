import { useState } from "react";
import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaBrain, FaTerminal, FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub, FaLinux, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCplusplus, SiC, SiHtml5, SiCss3, SiTailwindcss, SiRedux, SiReactquery, SiExpress, SiFlask, SiMongodb, SiMysql, SiRedis, SiFirebase, SiPostman, SiIntellijidea, SiPycharm, SiGithubactions, SiOpenai, SiGoogle, SiTensorflow } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SKILL_DATA = {
    // AI/ML
    "LLMs": { icon: FaBrain, color: "#8B5CF6" }, // Violet
    "RAG": { icon: FaDatabase, color: "#EC4899" }, // Pink
    "MCP": { icon: FaServer, color: "#10B981" }, // Emerald
    "OpenAI API": { icon: SiOpenai, color: "#10A37F" }, // OpenAI Green
    "Gemini API": { icon: SiGoogle, color: "#4285F4" }, // Google Blue

    // Frontend
    "React": { icon: FaReact, color: "#61DAFB" }, // React Blue
    "TailwindCSS": { icon: SiTailwindcss, color: "#38B2AC" }, // Tailwind Teal
    "Redux": { icon: SiRedux, color: "#764ABC" }, // Redux Purple
    "React Query": { icon: SiReactquery, color: "#FF4154" }, // Red
    "CSS": { icon: SiCss3, color: "#1572B6" }, // CSS Blue
    "HTML": { icon: SiHtml5, color: "#E34F26" }, // HTML Orange
    "SSR": { icon: FaServer, color: "#F59E0B" }, // Amber
    "CSR": { icon: FaCode, color: "#3B82F6" }, // Blue
    "Hybrid Rendering": { icon: FaCloud, color: "#8B5CF6" }, // Violet

    // Backend
    "Node.js": { icon: FaNodeJs, color: "#339933" }, // Node Green
    "Express": { icon: SiExpress, color: "#FFFFFF" }, // White
    "Flask": { icon: SiFlask, color: "#FFFFFF" }, // White

    // Cloud
    "Docker": { icon: FaDocker, color: "#2496ED" }, // Docker Blue
    "AWS": { icon: FaAws, color: "#FF9900" }, // AWS Orange
    "CI/CD": { icon: FaTools, color: "#6366F1" }, // Indigo
    "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" }, // Blue

    // Databases
    "MongoDB": { icon: SiMongodb, color: "#47A248" }, // Mongo Green
    "MySQL": { icon: SiMysql, color: "#4479A1" }, // MySQL Blue
    "Redis": { icon: SiRedis, color: "#DC382D" }, // Redis Red
    "Firebase": { icon: SiFirebase, color: "#FFCA28" }, // Firebase Yellow

    // Languages
    "Python": { icon: FaPython, color: "#3776AB" }, // Python Blue
    "TypeScript": { icon: SiTypescript, color: "#3178C6" }, // TS Blue
    "JavaScript": { icon: SiJavascript, color: "#F7DF1E" }, // JS Yellow
    "SQL": { icon: FaDatabase, color: "#003B57" }, // SQL Dark Blue
    "Java": { icon: FaJava, color: "#007396" }, // Java Blue
    "C++": { icon: SiCplusplus, color: "#00599C" }, // C++ Blue
    "C": { icon: SiC, color: "#A8B9CC" }, // C Grey

    // Tools
    "Git": { icon: FaGitAlt, color: "#F05032" }, // Git Orange
    "GitHub": { icon: FaGithub, color: "#FFFFFF" }, // White
    "GitHub Copilot": { icon: FaGithub, color: "#FFFFFF" }, // White
    "VS Code": { icon: VscVscode, color: "#007ACC" }, // VS Code Blue
    "PyCharm": { icon: SiPycharm, color: "#21D789" }, // PyCharm Green
    "Linux": { icon: FaLinux, color: "#FCC624" }, // Linux Yellow
    "IntelliJ IDEA": { icon: SiIntellijidea, color: "#FE315D" }, // IntelliJ Pink
    "Postman": { icon: SiPostman, color: "#FF6C37" }, // Postman Orange
    "Figma": { icon: FaFigma, color: "#F24E1E" }, // Figma Red
};


const SkillTag = ({ skill }) => {
    const data = SKILL_DATA[skill] || { icon: FaCode, color: "#ffffff" };
    const Icon = data.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-gray-400 bg-white/5 rounded border border-white/5 transition-all duration-300 cursor-default"
            style={{
                borderColor: isHovered ? data.color : 'rgba(255,255,255,0.05)',
                backgroundColor: isHovered ? `${data.color}15` : 'rgba(255,255,255,0.05)', // 15 = ~8% opacity hex
                color: isHovered ? 'white' : undefined
            }}
        >
            <Icon
                className="text-sm transition-colors duration-300"
                style={{ color: isHovered ? data.color : undefined }}
            />
            <span>{skill}</span>
        </div>
    );
};

const SkillCategory = ({ title, icon: Icon, skills }) => {
    return (
        <CyberCard className="h-full">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:text-white group-hover:border-primary/50 transition-colors">
                    <Icon className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                ))}
            </div>
        </CyberCard>
    );
};

const TechSkills = () => {
    const categories = [
        {
            title: "AI & Machine Learning",
            icon: FaBrain,
            skills: ["LLMs", "RAG", "MCP", "OpenAI API", "Gemini API"]
        },
        {
            title: "Frontend Development",
            icon: FaCode,
            skills: ["React", "TailwindCSS", "Redux", "React Query", "CSS", "HTML", "SSR", "CSR", "Hybrid Rendering"]
        },
        {
            title: "Backend Development",
            icon: FaServer,
            skills: ["Node.js", "Express", "Flask"]
        },
        {
            title: "Cloud & DevOps",
            icon: FaCloud,
            skills: ["Docker", "AWS", "CI/CD", "GitHub Actions"]
        },
        {
            title: "Databases",
            icon: FaDatabase,
            skills: ["MongoDB", "MySQL", "Redis", "Firebase"]
        },
        {
            title: "Programming Languages",
            icon: FaTerminal,
            skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "C"]
        },
        {
            title: "Tools & Platforms",
            icon: FaTools,
            skills: ["Git", "GitHub", "GitHub Copilot", "VS Code", "PyCharm", "Linux", "IntelliJ IDEA", "Postman", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
            <SectionHeader title="TECHNICAL_ARSENAL" subtitle="[SKILL_MATRIX]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        {...category}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechSkills;
