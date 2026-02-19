import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import statsData from "../../data/stats.json";

const StatItem = ({ icon: Icon, label, value, colorClass }) => (
    <div className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:bg-white/10 transition-colors">
        <div className={`p-3 rounded-xl bg-opacity-20 ${colorClass}`}>
            <Icon className="text-xl text-white" />
        </div>
        <div>
            <h4 className="text-2xl font-bold text-white tracking-wider">{value}</h4>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        </div>
    </div>
);

const HorizontalStats = () => {
    const [stats, setStats] = useState({
        leetcode: { solved: "0", rank: "N/A" },
        github: { repos: 0 },
        geeksforgeeks: { problems: statsData.geeksforgeeks.problems + "+" },
        hackerrank: { problems: statsData.hackerrank.certificates }
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const ghRes = await fetch("https://api.github.com/users/iamavinashmourya");
                const ghData = await ghRes.json();
                const lcRes = await fetch("https://leetcode-stats-api.herokuapp.com/iamavinashmourya");
                const lcData = await lcRes.json();

                if (ghData && lcData.status === "success") {
                    setStats(prev => ({
                        ...prev,
                        leetcode: { solved: lcData.totalSolved },
                        github: { repos: ghData.public_repos }
                    }));
                }
            } catch (e) {
                console.error("Stats fetch error", e);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatItem
                icon={SiLeetcode}
                label="LeetCode"
                value={stats.leetcode.solved}
                colorClass="bg-orange-600"
            />
            <StatItem
                icon={FaGithub}
                label="Repos"
                value={stats.github.repos}
                colorClass="bg-gray-700"
            />
            <StatItem
                icon={SiGeeksforgeeks}
                label="GFG"
                value={stats.geeksforgeeks.problems}
                colorClass="bg-green-600"
            />
            <StatItem
                icon={SiHackerrank}
                label="Certs"
                value={stats.hackerrank.problems}
                colorClass="bg-green-500"
            />
        </div>
    );
};

export default HorizontalStats;
