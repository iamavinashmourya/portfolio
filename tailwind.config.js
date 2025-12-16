/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050505",
                primary: "#39FF14", // Acid Green
                secondary: "#00f0ff", // Holographic Cyan
                danger: "#ff003c", // Signal Red
                muted: "#e0e0e0", // Silver
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
            },
        },
    },
    plugins: [],
}
