import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPhone, FaArrowRight, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CV from "../../assets/Avinash_Mourya_CV.pdf";

import { useState } from "react";
import ResumeModal from "../ui/ResumeModal";

const SidebarProfile = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <div className="h-full flex flex-col p-6 lg:p-8 relative overflow-hidden">

                {/* Branding / Name */}
                <div className="mb-6 shrink-0">
                    <h1 className="text-5xl font-bold tracking-tight leading-none mb-2 text-white">
                        AVINASH<br className="lg:hidden" /> <span className="hidden lg:inline"> </span><span className="text-muted">MOURYA</span>
                    </h1>
                    <p className="text-xs font-mono tracking-widest text-accent uppercase">
                        Full Stack Developer
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex-1 mb-6 min-h-0 overflow-y-auto no-scrollbar">
                    <nav className="flex flex-col gap-0.5">
                        <NavButton label="01. About" id="about" />
                        <NavButton label="02. Education" id="education" />
                        <NavButton label="03. Problem Solving" id="problem-solving" />
                        <NavButton label="04. Experience" id="experience" />
                        <NavButton label="05. Tech Stack" id="skills" />
                        <NavButton label="06. Projects" id="projects" />
                        <NavButton label="07. Certificates" id="certificates" />
                    </nav>
                </div>

                {/* Contact Details */}
                <div className="space-y-2 text-sm mb-6 shrink-0">
                    <div className="flex flex-col gap-2 font-mono text-muted">
                        <a href="mailto:avinashgoweb@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                            <FaEnvelope className="text-xs" /> avinashgoweb@gmail.com
                        </a>
                        <a href="tel:+919313437008" className="hover:text-white transition-colors flex items-center gap-2">
                            <FaPhone className="text-xs" /> +91 9313437008
                        </a>
                    </div>
                </div>

                {/* Footer / Socials */}
                <div className="mt-auto pt-4 border-t border-border flex justify-between items-center shrink-0">
                    <div className="flex gap-4">
                        <SocialBtn icon={FaGithub} href="https://github.com/iamavinashmourya" />
                        <SocialBtn icon={FaLinkedin} href="https://linkedin.com/in/avinashmourya/" />
                        <SocialBtn icon={FaStackOverflow} href="https://stackoverflow.com/users/25598878/avinash-maurya" />
                        <SocialBtn icon={FaXTwitter} href="https://x.com/mouryaavinash12" />
                        <SocialBtn icon={FaInstagram} href="https://www.instagram.com/avinashmourya.js/?hl=en" />
                    </div>

                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className="font-mono text-xs hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                        RESUME <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

const NavButton = ({ label, id }) => (
    <button
        onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex items-center justify-between w-full text-left py-2 border-b border-border/30 hover:border-text transition-colors"
    >
        <span className="text-lg font-medium text-muted group-hover:text-white transition-colors">{label}</span>
        <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
    </button>
)

const SocialBtn = ({ icon: Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
        <Icon />
    </a>
)

export default SidebarProfile;
