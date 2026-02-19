import { useState } from "react";
import { FaCertificate, FaArrowRight } from "react-icons/fa";
import CertificatePanel from "../../components/ui/CertificatePanel";

const Certificates = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    return (
        <>
            <div>
                <div className="px-8 lg:px-12 py-8 border-b border-border">
                    <h2 className="mono-tag mb-2">// 06. CREDENTIALS</h2>
                    <h3 className="text-4xl font-bold text-white mb-8">Certifications</h3>

                    <button
                        onClick={() => setIsPanelOpen(true)}
                        className="group w-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 rounded-xl p-8 text-left relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaCertificate size={100} />
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                View Credentials Archive
                            </h4>
                            <p className="text-gray-400 max-w-md mb-6">
                                Access the complete collection of professional certifications, badges, and verified skills.
                            </p>

                            <div className="flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-widest">
                                VIEW_ARCHIVE
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <CertificatePanel
                isOpen={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
            />
        </>
    );
};

export default Certificates;
