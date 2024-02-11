/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textColor: {
        "primary": "#FFFFFF",
        "secondary": "#8B929B",
        "accent": "#5B74E5",
      },
      backgroundColor: {
        "base": "#171824",
        "primary": "#FFFFFF",
        "secondary": "#8B929B",
        "accent": "#5B74E5",
      },
      backgroundImage: {
        "blueish-gradient": "var(--blueish-gradient)",
        "accent-gradient": "var(--accent-gradient)",
      },
      borderColor: {
        "secondary": "#8B929B",
      }
    },
  },
  plugins: [],
}