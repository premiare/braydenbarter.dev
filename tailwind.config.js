/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        react: "#61dafb",
        next: "#000",
        tailwind: "#38bdf8",
        mantine: "#339af0",
        styledComponents: "#d874b1",
        supabase: "#f56565",
        typescript: "#3178c6",
        javascript: "#f7df1e",
        node: "#339933",
        html: "#e34c26",
        css: "#264de4",
        sass: "#cc6699",
        bootstrap: "#563d7c",
        jquery: "#0769ad",
        git: "#f05032",
        github: "#181717",
        figma: "#f24e1e",
        photoshop: "#31a8ff",
        premiere: "#ea77ff",
        npm: "#cb3837",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
