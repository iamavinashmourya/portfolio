import { FaUniversity } from "react-icons/fa";

const Education = () => {
    return (
        <div id="education" className="p-8 lg:p-12 border-b border-border">
            <h2 className="mono-tag mb-8">// 02. EDUCATION</h2>

            <div className="space-y-8">
                {/* B.Tech */}
                <div className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                            B.Tech in Information Technology
                        </h3>
                        <span className="font-mono text-sm text-muted">2025 – Present</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <span className="text-lg text-gray-400">Parul University</span>
                        <span className="hidden md:inline text-border">|</span>
                        <span className="font-mono text-xs text-accent uppercase tracking-wider">Vadodara, India</span>
                    </div>
                </div>

                {/* Diploma */}
                <div className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                            Diploma in Information Technology
                        </h3>
                        <span className="font-mono text-sm text-muted">2022 – 2025</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <span className="text-lg text-gray-400">Parul University</span>
                        <span className="hidden md:inline text-border">|</span>
                        <span className="font-mono text-xs text-muted uppercase tracking-wider">CGPA: 8.03</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
