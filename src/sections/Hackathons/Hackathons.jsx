import CyberCard from "../../components/ui/CyberCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";

const Hackathons = () => {
    const events = [
        {
            title: "Smart India Hackathon 2024",
            role: "Team Lead",
            result: "Finalist",
            desc: "Developed an AI-driven solution for crop disease detection.",
            date: "Nov 2024"
        },
        {
            title: "CodeAlpha Hackathon",
            role: "Solo Dev",
            result: "Winner (Rank 1)",
            desc: "Built a blockchain voting system in 24 hours.",
            date: "Aug 2024"
        },
        {
            title: "Mumbai Tech Summit",
            role: "Participant",
            result: "Top 10",
            desc: "Optimized traffic algorithms for smart city infrastructure.",
            date: "Mar 2024"
        }
    ];

    return (
        <section id="hackathons" className="py-20 pb-24 px-8 max-w-7xl mx-auto">
            <SectionHeader title="FIELD_OPERATIONS" subtitle="[EVENT_LOGS]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((ev, i) => (
                    <CyberCard key={i} className="hover:bg-primary/5">
                        <div className="flex justify-between items-start mb-4">
                            <FaTrophy className={ev.result.includes("Winner") || ev.result.includes("Rank 1") ? "text-primary text-2xl" : "text-muted text-xl"} />
                            <span className="text-xs font-mono text-muted flex items-center gap-2"><FaCalendarAlt /> {ev.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{ev.title}</h3>
                        <span className="inline-block px-2 py-1 bg-white/10 text-xs font-mono text-secondary rounded mb-4">{ev.result}</span>
                        <p className="text-sm text-gray-400">{ev.desc}</p>
                    </CyberCard>
                ))}
            </div>
        </section>
    );
};

export default Hackathons;
