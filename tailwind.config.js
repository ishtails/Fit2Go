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
       "body": "#8c8c8c",
       "primary": "#0ac5a8",
       "pale-green": "#54bd95",
       "Slate": "#242a32",
       "Slate-darker": "#1c2229"
      }
     }
  },
  plugins: [],
};
