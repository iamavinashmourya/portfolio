import { useState } from "react";
import ExperiencePanel from "../../components/ui/ExperiencePanel";
import { FaArrowRight } from "react-icons/fa";

const workData = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "GravityWrite",
        period: "Apr 2024 – Jun 2024",
        location: "Tamil Nadu, IN",
        type: "Internship",
        mode: "Remote",
        desc: "Built and maintained web features using MERN stack (MongoDB, Express, React, Node). Improved API response times by 20% through backend optimization.",
        details: [
            "Built and maintained web features using MERN stack (MongoDB, Express, React, Node).",
            "Improved API response times by 20% through backend optimization and efficient database queries.",
            "Collaborated with AI/ML team to integrate intelligent features, enhancing UX.",
            "Contributed to deployment workflows with Docker."
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "REST APIs", "Python", "Git", "Docker", "CI/CD"]
    }
];

const ExperienceItem = ({ data, onClick }) => (
    <div
        onClick={onClick}
        className="group py-8 border-b border-border px-8 lg:px-12 hover:bg-surface transition-colors cursor-pointer"
    >
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors flex items-center gap-3">
                {data.role}
                <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm text-red-500" />
            </h3>
            <span className="font-mono text-sm text-muted group-hover:text-white transition-colors">{data.period}</span>
        </div>
        <div className="mb-4">
            <span className="text-lg text-gray-400 font-medium group-hover:text-gray-300 transition-colors">@ {data.company}</span>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-3xl line-clamp-2">
            {data.desc}
        </p>
    </div>
);

const ExperienceList = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <>
            <div>
                <div className="px-8 lg:px-12 py-8 border-b border-border">
                    <h2 className="mono-tag mb-2">// 03. HISTORY</h2>
                    <h3 className="text-4xl font-bold text-white">Experience</h3>
                </div>

                {workData.map((job) => (
                    <ExperienceItem
                        key={job.id}
                        data={job}
                        onClick={() => setSelectedJob(job)}
                    />
                ))}
            </div>

            <ExperiencePanel
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                data={selectedJob}
            />
        </>
    );
};

export default ExperienceList;
