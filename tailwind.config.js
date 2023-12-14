/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: { max: "1024px" },
        tablet: { max: "768px" },
        mobile: { max: "574px" },
        smobile: { max: "400px" },
        ssmobile: { max: "320px" },
      },
    },
  },
  plugins: [],
};
