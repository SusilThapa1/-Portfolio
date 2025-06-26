/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        project1: "url('images/proj1.png')",
        project2: "url('images/proj2.png')",
        project3: "url('images/proj3.png')",
        project4: "url('images/proj4.png')",
        project5: "url('images/proj5.png')",
        project6: "url('images/proj6.png')",
        available: "url('images/available.jpg')",
      },
      colors: {
        color1: "#FFBD39",
        color2: "#999999",
        color3: "#FFFFFF1A",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        progress: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        rotate: {
          to: { transform: "rotate" },
        },
      },
      animation: {
        progress: "progress 3s  ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
