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
        primary: {
          50: "#E5F2FF",
          100: "#CCE5FF",
          200: "#99CAFF",
          300: "#66B0FF",
          400: "#3396FF",
          500: "#007BFF",
          600: "#0063CC",
          700: "#004A99",
          800: "#003166",
          900: "#001933"
        },
        secondary: {
          50: "#F1F2F3",
          100: "#E1E3E5",
          200: "#C3C7CB",
          300: "#A5ABB1",
          400: "#899299",
          500: "#6C757D",
          600: "#575F65",
          700: "#40454A",
          800: "#2B2E31",
          900: "#151719"
        },
        success: {
          50: "#E6F9EB",
          100: "#CEF3D6",
          200: "#9CE7AE",
          300: "#6BDC85",
          400: "#39D05D",
          500: "#28A745",
          600: "#1F8437",
          700: "#186329",
          800: "#10421B",
          900: "#08210E"
        },
        info: {
          50: "#E4F8FC",
          100: "#C9F2F8",
          200: "#92E5F1",
          300: "#5CD8EB",
          400: "#25CAE4",
          500: "#17A2B8",
          600: "#128091",
          700: "#0E606D",
          800: "#094049",
          900: "#052024"
        },
        warning: {
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE79E",
          300: "#FFDA6B",
          400: "#FFCD38",
          500: "#FFC107",
          600: "#D19D00",
          700: "#9E7700",
          800: "#6B5000",
          900: "#332600"
        },
        danger: {
          50: "#FBE9EB",
          100: "#F8D8DB",
          200: "#F1ACB3",
          300: "#EA858F",
          400: "#E35E6B",
          500: "#DC3545",
          600: "#BB2030",
          700: "#8B1824",
          800: "#5B1017",
          900: "#30080C"
        },
        light: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FCFCFD",
          300: "#FCFCFD",
          400: "#F9FAFB",
          500: "#F8F9FA",
          600: "#BEC7D0",
          700: "#8596A8",
          800: "#536374",
          900: "#2A333C"
        },
        dark: {
          50: "#E8EBED",
          100: "#D5D9DD",
          200: "#A8B0B8",
          300: "#7E8A96",
          400: "#57616B",
          500: "#343A40",
          600: "#292E33",
          700: "#202427",
          800: "#151719",
          900: "#0B0D0E"
        }
      }
    },
  },
  plugins: [],
}

