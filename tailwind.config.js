/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "20px 50px 25px 0px rgba(134, 134, 134, 0.16)",
        "custom-heavy": "60px 60px 49.5px 0px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        backgroundPrimary: "#F3F6EE",
        backgroundSecondary: "#F6F1EE",
        backgroundBlue: "#F3F6F5",
        textPrimary: "#000",
        textSecondary: "#505050",
      },
      screens: {
        xs: "480px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [],
};
