/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Configure your color palette here
      Main: "hsl(0, 0%, 100%)",
      Summary: "hsl(221, 100%, 96%)",
      Text: "hsl(241, 100%, 89%)",
      ButtonColor: "hsl(224, 30%, 27%)",
      Reaction: "#ff5555",
      Memory: "#ffb21e",
      Verbal: "#00bb8f",
      Visual: "#1125d6",
    },
    extend: {},
  },
  plugins: [],
};
