const AboutSection = () => {
    return (
        <div id="about" className="p-8 lg:p-12 border-b border-border">
            <div className="max-w-4xl">
                <h2 className="mono-tag mb-8">// 01. INTRO</h2>

                <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                    <p>
                        I am a <span className="text-white font-medium">Full Stack Developer</span> focused on building <span className="text-white font-medium">scalable, production-ready web applications</span> with <span className="text-white font-medium">clean architecture</span> and <span className="text-white font-medium">measurable impact</span>.
                    </p>

                    <p>
                        My core expertise lies in the <span className="text-white font-medium">MERN stack</span>, <span className="text-white font-medium">RESTful APIs</span>, and <span className="text-white font-medium">modern frontend systems</span>. I have hands-on experience <span className="text-white font-medium">designing backend services</span>, <span className="text-white font-medium">optimizing database performance</span>, and <span className="text-white font-medium">integrating AI-powered features</span> into <span className="text-white font-medium">real-world products</span>. I enjoy working close to the <span className="text-white font-medium">system level</span>—where <span className="text-white font-medium">performance, reliability, and maintainability</span> truly matter.
                    </p>

                    <p>
                        During my internships, I contributed to <span className="text-white font-medium">API optimization</span>, <span className="text-white font-medium">microservice transitions</span>, and <span className="text-white font-medium">intelligent feature integration</span> alongside <span className="text-white font-medium">AI/ML teams</span>. These experiences strengthened my understanding of how <span className="text-white font-medium">real-world systems</span> are <span className="text-white font-medium">designed, built, shipped, and scaled</span> in <span className="text-white font-medium">collaborative engineering environments</span>.
                    </p>

                    <p>
                        Currently, I am expanding my skill set in <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">LLMs</span>, and <span className="text-white font-medium">system design</span> while actively building projects that combine <span className="text-white font-medium">strong engineering fundamentals</span> with <span className="text-white font-medium">modern developer tooling</span>. I am driven by <span className="text-white font-medium">curiosity</span>, <span className="text-white font-medium">consistency</span>, and a long-term goal of becoming a <span className="text-white font-medium">high-impact software engineer</span> who builds <span className="text-white font-medium">systems people can rely on</span>.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm text-muted">
                    <div className="border-l border-border pl-4">
                        <h3 className="text-white mb-2 uppercase tracking-widest">Current Status</h3>
                        <p className="text-white font-bold">Full Stack Developer</p>
                    </div>
                    <div className="border-l border-border pl-4">
                        <h3 className="text-white mb-2 uppercase tracking-widest">Location</h3>
                        <p className="text-white font-bold">Vadodara, Gujarat, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
