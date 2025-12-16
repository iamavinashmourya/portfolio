import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{ scale: 1.02, borderColor: "#00f0ff", boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors hover:bg-white/10 ${className}`}
        >
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-secondary/20" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default GlassCard;
