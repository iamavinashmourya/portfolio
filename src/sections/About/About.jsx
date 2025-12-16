import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";

const About = () => {
    return (
        <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
            <SectionHeader title="OPERATOR_BIO" subtitle="[IDENTITY_VERIFIED]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <CyberCard className="h-full">
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                            <span className="text-primary font-mono text-sm block mb-4">// INITIALIZING...</span>
                            I am an engineering student with a <span className="text-white font-bold">relentless drive</span> for coding.
                            Unlike standard units, I specialize in full-stack architecture, algorithm optimization, and high-performance WebOps.
                            <br /><br />
                            My mission is simple: <span className="text-secondary">Build systems that defy expectations.</span>
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="text-sm font-mono text-muted">CURRENT_STATUS</h4>
                                <p className="text-lg font-bold text-white">Full Stack Dev</p>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <h4 className="text-sm font-mono text-muted">LOCATION</h4>
                                <p className="text-lg font-bold text-white">Mumbai, IN</p>
                            </div>
                        </div>
                    </CyberCard>
                </div>

                <div className="md:col-span-1 grid grid-rows-2 gap-4">
                    <CyberCard className="flex flex-col justify-center items-center">
                        <div className="text-5xl font-mono text-primary mb-2">03+</div>
                        <div className="text-xs tracking-widest text-muted">YEARS CODING</div>
                    </CyberCard>
                    <CyberCard className="flex flex-col justify-center items-center">
                        <div className="text-5xl font-mono text-secondary mb-2">20+</div>
                        <div className="text-xs tracking-widest text-muted">PROJECTS BUILT</div>
                    </CyberCard>
                </div>
            </div>
        </section>
    );
};

export default About;
