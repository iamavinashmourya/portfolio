# 🌐 Neo-Swiss Portfolio  

> A modern, minimalist developer portfolio built with a focus on **Neo-Swiss design principles**, **bold typography**, and **high performance**.

![Portfolio Preview](public/preview.png)

## 🎨 Design Philosophy

This project adopts a **Neo-Swiss** aesthetic, characterized by:
-   **Minimalism**: Clean layouts with ample whitespace.
-   **Bold Typography**: Using *Inter* and *JetBrains Mono* for strong visual hierarchy.
-   **Swiss Red Accents**: Vibrant `#ff3333` highlights for selection, scrollbars, and interactive elements.
-   **Glassmorphism**: Subtle transparency effects for modals and cards.

## 🛠️ Tech Stack

### Core
-   **React 18**: Component-based UI architecture.
-   **Vite**: Next-generation frontend tooling for blazing fast builds.
-   **Tailwind CSS**: Utility-first CSS framework for rapid styling.

### UI & Animations
-   **Framer Motion**: Production-ready animation library for React.
-   **Lucide React & React Icons**: Comprehensive icon libraries.
-   **React PDF**: Rendering PDF documents (Resumes/Certificates).

### Automation & Backend
-   **Node.js**: Scripting environment for data fetching.
-   **Cheerio & Axios**: Scraping and fetching user statistics.
-   **GitHub Actions**: Cron workflows to auto-update coding stats daily.

## � Key Features

-   **Real-time Coding Stats**: Automatically fetches and displays stats from **LeetCode**, **GeeksForGeeks**, **HackerRank**, and **GitHub**.
-   **Responsive Layout**: Optimized for all devices, from large 4K monitors to mobile screens.
-   **Interactive Preloader**: Slick entry animation with percentage counter.
-   **Certificate Archive**: Modal-based gallery for viewing certifications.
-   **Smart Navigation**: Sidebar layout that collapses/adapts based on screen size.



## 🤖 Automated Workflows

This project includes a **GitHub Actions** workflow (`.github/workflows/update_stats.yml`) that:
-   Runs **daily at 00:00 UTC** (5:30 AM IST).
-   Executes `scripts/sync-stats.js` to fetch fresh data from coding platforms.
-   Auto-commits the updated `src/data/stats.json` back to the repository.

## 📂 Project Structure

```
├── .github/workflows/  # Automation workflows
├── scripts/            # Node.js scripts (stats fetcher)
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── layout/     # Structural components (Sidebar, etc.)
│   │   ├── sidebar/    # Section content (About, Skills, etc.)
│   │   └── ui/         # Reusable UI elements (Cards, Buttons)
│   ├── data/           # Static and fetched data (stats.json)
│   ├── App.jsx         # Main application component
│   └── index.css       # Global styles & Tailwind directives
└── package.json        # Dependencies & Scripts
```

## © Copyright

This project is a personal portfolio and is **not** open source.
© 2026 Avinash Mourya. All Rights Reserved.

---

<p align="center">
  Built with ❤️ by <strong>Avinash Mourya</strong>
</p>