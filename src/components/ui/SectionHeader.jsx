import GlitchText from "./GlitchText";
import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
    return (
        <div className="mb-12 relative">
            <div className="flex items-center gap-4 mb-2">
                <div className="h-[2px] w-12 bg-primary"></div>
                <h3 className="text-secondary font-mono tracking-widest text-sm uppercase">{subtitle}</h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                <GlitchText text={title} />
            </h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-[1px] bg-white/10 mt-4 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 h-full w-20 bg-primary/50 blur-[5px] animate-shimmer" />
            </motion.div>
        </div>
    );
};

export default SectionHeader;
