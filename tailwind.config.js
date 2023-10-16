/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-green": "#F2FF9F",
        "dark-gray": "#0B0C0F",
      },
      fontFamily: {
        thunder: ["Thunder"],
      },
      fontSize: {
        "2xl": "clamp(100px,20cqw,300px)",
        xl: "clamp(30px,5cqw,40px)",
        lg: "clamp(18px,4cqw,24px)",
      },
      backgroundImage: {
        "bg-hero": "url(/assets/hero.png)",
      },
      backgroundSize: {
        desktop: "50%",
        tablet: "110%",
        moblie: "190%",
      },
      animation: {
        marquee: "marquee 4s linear infinite forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        desktop: { max: "1025px" },
        tablet: { max: "820px" },
        mobile: { max: "475px" },
      },
    },
  },
  plugins: [],
};
