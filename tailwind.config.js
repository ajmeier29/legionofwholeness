/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient':
          "linear-gradient(20deg, rgba(71,129,236,1) 0%, rgba(38,62,227,1) 41%, rgba(38,62,227,1) 60%, rgba(130,241,220,1) 100%)",
        'hero-gradient-background':
          "linear-gradient(100deg, rgba(216,222,255,1) 0%, rgba(242,244,255,1) 27%, rgba(242,244,255,1) 76%, rgba(216,222,255,1) 100%)",
      },
    },
  },
  plugins: [],
}

