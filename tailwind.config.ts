import type { Config } from "tailwindcss";

export default {
   darkMode: "class",
   content: ["./src/**/*.vue"],
   theme: {
      screens: {
         "sm": "576px",
         "md": "768px",
         "lg": "992px",
         "xl": "1280px",
         "2xl": "1366px",
         "3xl": "1566px",
      },
      colors: {
         white: "#fff",
         primary: "#514EB7",
         secondary: "#F98076",
         orange: "#feecea",
         tertiary: "#211747",
         border: "#EAEAEA",
         violet: "#f6f5ff",
         backet: "#1d1d1d99",
         transparent: "transparent",
      },
      fontFamily: {
         Giga: ["Giga Sans"],
         Beret: ["Beret LT Std"],
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "15px",
            sm: "20px",
            xl: "30px",
         },
         screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1280px",
         },
      },
      extend: {
         gridTemplateRows: {
            "mini-2": "min-content min-content",
         },
         gridTemplateColumns: {
            catalog: "repeat(auto-fit, minmax(240px, 1fr))",
         },
      },
   },
} satisfies Config;
