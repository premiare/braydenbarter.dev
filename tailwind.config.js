/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ".{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        react: "#61dafb",
        next: "#000",
        tailwind: "#38bdf8",
        mantine: "#339af0",
        styledComponents: "#d874b1",
        supabase: "#3fcf8e",
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
        postman: "#ff6c37",
        vscode: "#007acc",
        linux: "#fcc624",
        ubuntu: "#dd4814",
        windows: "#00adef",
        wsl: "#4d4d4d",
        storyblok: "",
        storybook: "",
        railway: "",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        project: "url(http://picsum.photos/1600/900)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "ping-slow": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
