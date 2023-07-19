/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rock: "#b69e31",
        ghost: "#70559b",
        steel: "#b7b9d0",
        water: "#6493eb",
        grass: "#74cb48",
        psychic: "#fb5584",
        ice: "#9ad6df",
        dark: "#75574c",
        fairy: "#e69eac",
        normal: "#aaa67f",
        fighting: "#c12239",
        flying: "#a891ec",
        poison: "#a43e9e",
        ground: "#dec16b",
        bug: "#a7b723",
        fire: "#f57d31",
        electric: "#f9cf30",
        dragon: "#7037ff",
        darkGray: "#212121",
        mediumGray: "#666666",
        lightGray: "#E0E0E0",
        backGround: "#f7f7f7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
