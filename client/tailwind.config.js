/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#073b4c",
        success: "#06d6a0",
        warning: "#ffd166",
        danger: "#ef476f",
        primary: "#118ab2",
        info: "#f78c6b",
      },
    },
  },
  plugins: [],
};
