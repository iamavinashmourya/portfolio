import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../src/data');
const DATA_FILE = path.join(DATA_DIR, 'stats.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

async function fetchGFG() {
    try {
        const username = 'avinash30o0';
        // Try multiple profile URL variations
        const urls = [
            `https://auth.geeksforgeeks.org/user/${username}/practice`,
            `https://www.geeksforgeeks.org/user/${username}/`
        ];

        for (const url of urls) {
            console.log(`Trying GFG URL: ${url}`);
            try {
                const { data } = await axios.get(url, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
                });
                const $ = cheerio.load(data);

                // Strategy 2: Extract Next.js hydration data
                // Look for total_problems_solved":3 or similar in script tags
                // Flexible Regex: allows for escaped quotes or spacing
                const scriptData = data.match(/total_problems_solved\D+(\d+)/);
                const scoreData = data.match(/score\D+(\d+)/); // Finds "score":5

                let extractedSolved = 0;
                let extractedScore = 0;

                if (scriptData && scriptData[1]) {
                    extractedSolved = parseInt(scriptData[1]);
                    console.log(`✅ GFG Scrape Success (Next.js): ${extractedSolved} Solved`);
                }

                if (scoreData && scoreData[1]) {
                    extractedScore = parseInt(scoreData[1]);
                    console.log(`   Detailed: Score ${extractedScore}`);
                }

                if (extractedSolved > 0) {
                    return { solved: extractedSolved, score: extractedScore };
                }

                // Fallback to DOM (unlikely to work if SSR is partial)
                let solved = $('.scoreCard_head_left--score__3_L_k').text() ||
                    $('.problemsSolved').text();

                // Clean up string
                solved = solved.replace(/[^0-9]/g, '');

                if (solved && parseInt(solved) > 0) {
                    console.log(`✅ GFG Scrape Success: ${solved} Solved`);
                    return parseInt(solved);
                }
            } catch (err) {
                // Continue to next URL
            }
        }
        console.log('❌ GFG Scrape Failed: Could not extract number.');
        return null;
    } catch (error) {
        console.error('GFG Error:', error.message);
        return null;
    }
}

async function fetchHackerRank() {
    try {
        const username = 'avinashgoweb';
        const url = `https://www.hackerrank.com/profile/${username}`;
        console.log(`Fetching HackerRank: ${url}`);

        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
        });

        // HackerRank is React-based, data often in window.__INITIAL_DATA__ or requires simple text search
        // We know we have 5 Verified Certificates from manual check.
        // Let's look for "Certificates" keyword if possible, or just default to known good if scraping fails (HR is hard to scrape).

        // Simple verification text search
        const $ = cheerio.load(data);
        const text = $.text();

        // Check for specific certificates we know
        const certs = ["React", "Java", "SQL", "Problem Solving", "Go"];
        let foundCerts = 0;
        certs.forEach(c => {
            if (text.includes(`Certificate: ${c}`)) foundCerts++;
        });

        if (foundCerts > 0) {
            console.log(`✅ HackerRank Scrape Success: ${foundCerts} Certs found in text.`);
            return foundCerts;
        }

        return null;

    } catch (error) {
        console.error('HackerRank Error:', error.message);
        return null;
    }
}

async function main() {
    console.log('🚀 Starting Offline Sync...');

    const gfg = await fetchGFG();
    const hr = await fetchHackerRank();

    // Default Fallback values based on visual inspection (Dec 2025)
    // Solved: 3, Score: 5
    const gfgDefaults = { solved: 3, score: 5 };

    const stats = {
        lastUpdated: new Date().toISOString(),
        geeksforgeeks: {
            problems: (gfg && gfg.solved) ? gfg.solved : gfgDefaults.solved,
            score: (gfg && gfg.score) ? gfg.score : gfgDefaults.score,
            isReal: !!(gfg && gfg.solved)
        },
        hackerrank: {
            certificates: hr !== null ? hr : 5, // Fallback to 5
            isReal: hr !== null
        }
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(stats, null, 2));
    console.log(`\n💾 Stats saved to ${DATA_FILE}`);
}

main();
