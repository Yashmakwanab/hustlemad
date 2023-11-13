/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xs': '415px',
      'sm': '640px',
      'md': '768px',
      'mdl': '920px',
      'lg': '1024px',
      'nxl': '1180px',
      'xl': '1280px',
      'xll': '1400px',
      '2xl': '1536px',
      '3xl': '1720px',
      '4xl': '1921px',
      '5xl': '2100px',
    },
    fontFamily: {
      recoleta: ["Recoleta"],
      mazzard: ["Mazzard"],
      mazzardMedium: ["MazzardMedium"],
      mazzardSemiBold: ["MazzardSemiBold"],
      spaceMonoBold: ["SpaceMonoBold"],
      spaceMono: ["spaceMono"],
    },
  },
  plugins: [],
};
