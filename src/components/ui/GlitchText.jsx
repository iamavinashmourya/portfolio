import { motion } from "framer-motion";

const GlitchText = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] animate-pulse">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-danger opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] animate-pulse delay-75">
                {text}
            </span>
        </div>
    );
};

export default GlitchText;
