/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#050505",       // Jet Black
                surface: "#121212",  // Dark Gray
                text: "#f0f0f0",     // Off-white
                muted: "#888888",    // Mid Gray
                border: "#333333",   // Grid Lines
                accent: "#ff3333",   // Swiss Red (Minimal)
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                'none': '0px',
                'sm': '0px',
                DEFAULT: '0px',
                'md': '0px',
                'lg': '0px',
                'xl': '0px',
                '2xl': '0px',
                '3xl': '0px',
                'full': '9999px', // Keep circles for avatars
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
