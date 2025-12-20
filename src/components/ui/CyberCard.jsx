import { motion } from "framer-motion";

const CyberCard = ({ children, className = "", delay = 0, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ scale: 1.01 }}
            className={`relative bg-black/80 border border-white/10 p-6 overflow-hidden group hover:border-primary/50 transition-colors ${className}`}
            {...props}
        >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-primary transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-primary transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors" />

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
};

export default CyberCard;
