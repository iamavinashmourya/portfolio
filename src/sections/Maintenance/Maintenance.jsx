import { motion } from "framer-motion";
import MatrixBackground from "../../components/ui/MatrixBackground";
import { FaTerminal, FaCog, FaCode } from "react-icons/fa";

const Maintenance = () => {
    return (
        <main className="min-h-screen bg-dark text-white relative flex flex-col justify-center items-center overflow-hidden">
            <MatrixBackground />

            <div className="relative z-10 p-8 max-w-2xl w-full text-center">
                {/* Animated Icon */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-8 text-primary opacity-80"
                >
                    <FaCog size={64} />
                </motion.div>

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="px-4 py-1.5 border border-primary/30 bg-primary/10 rounded-full text-primary font-mono text-sm tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SYSTEM_UPGRADE_IN_PROGRESS
                    </span>
                </motion.div>

                {/* Main Glitch Text */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-tighter"
                >
                    REDEVELOPING<span className="text-primary animate-pulse">_</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted/70 text-lg md:text-xl font-mono mb-12"
                >
                    The neural architecture is being rewired for higher performance.
                    <br className="hidden md:block" />
                    Live works will be back online shortly.
                </motion.p>

                {/* Code Block Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-black/80 border border-white/10 rounded-lg p-6 text-left font-mono text-sm text-gray-400 overflow-hidden relative group"
                >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
                    <div className="flex gap-2 mb-4 text-xs opacity-50">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-1">
                        <p><span className="text-secondary">git</span> commit -m <span className="text-primary">"Reimagining the future"</span></p>
                        <p><span className="text-secondary">git</span> push origin <span className="text-primary">main</span></p>
                        <p className="animate-pulse">_</p>
                    </div>
                </motion.div>

                <footer className="mt-20 text-xs font-mono text-muted/30">
                    AVINASH MOURYA :: [MAINTENANCE_MODE]
                </footer>
            </div>
        </main>
    );
};

export default Maintenance;
