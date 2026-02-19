import { motion } from "framer-motion";

const SidebarLayout = ({ sidebar, content }) => {
    return (
        <div className="min-h-screen bg-bg text-text flex justify-center p-0">
            <div className="max-w-[1600px] w-full flex flex-col lg:flex-row border-x border-border min-h-screen">

                {/* Left Sidebar - Sticky on Desktop */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full min-h-[100dvh] lg:min-h-0 lg:w-[400px] lg:h-screen lg:sticky lg:top-0 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-border bg-bg z-20"
                >
                    {sidebar}
                </motion.aside>

                {/* Right Content - Scrollable */}
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 min-w-0 bg-bg"
                >
                    {content}
                </motion.main>

            </div>
        </div>
    );
};

export default SidebarLayout;
