/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
       "Body": "#8c8c8c",
       "Primary": "#0ac5a8",
       "Pale Green": "#54bd95",
       "Slate": "#242a32",
       "Slate Darker": "#1c2229"
      },
      "fontSize": {
       "small": "1.375rem",
       "big": "5rem"
      },
      "boxShadow": {
       "Card Shadow": "10.58035659790039px 42.32142639160156px 52.90178298950195px 0px rgba(229,233,246,0.4)",
       "Card Shadow 2": "-20px 24px 0px 0px rgba(84,189,149,0.42)"
      }
     }
  },
  plugins: [],
};
