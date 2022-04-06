const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./js/src/**/*.{html,js}",
    "./site/content/**/*.{html,md,js}",
    "./site/layouts/**/*.{html,md,js}"
  ],
  theme: {
    extend: {
      // Palette Generator + API for Tailwind CSS
      // 來源 https://tailwind.simeongriggs.dev/?primary=007BFF&secondary=6C757D&success=28A745&info=17A2B8&warning=FFC107&danger=DC3545&light=F8F9FA&dark=343A40
      colors: {
        primary: colors.blue,
        success: colors.emerald,
        info: colors.cyan,
        warning: colors.amber,
        danger: colors.red,
        secondary: {
          "50": "#F0F2F4",
          "100": "#DEE2E8",
          "200": "#C1C8D2",
          "300": "#A0ABBB",
          "400": "#8291A5",
          "500": "#64748B",
          "600": "#515E71",
          "700": "#3C4553",
          "800": "#292F38",
          "900": "#13161B"
        },
        light: {
          "50": "#FFFFFF",
          "100": "#FBFCFD",
          "200": "#F8FAFC",
          "300": "#F8FAFC",
          "400": "#F4F7FA",
          "500": "#F1F5F9",
          "600": "#ADC4DC",
          "700": "#6994BF",
          "800": "#3A6188",
          "900": "#1D3044"
        },
        dark: {
          "50": "#E4E9F1",
          "100": "#C9D3E4",
          "200": "#8FA4C6",
          "300": "#5979AB",
          "400": "#3A5073",
          "500": "#1E293B",
          "600": "#18212F",
          "700": "#131A25",
          "800": "#0C1018",
          "900": "#07090E"
        }
      }
    },
  },
  plugins: [],
}

