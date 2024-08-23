/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textColor: {
        "primary": "#FFFFFF",
        "secondary": "#8B929B",
        "accent": "#5B74E5",
        "dark": "#171824",
        "primary-lp-os-cp-cs": "#040404",
        "secondary-lp-os-cp-cs": "#777777",
        "accent-lp": "#E4720B",
      },
      backgroundColor: {
        "base": "#171824",
        "primary": "#FFFFFF",
        "secondary": "#8B929B",
        "accent": "#5B74E5",
        "base-lp-os-cp-cs": "#FFFCF7",
        "primary-lp": "#E4720B",
        "accent-lp": "#9E6DC9",
      },
      backgroundImage: {
        "blueish-gradient": "var(--blueish-gradient)",
        "accent-gradient": "var(--accent-gradient)",
        "accent-footer-gradient": "var(--accent-footer-gradient)",
        "gradient-lp": "var(--lp-gradient)"
      },
      borderColor: {
        "secondary": "#8B929B",
      },
      outlineColor: {
        "secondary": "#8B929B",
      },
      colors: {
        "primary-lp": "#E4720B",
      },
      boxShadow: {
        "lp": "0 4px 24px 12px rgba(158, 109, 201, 1)",
      }
    },
  },
  plugins: [],
}