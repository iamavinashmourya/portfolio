import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import statsData from "../../data/stats.json";

const StatRow = ({ icon: Icon, label, value, sub, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-6 border-b border-border hover:bg-surface px-8 lg:px-12 transition-colors">
        <div className="flex items-center gap-6">
            <Icon className="text-2xl text-muted group-hover:text-white transition-colors" />
            <div>
                <h4 className="text-xl font-bold text-gray-200 group-hover:text-white">{label}</h4>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">{sub}</p>
            </div>
        </div>
        <div className="text-right">
            <span className="block text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">{value}</span>
        </div>
    </a>
);

const ProblemSolving = () => {
    const data = {
        leetcode: statsData.leetcode,
        geeksforgeeks: statsData.geeksforgeeks,
        hackerrank: statsData.hackerrank,
        github: statsData.github
    };

    return (
        <div className="">
            <div className="px-8 lg:px-12 py-8 border-b border-border">
                <h2 className="mono-tag mb-2">// 02. METRICS</h2>
                <h3 className="text-4xl font-bold text-white">Problem Solving</h3>
            </div>

            <div className="flex flex-col">
                <StatRow
                    icon={SiLeetcode}
                    label="LeetCode"
                    sub={`Ranking: ${data.leetcode.ranking || "N/A"}`}
                    value={data.leetcode.solved}
                    link="https://leetcode.com/iamavinashmourya/"
                />
                <StatRow
                    icon={SiGeeksforgeeks}
                    label="GeeksForGeeks"
                    sub={`Coding Score: ${data.geeksforgeeks.score}`}
                    value={data.geeksforgeeks.problems}
                    link="https://auth.geeksforgeeks.org/user/avinash30o0/"
                />
                <StatRow
                    icon={SiHackerrank}
                    label="HackerRank"
                    sub="Verified Skills: Problem Solving"
                    value={`${data.hackerrank.badges} Badges`}
                    link="https://www.hackerrank.com/profile/avinashgoweb"
                />
                <StatRow
                    icon={FaGithub}
                    label="GitHub"
                    sub={`${data.github.repos} Repositories`}
                    value={`${data.github.contributions} Contributions`}
                    link="https://github.com/iamavinashmourya"
                />
            </div>
        </div>
    );
};

export default ProblemSolving;
