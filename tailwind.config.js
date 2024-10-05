/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm:"320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        img11: "url('/nykn-case-1.png')",
        img12: "url('/nykn-case-2.png')",
        img21: "url('/maidsimpl-case-1.png')",
        img22: "url('/maidsimpl-case-2.png')",
        img31: "url('/carter-case-1.png')",
        img32: "url('/carter-case-2.png')",
        img41: "url('/mmj-case-1.png')",
        img42: "url('/mmj-case-2.png')",
      },
    },
  },
  plugins: [],
};
