/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        "main-bg": "var(--color-main-bg)",
        "main-black": "var(--color-main-black)",
        "main-green": "var(--color-main-green)",
        "additional-gray": "var(--color-additional-gray)",
        "form-bg": "var(--color-form-bg)",
        "checkbox-select": "var(--color-checkbox-select)",
        "main-gray": "var(--color-main-gray)",
      },
      lineHeight: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
