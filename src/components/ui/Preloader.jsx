import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "AVINASH MOURYA";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(onComplete, 1000); // Wait 1s after typing finishes
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
            >
                {text}
                <span className="animate-pulse text-accent">_</span>
            </motion.h1>
        </motion.div>
    );
};

export default Preloader;
