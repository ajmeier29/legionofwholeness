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
        //'hero-image': "url('/images/beachSunset.jpg')",
        'hero-image': "url('/images/blue-breakthrough-over-mountains.jpg')",
        'hero-gradient':
          "linear-gradient(100deg, rgba(246,230,203,1) 0%, rgba(160,147,125,1) 31%, rgba(160,147,125,1) 76%, rgba(246,230,203,1) 100%)",
        'hero-gradient-background':
          "linear-gradient(100deg, rgba(216,222,255,1) 0%, rgba(242,244,255,1) 27%, rgba(242,244,255,1) 76%, rgba(216,222,255,1) 100%)",
      },
      colors: {
        "primary": "#e3d5d5",
        "button-primary": "#F6E6CB",
        "button-primary-hover": "#efd7b0",
        "button-primary-disabled": "#e7dfd2",
        "button-primary-txt-disabled": "#b2ada5"
      },
      fontSize: {
        "navbar-font-xl": "20px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

