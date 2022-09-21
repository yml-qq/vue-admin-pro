import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  attributify: {
    prefix: "u-"
  },
  plugins: [typography()],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px"
      },
      typography: {
        DEFAULT: {
          css: {
            color: "inherit"
          }
        }
      }
    }
  }
});
