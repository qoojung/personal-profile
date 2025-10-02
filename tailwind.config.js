/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Bright tech aesthetic color palette
        "tech-light": "#ffffff",
        "tech-light-bg": "#f8fafc",
        "tech-accent-blue": "#3b82f6",
        "tech-accent-cyan": "#06b6d4",
        "tech-accent-teal": "#14b8a6",
        "tech-accent-pink": "#ec4899",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-teal": "0 0 20px rgba(20, 184, 166, 0.4)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.4)",
      },
    },
  },
  plugins: [],
};
